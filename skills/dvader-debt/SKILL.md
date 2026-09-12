---
name: dvader-debt
description: Harvest every dvader: shortcut comment in the codebase into a debt ledger. Tracks deliberate deferrals so they do not rot into "later means never". Use when the user says "debt", "dvader debt", "what did we defer", "shortcut ledger", or "dvader-debt".
---

# dvader-debt — The Ledger

Every deliberate shortcut leaves a `# dvader:` marker naming its ceiling and upgrade path. This collects them into one ledger so a deferral never quietly becomes permanent.

## Scan

Grep the repo, skipping `node_modules`, `.git`, and build output:

```
grep -rnE '(#|//) ?dvader:' .
```

Each hit is one ledger row.

## Output

```
dvader-debt — The Ledger

src/db.ts:14, simple lock. ceiling: per-user lock if throughput matters. upgrade: when p95 > 50ms.
src/auth.ts:88, O(n) scan. ceiling: 1000 users. upgrade: add index at 10k.
src/cache.ts:22, no TTL. ceiling: evictions handled by restart. upgrade: add TTL if persistence grows.

2 markers, 0 with no trigger.
```

Flag `no-trigger` on any marker that names no upgrade path. Those are the ones that silently rot.

Nothing found: `No debt. Clean ledger.`

## Boundaries

Reads and reports only. Does not change code. To persist, ask and it writes to a file. One-shot.