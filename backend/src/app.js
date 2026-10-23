import express from 'express';
import helmet from 'helmet';
import { rateLimit } from 'express-rate-limit';
import multer from 'multer';
import { ObjectId, GridFSBucket } from 'mongodb';
import { SignJWT, jwtVerify } from 'jose';
import bcrypt from 'bcryptjs';
import { Readable } from 'node:stream';
import { schemas, loginSchema, inquirySchema, inquiryStatusSchema } from './schemas.js';

export const COOKIE_NAME = 'tp_admin';
const cookiePath = '/api/public/manage';
export function createApp(db, config) {
  if (!config.jwtSecret || config.jwtSecret.length < 32) throw new Error('JWT_SECRET must contain at least 32 characters');
  const app = express();
  app.disable('x-powered-by');
  if (config.trustProxy) app.set('trust proxy', config.trustProxy);
  app.use(helmet());
  app.use(express.json({ limit: '40kb' }));
  app.use(rateLimit({ windowMs: 60_000, limit: 120, standardHeaders: 'draft-8', legacyHeaders: false, message: { error: 'Too many requests. Try again shortly.' } }));
  const secret = new TextEncoder().encode(config.jwtSecret);
  const cookieOptions = { httpOnly: true, secure: true, sameSite: 'strict', path: cookiePath, maxAge: 8 * 60 * 60 * 1000 };
  const parse = (schema, data) => schema.parse(data);
  const id = value => { if (!/^[a-f0-9]{24}$/.test(value)) { const e = new Error('Invalid record ID'); e.status = 400; throw e; } return new ObjectId(value); };
  const dto = row => { const { _id, ...rest } = row; return { ...rest, id: String(_id) }; };
  const admin = async (req, res, next) => {
    try {
      const token = (req.headers.cookie || '').split(';').map(v => v.trim()).find(v => v.startsWith(`${COOKIE_NAME}=`))?.slice(COOKIE_NAME.length + 1);
      if (!token) return res.status(401).json({ error: 'Please sign in.' });
      const { payload } = await jwtVerify(token, secret, { issuer: 'teddypups', audience: 'teddypups-admin' });
      if (typeof payload.sub !== 'string' || !/^[a-f0-9]{24}$/.test(payload.sub)) return res.status(401).json({ error: 'Please sign in again.' });
      const user = await db.collection('admins').findOne({ _id: new ObjectId(payload.sub), active: true });
      if (!user) return res.status(403).json({ error: 'Admin access required.' });
      req.admin = user;
      next();
    } catch { return res.status(401).json({ error: 'Please sign in again.' }); }
  };
  app.get('/health', async (_req, res) => { await db.command({ ping: 1 }); res.json({ ok: true }); });
  app.get('/catalog', async (_req, res) => {
    const puppies = await db.collection('puppies').find({ status: { $ne: 'draft' } }, { projection: { name: 1, slug: 1, breed: 1, sex: 1, age: 1, description: 1, status: 1, photos: 1, order: 1 } }).sort({ order: 1 }).limit(500).toArray();
    const faqs = await db.collection('faqs').find({ published: true }, { projection: { question: 1, answer: 1, order: 1 } }).sort({ order: 1 }).limit(500).toArray();
    const stories = await db.collection('stories').find({ published: true }, { projection: { name: 1, caption: 1, photo: 1, order: 1 } }).sort({ order: 1 }).limit(500).toArray();
    res.set('Cache-Control', 'no-store').json({ puppies: puppies.map(dto), faqs: faqs.map(dto), stories: stories.map(dto) });
  });
  app.post('/inquiries', rateLimit({ windowMs: 3600_000, limit: 8, keyGenerator: req => req.ip, validate: { keyGeneratorIpFallback: false }, message: { error: 'Please try again later or contact us on WhatsApp.' } }), async (req, res) => {
    const data = parse(inquirySchema, req.body);
    if (data.website) return res.status(202).json({ ok: true });
    const { website, ...record } = data;
    await db.collection('inquiries').insertOne({ ...record, status: 'new', createdAt: new Date() });
    res.status(201).json({ ok: true });
  });
  app.post('/auth/login', rateLimit({ windowMs: 900_000, limit: 10, message: { error: 'Too many sign-in attempts. Try again in 15 minutes.' } }), async (req, res) => {
    const data = parse(loginSchema, req.body);
    const user = await db.collection('admins').findOne({ email: data.email, active: true });
    // Always compare a hash so missing users take the same expensive path.
    const fallbackHash = '$2b$12$LQv3c1yqBWVHxkd0LHAkCOYz6TtxA7AfcR4wvQDXMhwHfI3WeeZGe';
    const valid = await bcrypt.compare(data.password, user?.passwordHash || fallbackHash);
    if (!user || !valid) return res.status(401).json({ error: 'Email or password is incorrect.' });
    const token = await new SignJWT({}).setProtectedHeader({ alg: 'HS256' }).setSubject(String(user._id)).setIssuer('teddypups').setAudience('teddypups-admin').setIssuedAt().setExpirationTime('8h').sign(secret);
    res.cookie(COOKIE_NAME, token, cookieOptions).json({ email: user.email });
  });
  app.post('/auth/logout', (_req, res) => { res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: undefined }); res.json({ ok: true }); });
  app.get('/auth/me', admin, (req, res) => { res.set('Cache-Control', 'no-store').json({ email: req.admin.email }); });
  app.use('/admin', admin, (_req, res, next) => { res.set('Cache-Control', 'no-store'); next(); });
  for (const [resource, schema] of Object.entries(schemas)) {
    app.get(`/admin/${resource}`, async (_req, res) => res.json((await db.collection(resource).find({}).sort({ order: 1 }).limit(1000).toArray()).map(dto)));
    app.post(`/admin/${resource}`, async (req, res) => {
      const data = parse(schema, req.body);
      const result = await db.collection(resource).insertOne({ ...data, createdAt: new Date(), updatedAt: new Date() });
      res.status(201).json({ ...data, id: String(result.insertedId) });
    });
    app.put(`/admin/${resource}/:id`, async (req, res) => {
      const data = parse(schema, req.body);
      const result = await db.collection(resource).updateOne({ _id: id(req.params.id) }, { $set: { ...data, updatedAt: new Date() } });
      if (!result.matchedCount) return res.status(404).json({ error: 'Record not found.' });
      res.json({ ...data, id: req.params.id });
    });
    app.delete(`/admin/${resource}/:id`, async (req, res) => {
      const result = await db.collection(resource).deleteOne({ _id: id(req.params.id) });
      if (!result.deletedCount) return res.status(404).json({ error: 'Record not found.' });
      res.json({ ok: true });
    });
  }
  app.get('/admin/inquiries', async (_req, res) => res.json((await db.collection('inquiries').find({}).sort({ createdAt: -1 }).limit(1000).toArray()).map(dto)));
  app.patch('/admin/inquiries/:id', async (req, res) => {
    const data = parse(inquiryStatusSchema, req.body);
    const result = await db.collection('inquiries').updateOne({ _id: id(req.params.id) }, { $set: data });
    if (!result.matchedCount) return res.status(404).json({ error: 'Inquiry not found.' });
    res.json({ ok: true });
  });
  const upload = multer({ storage: multer.memoryStorage(), limits: { fileSize: 5 * 1024 * 1024, files: 1 } });
  app.post('/admin/uploads', upload.single('photo'), async (req, res) => {
    const b = req.file?.buffer;
    if (!b) return res.status(400).json({ error: 'Choose a photo.' });
    const type = b[0] === 255 && b[1] === 216 && b[2] === 255 ? 'image/jpeg' : b.subarray(0, 8).equals(Buffer.from([137,80,78,71,13,10,26,10])) ? 'image/png' : b.toString('ascii', 0, 4) === 'RIFF' && b.toString('ascii', 8, 12) === 'WEBP' ? 'image/webp' : null;
    if (!type) return res.status(400).json({ error: 'Use a JPG, PNG, or WebP photo.' });
    const bucket = new GridFSBucket(db, { bucketName: 'photos' });
    const stream = bucket.openUploadStream('photo', { metadata: { contentType: type } });
    await new Promise((resolve, reject) => Readable.from(b).pipe(stream).on('finish', resolve).on('error', reject));
    res.status(201).json({ url: `/api/public/manage/files/${stream.id}` });
  });
  app.get('/files/:id', async (req, res) => {
    const fileId = id(req.params.id);
    // Draft and unattached photos cannot be read by the public.
    const url = `/api/public/manage/files/${fileId}`;
    const visible = await db.collection('puppies').findOne({ status: { $ne: 'draft' }, photos: url }) || await db.collection('stories').findOne({ published: true, photo: url });
    if (!visible) return res.status(404).json({ error: 'Photo not found.' });
    const bucket = new GridFSBucket(db, { bucketName: 'photos' });
    const files = await bucket.find({ _id: fileId }).toArray();
    if (!files[0]) return res.status(404).json({ error: 'Photo not found.' });
    res.type(files[0].metadata?.contentType || 'application/octet-stream').set('Cache-Control', 'no-store');
    bucket.openDownloadStream(fileId).on('error', () => res.destroy()).pipe(res);
  });
  app.use((_req, res) => res.status(404).json({ error: 'Not found.' }));
  app.use((err, _req, res, _next) => {
    if (err.name === 'ZodError') return res.status(400).json({ error: err.issues[0]?.message || 'Check your entries.' });
    if (err.code === 11000) return res.status(409).json({ error: 'This puppy slug already exists.' });
    if (err.code === 'LIMIT_FILE_SIZE') return res.status(400).json({ error: 'Photos must be 5 MB or smaller.' });
    const status = err.status && err.status >= 400 && err.status < 500 ? err.status : 500;
    res.status(status).json({ error: status === 500 ? 'Something went wrong. Please try again.' : 'Invalid request.' });
  });
  return app;
}
