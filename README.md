# Today: Sunday, 2026-10-18 (Medium day)

> Day 2 · Streak 1 · Stage 0-1 Tools and web basics · Mood/energy today: Good, time: 1 hour · Mode: Medium

**Why this plan:** Yesterday you did Arrays & Hashing (3 problems in Java, identified the HashMap pattern). Today you have exactly 1 hour and want maximum interview value. Two Pointers is the #2 most common interview pattern — it appears in palindrome, sorted-array, and opposite-ends problems. It is fast to learn and immediately applicable.

## Yesterday (Day 1 — partial)

Planned 6 steps. Completed: DSA (3 problems — Two Sum ✅, Contains Duplicate ✅, Valid Anagram ✅ with help). Shell/Git/personal page steps were not checked in — those topics carry forward to future days in Stage 0-1. No guilt; DSA is the highest-value output of Day 1.

## Today at a glance

| # | Step | Type | Time | Done when |
| --- | --- | --- | --- | --- |
| 1 | DSA: Two Pointers — 2 problems | DSA | 45 min | 2 problems solved in Java, approach noted in dsa-notes.md |
| 2 | Concept: How Two Pointers works + when to use vs HashMap | Learn | 10 min | Can state the two conditions that tell you to use Two Pointers |
| 3 | Notes + commit | Wrap-up | 5 min | notes/dsa-notes.md updated, committed |

Order: do them top to bottom. Phone out of reach. If stuck for 15 minutes on a problem, look at the NeetCode hint video — not the full solution.

---

## Step 1 + 2 (combined): Two Pointers

**Type / time:** DSA + Learn · 55 min

### What it is

Two Pointers means placing two index variables (usually called left and ight, or i and j) into an array or string and moving them toward each other — or in the same direction — based on conditions. You avoid the O(n²) double loop by making each pointer move at most n steps total, giving O(n) time.

There are two main shapes:

**Shape A — Opposite ends (most common):**
`
left →                ← right
 [2, 3, 4, 7, 11, 15]
`
Used when: the array is **sorted** and you are looking for a pair that meets a condition (sum, product, difference). You move left right if you need a bigger value, right left if you need smaller.

**Shape B — Same direction (slow + fast pointer):**
`
slow →
fast →→
 [1, 2, 3, 4, 5]
`
Used when: detecting cycles, removing duplicates in-place, or sliding a window. Fast pointer scouts ahead; slow pointer marks where to write.

### When to use Two Pointers vs HashMap

| Signal in the problem | Use |
|---|---|
| "sorted array", "find a pair", "in-place" | Two Pointers |
| "unsorted", "count occurrences", "any order" | HashMap / HashSet |
| "substring", "window of size k" | Sliding Window (next pattern) |

### The Two Pointers Java template

`java
// Shape A — opposite ends
int left = 0, right = nums.length - 1;
while (left < right) {
    int sum = nums[left] + nums[right];
    if (sum == target) {
        return new int[]{left + 1, right + 1}; // 1-indexed if needed
    } else if (sum < target) {
        left++;      // need bigger value → move left right
    } else {
        right--;     // need smaller value → move right left
    }
}
`

`java
// Shape B — same direction (remove duplicates)
int slow = 0;
for (int fast = 1; fast < nums.length; fast++) {
    if (nums[fast] != nums[slow]) {
        slow++;
        nums[slow] = nums[fast];
    }
}
return slow + 1; // length of unique portion
`

### Steps to do

**Problem 1 — 125. Valid Palindrome (LeetCode)**
https://leetcode.com/problems/valid-palindrome/

- Category: Two Pointers, Shape A.
- Goal: Given a string, check if it reads the same forwards and backwards (ignoring non-alphanumeric chars and case).
- Target time: 10 min.
- Approach hint: left starts at 0, right at end. Skip non-alphanumeric with Character.isLetterOrDigit(). Compare Character.toLowerCase() of both. If mismatch → return false.

`java
class Solution {
    public boolean isPalindrome(String s) {
        int left = 0, right = s.length() - 1;
        while (left < right) {
            while (left < right && !Character.isLetterOrDigit(s.charAt(left))) left++;
            while (left < right && !Character.isLetterOrDigit(s.charAt(right))) right--;
            if (Character.toLowerCase(s.charAt(left)) != Character.toLowerCase(s.charAt(right))) {
                return false;
            }
            left++;
            right--;
        }
        return true;
    }
}
`

Read the solution above, understand each line, then close it and type it yourself from memory. That is more valuable than solving from scratch for a first encounter.

---

**Problem 2 — 167. Two Sum II (LeetCode)**
https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/

- Category: Two Pointers, Shape A.
- Goal: Same as Two Sum but the array is already sorted. Return 1-indexed positions.
- Target time: 10 min.
- Key insight: because it is sorted, HashMap is not needed. Two Pointers gives O(n) time AND O(1) space (better than HashMap's O(n) space).
- Try this one yourself first before looking at any solution. Use the template above.

---

**Problem 3 (stretch, do if time left) — 26. Remove Duplicates from Sorted Array**
https://leetcode.com/problems/remove-duplicates-from-sorted-array/

- Category: Two Pointers, Shape B (slow/fast).
- Try it using the Shape B template above.

---

### Completion criteria (I will check these tonight)

- [ ] 125. Valid Palindrome — accepted on LeetCode in Java.
- [ ] 167. Two Sum II — accepted on LeetCode in Java.
- [ ] notes/dsa-notes.md updated with Two Pointers entry: when to use it, O(n) time, O(1) space.
- [ ] Can explain in one sentence why Two Sum II does NOT need a HashMap.

### Common mistakes

- Moving both pointers at the same time — only move one per iteration based on the condition.
- Forgetting to skip non-alphanumeric in Valid Palindrome — Character.isLetterOrDigit() is the key method.
- Using Two Pointers on an unsorted array for a sum problem — it only works because the array is sorted. On unsorted, use HashMap.

### Useful Java methods for this pattern

`java
Character.isLetterOrDigit(ch)   // true if alphanumeric
Character.toLowerCase(ch)        // lowercases a char
Character.toUpperCase(ch)        // uppercases a char
s.charAt(i)                      // get char at index i
`

Write these in your notes. These are the method names you will forget.

---

## Step 3: Notes + commit

Add this block to 
otes/dsa-notes.md (create the file if it does not exist):

`
## Two Pointers (2026-10-18)

Pattern: Two index variables moving through an array/string.
Shape A (opposite ends): sorted array, find a pair → O(n) time, O(1) space.
Shape B (same direction / slow+fast): remove duplicates, detect cycles.

Use instead of HashMap when: array is sorted AND you need O(1) space.
Use HashMap when: unsorted, or need to count/store values.

Problems done:
- 125. Valid Palindrome — Shape A, skip non-alphanumeric with Character.isLetterOrDigit()
- 167. Two Sum II — Shape A, move left if sum too small, right if too big

Useful methods:
- Character.isLetterOrDigit(ch)
- Character.toLowerCase(ch)
- s.charAt(i)
`

Then commit:

  git add .
  git commit -m "work: day 2 - two pointers (valid palindrome, two sum II)"
  git push

---

## Before you close the laptop

1. Commit and push (command above).
2. Come back and say **"check today's work"** — I will ask you two verbal questions and log the day.

## Parking lot

- 3Sum (LeetCode 15) — Two Pointers + sorting, slightly harder, do it on the next DSA day.
- Remove Duplicates from Sorted Array (26) — if you did not get to it today, it is the first item for the next DSA block.
