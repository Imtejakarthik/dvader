---
name: dvader-debt
description: Collect `dvader:` shortcut markers into a debt ledger. Use for debt, shortcut ledger, deferred work.
---

# dvader-debt

Scan:
`rg -n "(#|//) ?dvader:" .`

Skip `.git`, `node_modules`, build output.

Output:
`file:line marker. ceiling: ... upgrade: ...`

Flag `no-trigger` if marker lacks upgrade condition.

Close:
`n markers, m no-trigger.`

No hits: `No debt.`
