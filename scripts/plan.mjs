// Prints the facts the coach needs to plan today. Usage: node scripts/plan.mjs [low|medium|high]
// Read-only. The coach (Claude) adds judgment on top of this output.
import { readdirSync, existsSync } from 'node:fs';
import { load, today, diffDays } from './lib.mjs';

const mode = (process.argv[2] || 'medium').toLowerCase();
const newCount = { low: 0, medium: 2, high: 5 }[mode] ?? 2;
const data = load();
const t0 = today();
const { meta } = data;

const gap = meta.lastSession ? diffDays(meta.lastSession, t0) : null;
const stageTopics = data.topics.filter((t) => t.track === 'stage');
const dsaTopics = data.topics.filter((t) => t.track === 'dsa');

const due = data.topics
  .filter((t) => t.nextDue && t.nextDue <= t0 && t.status !== 'new')
  .sort((a, b) => a.nextDue.localeCompare(b.nextDue));
const weak = data.topics.filter((t) => t.status === 'weak');
const inProgress = data.topics.filter((t) => t.status === 'learning' && !(t.nextDue && t.nextDue <= t0));
const nextNew = stageTopics.filter((t) => t.status === 'new').slice(0, Math.max(newCount, 3));
const nextDsa = dsaTopics.find((t) => t.status !== 'known');

const fmt = (t) => `  - ${t.id} | ${t.title}${t.nextDue ? ` | due ${t.nextDue}` : ''}${t.scores.length ? ` | scores ${t.scores.join(',')}` : ''}${t.failCount ? ` | fails ${t.failCount}` : ''}${t.note ? ` | note: ${t.note}` : ''}`;
const list = (arr) => (arr.length ? arr.map(fmt).join('\n') : '  (none)');

const stageStats = {};
for (const t of stageTopics) {
  const s = (stageStats[`${t.stage} ${t.stageName}`] ??= { known: 0, learning: 0, weak: 0, total: 0 });
  s.total++; if (t.status in s) s[t.status]++;
}

console.log(`TODAY: ${t0}   REQUESTED MODE: ${mode} (new topics: ${newCount})`);
console.log(`START DATE: ${meta.startDate ?? 'not set'}   CURRENT STAGE: ${meta.currentStage}`);
console.log(`LAST SESSION: ${meta.lastSession ?? 'never'}${gap !== null ? ` (${gap} day${gap === 1 ? '' : 's'} ago)` : ''}   STREAK: ${meta.streak} (best ${meta.longestStreak})`);
if (gap !== null && gap > 1) console.log(`!! ${gap - 1} missed day(s). Rule: next day is a LOW day, no catching up, no guilt.`);
console.log(`\nREVISIONS DUE (${due.length}):\n${list(due)}`);
console.log(`\nWEAK TOPICS (${weak.length}):\n${list(weak)}`);
console.log(`\nIN PROGRESS, NOT YET DUE (${inProgress.length}):\n${list(inProgress)}`);
console.log(`\nNEXT NEW TOPICS in roadmap order:\n${list(nextNew)}`);
console.log(`\nNEXT DSA PATTERN: ${nextDsa ? `${nextDsa.id} | ${nextDsa.title} | status ${nextDsa.status} | problems solved ${nextDsa.problemsSolved}` : 'all known'}`);
console.log('\nSTAGE PROGRESS:');
for (const [k, s] of Object.entries(stageStats)) console.log(`  ${k}: ${s.known}/${s.total} known, ${s.learning} learning, ${s.weak} weak`);
if (meta.weakAreasText) console.log(`\nWEAK AREAS (coach notes): ${meta.weakAreasText}`);
if (data.weakAreas.length) console.log(`\nWEAK AREAS (coach notes):\n${data.weakAreas.map((w) => '  - ' + w).join('\n')}`);

if (existsSync('log')) {
  const logs = readdirSync('log').filter((f) => f.endsWith('.md')).sort().slice(-7);
  console.log(`\nLAST ${logs.length} LOG FILES (read these): ${logs.map((l) => 'log/' + l).join(', ') || '(none yet)'}`);
}
