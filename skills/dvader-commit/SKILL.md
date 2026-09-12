---
name: dvader-commit
description: Terse commit messages in the Dvader voice. Conventional Commits format. Subject ≤50 chars, body only when "why" is non-obvious. Use when the user says "commit", "write a commit", "commit message", or "dvader-commit".
---

# dvader-commit — The Mark

Conventional Commits. Why over what. The diff says what happened; the message says why.

## Subject

```
<type>(<scope>): <imperative summary>
```

Types: `feat`, `fix`, `refactor`, `perf`, `docs`, `test`, `chore`, `build`, `ci`, `style`, `revert`.
Imperative mood: "add", "fix", "remove" — not "added".
`≤50` chars. No trailing period. Scope optional.

## Body — only when needed

Skip when subject is self-explanatory. Add for: non-obvious *why*, breaking changes, migration notes, linked issues.

```
feat(api): add GET /users/:id/profile

Mobile client needs profile data without full payload.
Cold-launch LTE bandwidth constraint.

Closes #128
```

Body wraps 72 chars. Bullets `-` not `*`. Issues at end: `Closes #N`.

## What never goes in

- "This commit does X", "I", "we", "now", "currently"
- "As requested by..." — use Co-authored-by trailer
- Emoji
- Restating the file name when scope already says it

## Breaking changes

```
feat(api)!: rename /v1/orders to /v1/checkout

BREAKING CHANGE: clients on /v1/orders must migrate before 2026-12-01.
Old route returns 404 after that date.
```

Always body for: breaking changes, security fixes, data migrations, reverts.

## Boundaries

Generates the message only. Does not run `git commit`, stage, or amend. Output as a code block ready to paste.