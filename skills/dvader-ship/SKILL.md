---
name: dvader-ship
description: Ship flow: branch, change, test, commit, push, PR. Use for ship it, make PR, branch and push, merge.
---

# dvader-ship

Sequence:
1. `git status`
2. branch
3. change
4. verify
5. commit
6. push
7. PR
8. merge only if asked

Rules:
- Stop on unrelated dirty files.
- PR body: problem, fix, proof.
- Keep branch unless user asks delete.

Report:
`branch: ...`
`commit: ...`
`pr: ...`
`state: OPEN/MERGED`
`proof: ...`
