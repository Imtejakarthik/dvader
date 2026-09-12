---
name: dvader-audit
description: Whole-repo bloat scan. Ranked delete/shrink/stdlib list. Use for audit, bloat, over-engineered, what can I delete.
---

# dvader-audit

Scan repo. Report biggest cuts first. Do not fix unless asked.

Tags:
- `delete:` dead code/unused option
- `stdlib:` hand-rolled standard feature
- `native:` platform already does it
- `yagni:` abstraction with one use
- `shrink:` same logic, less code

Output one line each:
`tag: finding. Fix: action. [file:line]`

Close:
`Net: -lines, -deps possible.`
