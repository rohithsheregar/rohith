// Records results into progress.json. The coach runs these after checking the user's work.
//
//   node scripts/record.mjs start [date]                         set start date
//   node scripts/record.mjs session <low|medium|high> <energy 1-5> [mood words...]
//   node scripts/record.mjs learn <id> [note...]                 first learned today -> R1 due tomorrow
//   node scripts/record.mjs review <id> <pass|fail> [score 0-5]  spaced-revision result
//   node scripts/record.mjs score <id> <0-5>                     log a quiz score only
//   node scripts/record.mjs weak <id> [note...]                  flag as weak (needs work)
//   node scripts/record.mjs known <id>                           mark mastered (evidence required)
//   node scripts/record.mjs problem <dsa-id> <n>                 add n solved DSA problems
//   node scripts/record.mjs note <text...>                       add a coach note to weakAreas
//   node scripts/record.mjs stage <stage>                        set current stage, e.g. 2
import { load, save, find, today, addDays, diffDays, GAPS } from './lib.mjs';

const [cmd, ...args] = process.argv.slice(2);
const data = load();
const t0 = today();

function setNextDue(t) {
  if (t.revisionStage >= GAPS.length) { t.status = 'known'; t.nextDue = null; return; }
  const due = addDays(t.learnedOn, GAPS[t.revisionStage]);
  t.nextDue = due <= t0 ? addDays(t0, 1) : due; // never in the past
}

switch (cmd) {
  case 'start': data.meta.startDate = args[0] || t0; break;
  case 'stage': data.meta.currentStage = args[0]; break;
  case 'session': {
    const [mode, energy, ...mood] = args;
    const m = data.meta;
    if (m.lastSession !== t0) {
      const gap = m.lastSession ? diffDays(m.lastSession, t0) : null;
      m.streak = gap === 1 || gap === null ? m.streak + 1 : 1;
      m.longestStreak = Math.max(m.longestStreak, m.streak);
      m.lastSession = t0;
      if (!m.startDate) m.startDate = t0;
    }
    const entry = { date: t0, mode, energy: Number(energy) || null, mood: mood.join(' ') };
    data.history = data.history.filter((h) => h.date !== t0).concat(entry);
    break;
  }
  case 'learn': {
    const t = find(data, args[0]);
    t.status = 'learning'; t.learnedOn = t0; t.lastReviewed = t0; t.revisionStage = 0; t.nextDue = addDays(t0, GAPS[0]);
    if (args.length > 1) t.note = args.slice(1).join(' ');
    break;
  }
  case 'review': {
    const t = find(data, args[0]);
    const pass = args[1] === 'pass';
    if (args[2] !== undefined) t.scores.push(Number(args[2]));
    t.lastReviewed = t0;
    if (pass) {
      t.revisionStage += 1;
      if (t.status === 'weak') t.status = 'learning';
      setNextDue(t);
    } else {
      t.status = 'weak'; t.failCount += 1; t.revisionStage = 0; t.learnedOn = t0; t.nextDue = addDays(t0, 1);
    }
    break;
  }
  case 'score': find(data, args[0]).scores.push(Number(args[1])); break;
  case 'weak': { const t = find(data, args[0]); t.status = 'weak'; t.nextDue = addDays(t0, 1); if (args.length > 1) t.note = args.slice(1).join(' '); break; }
  case 'known': { const t = find(data, args[0]); t.status = 'known'; t.nextDue = null; t.lastReviewed = t0; break; }
  case 'problem': { const t = find(data, args[0]); t.problemsSolved = (t.problemsSolved || 0) + Number(args[1] || 1); if (t.status === 'new') t.status = 'learning'; break; }
  case 'note': data.weakAreas.push(`${t0}: ${args.join(' ')}`); break;
  default:
    console.error('Unknown command. See the header of scripts/record.mjs.');
    process.exit(1);
}
save(data);
console.log(`ok: ${cmd} ${args.join(' ')}`);
