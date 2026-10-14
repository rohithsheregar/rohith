<!--
COACH: this is the exact structure of every daily plan. Copy it into days/YYYY-MM-DD.md and README.md,
replace every {{placeholder}}, delete these comments, and write every guide section in full.
Each step needs the complete guide block. Write it as documentation Rohith can follow without leaving the page.
-->
# Today: {{Weekday, YYYY-MM-DD}} ({{Low|Medium|High}} day)

> Day {{n}} · Streak {{streak}} · Stage {{stage and name}} · Mood/energy today: {{energy}}/5, {{mood in his words}} · Time: {{time}}

**Why this plan:** {{two sentences: what the history showed and why today is shaped this way}}

## Yesterday

{{Three lines: what was planned, what was verified as done, what to watch. First day: "First day, nothing to review."}}

## Today at a glance

| # | Step | Type | Time | Done when |
| --- | --- | --- | --- | --- |
| 1 | {{Revision: topic}} | Revise | {{10 min}} | {{short criterion}} |
| 2 | {{Learn: topic}} | Learn | {{35 min}} | {{short criterion}} |
| 3 | {{Build: what}} | Build | {{30 min}} | {{short criterion}} |
| 4 | {{DSA: problem or pattern}} | DSA | {{20 min}} | {{short criterion}} |

Order: do them top to bottom. Phone out of reach. If you are stuck for 30 minutes, write the question in the log and move on.

---

## Step 1: {{title}}

**Type / time:** {{Learn | Build | Revise | DSA | Stretch}} · {{minutes}}

### What it is
{{Plain-language definition, 3-6 sentences. One concrete example.}}

### Why it exists (and a little history)
{{The problem that made this necessary, who or what introduced it, how it evolved. 4-8 sentences. Only facts you are confident of; say "roughly" when unsure.}}

### How it works
{{The mechanism. Short code snippet or diagram in text where it helps. Name the key terms in bold.}}

### Steps to do
1. {{Concrete action with the exact thing to open: link, command, file}}
2. {{...}}
3. {{...}}

### Playground (experiment on purpose)
- {{Experiment 1: change X, predict the result, then run it}}
- {{Experiment 2: break it deliberately and read the error}}
- {{Experiment 3: a small variation that forces understanding}}

### Completion criteria (I will check these tonight)
- [ ] {{Observable criterion 1, e.g. "file exists at projects/x/y.ts and test passes"}}
- [ ] {{Observable criterion 2}}
- [ ] {{Explain-it criterion: "I can explain ___ in five sentences without notes"}}

### Common mistakes
- {{Mistake and how to spot it}}
- {{Mistake and how to spot it}}

### Read more
- {{Link from ROADMAP.md or official docs}}

---

{{Repeat the full guide block for every step in the table.}}

## Before you close the laptop

1. Commit and push your work (`git add . && git commit -m "work: {{topic}}" && git push`).
2. Jot anything you were stuck on in `notes/` or just tell me tonight.
3. Come back to Claude and say **"check today's work"**.

## Parking lot
{{Anything interesting that came up; do not open it today.}}
