import 'dotenv/config';
import { connectDatabase } from './database.js';
import { createApp } from './app.js';
const { client, db } = await connectDatabase();
const app = createApp(db, { jwtSecret: process.env.JWT_SECRET, trustProxy: Number(process.env.TRUST_PROXY || 0) });
const server = app.listen(Number(process.env.PORT || 3001), '0.0.0.0', () => console.log('TeddyPups API is ready.'));
const stop = () => server.close(async () => { await client.close(); process.exit(0); });
process.on('SIGTERM', stop);
process.on('SIGINT', stop);
