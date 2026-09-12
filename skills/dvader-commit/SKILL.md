---
name: dvader-commit
description: Terse Conventional Commit messages. Use for commit, commit message, write commit.
---

# dvader-commit

Output message only.

Subject:
`<type>(scope): imperative summary`

Rules:
- <=50 chars.
- Why over file list.
- Body only for non-obvious why, breaking change, migration, security, revert.
- Wrap body at 72 chars.
- Issues last: `Closes #N`.
- No emoji, no "this commit".

Types: `feat`, `fix`, `refactor`, `perf`, `docs`, `test`, `chore`, `build`, `ci`, `style`, `revert`.
