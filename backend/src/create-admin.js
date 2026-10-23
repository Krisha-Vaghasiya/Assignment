import bcrypt from 'bcryptjs';
import { connectDatabase } from './database.js';
const email = process.env.ADMIN_EMAIL?.trim().toLowerCase();
const password = process.env.ADMIN_INITIAL_PASSWORD;
if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || !password || password.length < 12 || password.length > 128) throw new Error('Set ADMIN_EMAIL and ADMIN_INITIAL_PASSWORD (12–128 characters) in the backend host environment.');
const { db, client } = await connectDatabase();
try {
  await db.collection('admins').insertOne({ email, passwordHash: await bcrypt.hash(password, 12), active: true, createdAt: new Date() });
  console.log('Admin created. Remove ADMIN_INITIAL_PASSWORD from the host environment.');
} finally { await client.close(); }
