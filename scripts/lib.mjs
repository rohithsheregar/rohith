import { readFileSync, writeFileSync } from 'node:fs';

export const GAPS = [1, 3, 7, 21, 60]; // days after learnedOn for R1..R5

export function today() {
  if (process.env.TODAY) return process.env.TODAY;
  return new Date().toLocaleDateString('en-CA', { timeZone: 'Asia/Calcutta' }); // YYYY-MM-DD
}
export function addDays(date, n) {
  const d = new Date(date + 'T00:00:00Z');
  d.setUTCDate(d.getUTCDate() + n);
  return d.toISOString().slice(0, 10);
}
export function diffDays(a, b) { // b - a
  return Math.round((new Date(b + 'T00:00:00Z') - new Date(a + 'T00:00:00Z')) / 86400000);
}
export function load(path = 'progress.json') { return JSON.parse(readFileSync(path, 'utf8')); }
export function save(data, path = 'progress.json') { writeFileSync(path, JSON.stringify(data, null, 2) + '\n'); }
export function find(data, id) {
  const t = data.topics.find((x) => x.id === id);
  if (!t) { console.error(`Unknown topic id: ${id}`); process.exit(1); }
  return t;
}
