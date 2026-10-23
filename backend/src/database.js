import 'dotenv/config';
import { MongoClient } from 'mongodb';
export async function connectDatabase() {
  const uri = process.env.MONGODB_URI;
  if (!uri) throw new Error('Set MONGODB_URI on your backend host.');
  const client = new MongoClient(uri, { serverSelectionTimeoutMS: 10000 });
  await client.connect();
  const db = client.db(process.env.MONGODB_DATABASE || 'teddypups');
  await db.collection('admins').createIndex({ email: 1 }, { unique: true });
  await db.collection('puppies').createIndex({ slug: 1 }, { unique: true });
  await db.collection('inquiries').createIndex({ createdAt: -1 });
  return { client, db };
}
