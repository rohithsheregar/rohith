# Daily Dev Coach: Full-Stack, Backend and DSA

> **No plan for today yet.** Open Claude, attach this repo, and say: **"plan today"**.
> Tell it your energy (1-5), how much time you have, and how you feel. It will read your whole history and rewrite this page with today's plan and a full guide for every step.

## How the daily loop works

| When | You say | Claude does |
| --- | --- | --- |
| Morning | "Plan today. Energy 3, 90 minutes, a bit tired." | Reads `progress.json`, `profile.md` and the last 7 logs, picks the mode, rewrites this README with the plan and a full guide per step, archives it in `days/`, commits and pushes |
| Day | (you work) | You follow the guide here: learn, build, play around, push your code to GitHub |
| Evening | "Check today's work." | Verifies each step against its completion criteria (reads your commits, runs tests, quizzes you), records results, writes `log/`, updates this README, pushes |
| Next morning | "Plan today." | Starts again from what actually happened, not from what was planned |

If you skip a day, nothing breaks: the next plan is a Low day, with no catching up.

## What lives where

- `README.md` (this file): today's plan and guide, regenerated daily
- `ROADMAP.md`: the full roadmap, modes, menus, check questions and projects
- `progress.json`: the coach's memory of every topic (new, learning, known, weak) and when each revision is due
- `profile.md`: your goals, strengths and weak spots
- `CLAUDE.md`: the instructions the coach follows
- `log/`: one file per day of what happened; `days/`: one file per day of what was planned
- `notes/`, `projects/`: your own notes and code
- `scripts/`: helpers the coach runs (`plan.mjs` reads, `record.mjs` writes)

Modes: **Low** 45 min (revise only), **Medium** 60-90 min (1-2 new topics), **High** 3-5 h (4-6 new topics). Any mode counts as a done day.

## Your first-day checklist

1. Push this repo to GitHub (see below).
2. Open Claude, attach the repo, say "plan today".
3. After your first session, say "check today's work".

## First push

```
git init
git add .
git commit -m "Add daily coach"
git branch -M main
git remote add origin https://github.com/rohithsheregar/REPO-NAME.git
git push -u origin main
```

Replace `REPO-NAME` with your repository name. Create the empty repo on GitHub first (no README, no .gitignore).
