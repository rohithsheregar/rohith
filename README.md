# Today: Saturday, 2026-10-17 (High day)

> Day 1 · Streak 0 → 1 · Stage 0-1 Tools and web basics · Mood/energy today: 4/5, feeling good · Time: 4-5 hours

**Why this plan:** This is Day 1 — no history yet, no revisions, no weak topics. You have 4-5 hours and energy 4/5, so High mode is the right call. We'll lay the single most important foundation: shell + Git (the two tools you will use every day for the rest of this roadmap) plus your first DSA pattern (Arrays and Hashing).

## Yesterday

First day, nothing to review.

## Today at a glance

| # | Step | Type | Time | Done when |
| --- | --- | --- | --- | --- |
| 1 | DSA: Arrays and Hashing — 3 problems | DSA | 60 min | 3 problems attempted, approach + complexity stated for each |
| 2 | Learn: Shell navigation, pipes, grep, find | Learn | 40 min | Can navigate, grep, and find without looking anything up |
| 3 | Learn: Shell scripting and environment variables | Learn | 40 min | Have a working .sh script that uses a variable and runs |
| 4 | Learn: Git — commit, branch, merge | Learn | 40 min | Repo exists in projects/git-practice/ with 3 branches and a merge commit |
| 5 | Build: init the Stage 0-1 project | Build | 40 min | projects/personal-page/ has index.html on GitHub Pages |
| 6 | Assess and revise | Assess | 30 min | Can answer 4 of 5 shell/git quiz questions without notes |

Order: do them top to bottom. Phone out of reach. If you are stuck for 30 minutes, write the question in the log and move on.

---

## Step 1: DSA — Arrays and Hashing (3 problems)

**Type / time:** DSA · 60 min

### What it is

Arrays and Hashing is the first and most fundamental DSA pattern. Nearly every interview problem touches it. The core idea: use a hash map (an object or Map in JavaScript) to trade time for space — instead of scanning an array repeatedly (O(n squared)), you store values you have seen in a map and look them up in O(1). Arrays give you indexed access; hashing gives you fast membership checks and counting.

### Why it exists (and a little history)

Before hash maps, checking "have I seen this value before?" required scanning the whole array each time — O(n) per check, O(n squared) total. Hash maps were formalised in the 1950s and became standard library types in every language (dict in Python, HashMap in Java, Map/plain objects in JavaScript). The pattern shows up in roughly a third of all LeetCode easy/medium problems. It is the pattern interviewers reach for first because it tests whether you know how to break out of nested loops.

### How it works

Two Sum pattern in JavaScript:

  function twoSum(nums, target) {
    const seen = {};           // value to index map
    for (let i = 0; i < nums.length; i++) {
      const complement = target - nums[i];
      if (complement in seen) return [seen[complement], i];
      seen[nums[i]] = i;
    }
  }

Key terms: complement, seen map, single-pass, O(n) time / O(n) space.

### Steps to do

1. Open NeetCode (https://neetcode.io/roadmap), click "Arrays & Hashing". Watch the Two Sum video (~10 min).
2. Solve 217. Contains Duplicate on LeetCode — target 5 min. Use a Set, not a sort.
3. Solve 242. Valid Anagram — target 10 min. Count character frequencies with a plain object.
4. Solve 1. Two Sum — target 15 min. Classic single-pass hash map.
5. For each problem write in notes/dsa-log.md: pattern name, approach in one sentence, time complexity, space complexity.

### Playground (experiment on purpose)

- On Contains Duplicate: solve it with .sort() first (O(n log n)), then with a Set (O(n)). Time both on 100k elements with console.time.
- On Two Sum: try the naive double-loop first. Watch the complexity go from O(n squared) to O(n).
- On Valid Anagram: test with "rat" and "car" — they are anagrams. Make sure your code agrees.

### Completion criteria (I will check these tonight)

- [ ] All 3 problems submitted and accepted on LeetCode.
- [ ] notes/dsa-log.md exists with one entry per problem: approach + time/space complexity.
- [ ] Can state "Two Sum uses a hash map because..." in two sentences without notes.

### Common mistakes

- Using .indexOf() inside a loop — that is O(n squared). Always reach for a Set or Map first.
- Forgetting that JS object keys are strings: seen[2] and seen["2"] are the same key. Use Map if keys must be typed.
- Solving and moving on without writing the pattern down. Write it now; you will forget by tomorrow.

### Read more

- NeetCode 150: https://neetcode.io/ — your DSA home for this whole roadmap.

---

## Step 2: Learn — Shell navigation, pipes, grep, find

**Type / time:** Learn · 40 min

### What it is

The shell is how you control your computer without a GUI. Every developer workflow — running servers, querying logs, scripting deployments — goes through the shell. Navigation commands let you move around the filesystem; pipes chain commands together; grep searches text; find locates files. These four things cover 80% of what you will do in a terminal for the rest of your career.

### Why it exists (and a little history)

The Unix shell was designed at Bell Labs in the late 1960s (Ken Thompson, Dennis Ritchie). The pipe operator (|) was added in 1973 and is widely considered one of the best design ideas in computing: instead of one giant program that does everything, you compose small tools. This philosophy — "do one thing well" — shaped how software is built today. Git, Node.js, Docker: all are command-line tools that you pipe and script together.

### How it works

  pwd             # Where am I?
  ls -la          # List all files, long format (shows hidden files)
  cd projects/    # Change into a directory
  cd ..           # Go up one level

  # Pipes — output of left becomes input of right
  ls -la | grep ".md"       # Only .md files
  cat file.txt | wc -l      # Count lines

  # grep — search for a pattern
  grep "TODO" index.js       # Lines with TODO in one file
  grep -r "TODO" .           # Recursive: all files in current dir
  grep -n "function" app.js  # Show line numbers

  # find — locate files
  find . -name "*.json"      # All JSON files from here down
  find . -type d             # All directories
  find . -name "*.log" -mtime -1  # Log files from the last day

Key terms: stdin, stdout, pipe (|), glob (* wildcard), flag (-r, -n, -la).

### Steps to do

1. Open Git Bash (on Windows) or your terminal.
2. Navigate to your daily-coach repo and run ls -la. See CLAUDE.md, README.md, etc.
3. Run: grep -r "TODO" .
4. Run: find . -name "*.md"
5. Run: ls -la | grep ".md"
6. Read The Missing Semester Shell Tools notes: https://missing.csail.mit.edu/2020/shell-tools/
7. Write 5 commands you did not know before in notes/shell-notes.md.

### Playground (experiment on purpose)

- Run: find . -name "*.json" | xargs grep "status" — find all JSON files and search inside them for "status".
- Run: grep -n "stage" ROADMAP.md | head -20 — first 20 lines mentioning "stage".
- Break it: run grep with no arguments and read the error message carefully.

### Completion criteria (I will check these tonight)

- [ ] notes/shell-notes.md exists with at least 5 commands, each with a one-line explanation.
- [ ] Can run grep -r and find . -name from memory.
- [ ] Can explain what a pipe (|) does in one sentence without notes.

### Common mistakes

- Using PowerShell syntax (Get-ChildItem) — use Bash/Unix commands. Use Git Bash or WSL on Windows.
- Forgetting quotes around patterns with spaces: grep "two words" file.txt not grep two words file.txt.
- Running find / which searches the whole filesystem — always use find . to start from current directory.

### Read more

- The Missing Semester Shell Tools: https://missing.csail.mit.edu/2020/shell-tools/
- Odin Project Command Line Basics: https://www.theodinproject.com/lessons/foundations-command-line-basics

---

## Step 3: Learn — Shell scripting and environment variables

**Type / time:** Learn · 40 min

### What it is

A shell script is a text file containing shell commands that run top to bottom. Environment variables are key-value pairs stored in the shell's memory that programs read to configure themselves — things like NODE_ENV=production or DATABASE_URL. Every Node.js app, every Docker container, every CI pipeline uses environment variables heavily.

### Why it exists (and a little history)

Before scripting, every deployment was done by hand — type 20 commands, in order, every time, hoping you made no typos. Shell scripts made workflows repeatable and automatable. Environment variables came from the need to configure software without changing source code: you want the same codebase to behave differently in dev vs production without a code change. Both ideas are from Unix (1970s) and remain the primary way servers and tools are configured today.

### How it works

  #!/usr/bin/env bash
  set -euo pipefail       # Exit on error, undefined var, pipe fail

  NAME="Rohith"
  echo "Hello, "     # Double quotes expand variables
  echo 'Hello, '     # Single quotes do NOT expand

  export PORT=3000         # Available to child processes

  # Default value: use DATABASE_HOST if set, else "localhost"
  DB_HOST=""

  if [ -f "package.json" ]; then
    echo "This is a Node project"
  fi

  for file in *.md; do
    echo "Found: "
  done

Key terms: shebang (#!/usr/bin/env bash), export,  syntax, default value (), set -e.

### Steps to do

1. Create: touch scripts/hello.sh in your daily-coach repo.
2. Write a script that: prints your name and today's date, reads a GREETING env var (default "Hello"), loops over all .md files in the root and prints their names.
3. Make executable: chmod +x scripts/hello.sh
4. Run: ./scripts/hello.sh
5. Run with custom greeting: GREETING="Namaste" ./scripts/hello.sh — verify it changes.
6. Read the scripting section of https://missing.csail.mit.edu/2020/shell-tools/

### Playground (experiment on purpose)

- Remove set -euo pipefail and use a typo variable name. See silent failure. Add it back — now it exits with an error.
- Run env to list all environment variables. Find PATH.
- Run echo  — each colon-separated entry is a directory the shell searches when you type a command.

### Completion criteria (I will check these tonight)

- [ ] scripts/hello.sh exists and runs without errors.
- [ ] The script uses at least one variable, one env var with a default, and one loop.
- [ ] Can explain what export does differently from a plain assignment, in one sentence.

### Common mistakes

- Spaces around = in assignments: NAME = "Rohith" is wrong. NAME="Rohith" is correct — no spaces.
- Forgetting chmod +x — you will get Permission denied.
- Using  in single quotes — single quotes are literal, double quotes expand variables.

### Read more

- The Missing Semester Shell Scripting: https://missing.csail.mit.edu/2020/shell-tools/

---

## Step 4: Learn — Git: commit, branch, merge

**Type / time:** Learn · 40 min

### What it is

Git is a version control system: it records every change to your code as a snapshot (commit), lets you work on separate lines of development (branches), and combines them back together (merge). You already know Git — this step is about doing it deliberately and understanding *why* each command exists, not just copying commands from Stack Overflow. The goal is to use Git as a thinking tool, not just a backup system.

### Why it exists (and a little history)

Before Git (2005), teams used CVS and SVN — centralised systems where everyone touched the same files on a server. Linus Torvalds wrote Git in about two weeks to replace a proprietary system for the Linux kernel. Git's key innovation: every developer has the full history locally, branches are cheap (just a pointer to a commit), and merging is a first-class operation. GitHub (2008) made it social. Today Git is used by essentially every software team in the world.

### How it works

  # The three areas
  # Working directory → (git add) → Staging area → (git commit) → Repository

  git init
  git status
  git add file.txt
  git add .
  git commit -m "feat: add login"

  git branch feature-nav
  git switch feature-nav       # Modern; older is git checkout
  git switch -c hotfix         # Create AND switch in one command

  git switch main
  git merge feature-nav

Fast-forward merge: main just moves its pointer forward. No merge commit.
True merge commit: two branches diverged; Git creates a new commit M with two parents.

### Steps to do

1. mkdir projects/git-practice && cd projects/git-practice && git init
2. echo "# Git Practice" > README.md && git add . && git commit -m "init: add README"
3. git switch -c feature/navbar — add nav.md, commit.
4. git switch main && git switch -c feature/footer — add footer.md, commit.
5. git switch main && git merge feature/navbar
6. git merge feature/footer
7. git log --oneline --graph --all — see the full tree with both merges.

### Playground (experiment on purpose)

- Create a conflict: on two branches, edit the same line of README.md differently, then merge. Resolve the conflict by hand (edit the file, remove the markers), then git add and git commit.
- Run git log --oneline --graph --all after every major step — watch the tree grow.
- Run git diff main feature/navbar before merging — see exactly what will change.

### Completion criteria (I will check these tonight)

- [ ] projects/git-practice/ has at least 3 branches in its history.
- [ ] git log --oneline --graph shows at least one merge commit with two parents.
- [ ] Can explain the difference between fast-forward merge and merge commit in two sentences.

### Common mistakes

- Using git checkout instead of git switch — both work, but switch is clearer. Build the right habit.
- One giant commit. Commit after each meaningful change — small commits are easier to revert.
- Not running git status constantly. Make it a reflex: before and after every command.

### Read more

- Pro Git Chapter 2 Basics: https://git-scm.com/book/en/v2/Git-Basics-Getting-a-Git-Repository
- Pro Git Chapter 3 Branching: https://git-scm.com/book/en/v2/Git-Branching-Branches-in-a-Nutshell

---

## Step 5: Build — Init the Stage 0-1 project (personal page)

**Type / time:** Build · 40 min

### What it is

Your Stage 0-1 project is a responsive personal page on GitHub Pages. Today you just get the skeleton live. Small and ugly is fine — it just needs to exist and be deployed. Every future HTML, CSS, JS topic you learn in Stage 0-1 will go into this page, so it grows with you through the stage.

### Steps to do

1. mkdir projects/personal-page && cd projects/personal-page && git init
2. Create index.html with this content (customise your name):

  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Rohith Sheregar</title>
  </head>
  <body>
    <header>
      <h1>Rohith Sheregar</h1>
      <p>B.E. Computer Science · SMVITM · SDE in progress</p>
    </header>
    <main>
      <section>
        <h2>About</h2>
        <p>Final-year CSE student. Building full-stack skills daily.</p>
      </section>
    </main>
  </body>
  </html>

3. git add . && git commit -m "init: add personal page skeleton"
4. Create a public GitHub repo named personal-page. Then push:

  git branch -M main
  git remote add origin https://github.com/rohithsheregar/personal-page.git
  git push -u origin main

5. GitHub → Settings → Pages → Source: Deploy from branch → main → / (root) → Save.
6. Wait 1-2 minutes, open https://rohithsheregar.github.io/personal-page/ — it should show your page.

### Completion criteria (I will check these tonight)

- [ ] projects/personal-page/ exists locally with at least one commit.
- [ ] Page is live at https://rohithsheregar.github.io/personal-page/ (or equivalent URL).
- [ ] notes/shell-notes.md and notes/dsa-log.md are committed to this (daily-coach) repo.
- [ ] scripts/hello.sh is committed and runs without errors.

### Common mistakes

- Forgetting git branch -M main before pushing — GitHub's default branch is main, not master.
- GitHub Pages takes 2-3 minutes to go live the first time. If it 404s immediately, wait and refresh.
- Not pushing the daily-coach repo too — all notes and scripts should be committed here as well.

### Read more

- GitHub Pages docs: https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site

---

## Step 6: Assess and revise

**Type / time:** Assess · 30 min

No notes. Answer these 5 questions from memory first, then check.

Write your answers in notes/self-quiz-2026-10-17.md before looking anything up:

1. What is the difference between grep and find? When do you use each?
2. What does a pipe (|) do? Give one example using two commands.
3. What does set -euo pipefail at the top of a shell script do, and why is it important?
4. What is the difference between a fast-forward merge and a merge commit in Git?
5. Why does Two Sum use a hash map instead of a double loop? What complexity does each have?

Score yourself after: 4 of 5 is a pass.

### Completion criteria (I will check these tonight)

- [ ] notes/self-quiz-2026-10-17.md exists with answers written before checking notes.
- [ ] Score 4 of 5 or better, or flag which one needs re-reading.

---

## Before you close the laptop

1. Commit and push everything in this (daily-coach) repo:
   git add .
   git commit -m "work: day 1 — shell, git, DSA arrays-hashing"
   git push

2. Make sure projects/git-practice/ and projects/personal-page/ are pushed to GitHub.

3. Come back to Claude and say "check today's work".

## Parking lot

- (Anything interesting that came up today — write here, do not open during work blocks.)
