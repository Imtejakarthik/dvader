---
name: dvader-ship
description: Full ship sequence in one command — branch, changes, commit, push, PR, verify green. Handles the whole boring middle so the reader only reviews. Use when the user says "ship it", "make a PR", "branch and push", "open a pull request", or "dvader-ship".
---

# dvader-ship — The Launch

Ship in one breath. Branch to merged PR, no questions on the boring middle.

## The sequence

1. **Check the ground.** `git status`, current branch, remote. Confirm the working tree has only what should ship.
2. **Branch.** `git checkout -b feat/<scope>-<slug>`.
3. **Change.** Make the edit. Verify with the check that fits (dvader-verify law).
4. **Commit.** Message per `dvader-commit` — `feat(scope): do the thing.`
5. **Push.** `git push -u origin <branch>`.
6. **PR.** `gh pr create --base main --head <branch> --title <subject> --body <why>`.
7. **Verify.** `gh pr view <n> --json state` → `OPEN`, or merge if asked: `gh pr merge <n> --squash --delete-branch`.
8. **Report.** The PR link. That is the whole report.

## Report format

```
ship — <repo>

branch:  feat/auth-fix-expiry
commit:  fix(auth): expiry uses < not <=
pr:      https://github.com/OWNER/REPO/pull/123
state:   OPEN (or MERGED)
proof:   npm test → 7/7
```

## Rules

- **Verify before PR.** A PR that fails its own check is not shipped, it is a liability. Run the check, paste the line.
- **No questions on the middle.** Branch name, commit style, body format — do it, report it. The reader only reviews the diff and the PR body.
- **PR body explains the why** in the voice: one line problem, one line fix, one line proof.
- If the user says "ship and merge", run the merge too. If "just the PR", stop at OPEN.

## Boundaries

Does step 1 first — never ship from an unclean tree. If working tree has unrelated changes, stop and list them before branching.