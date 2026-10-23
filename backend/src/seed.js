import { readFile } from 'node:fs/promises';
import { connectDatabase } from './database.js';
import { schemas } from './schemas.js';
const records = JSON.parse(await readFile(new URL('../seed-content.json', import.meta.url), 'utf8'));
const { db, client } = await connectDatabase();
try {
  for (const [resource, schema] of Object.entries(schemas)) {
    if (await db.collection(resource).countDocuments({})) { console.log(`${resource}: already populated, skipped.`); continue; }
    const rows = records[resource].map(row => ({ ...schema.parse(row), createdAt: new Date(), updatedAt: new Date() }));
    if (rows.length) await db.collection(resource).insertMany(rows);
    console.log(`${resource}: imported ${rows.length} existing website records.`);
  }
} finally { await client.close(); }
