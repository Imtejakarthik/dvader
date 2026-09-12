---
name: dvader-audit
description: Whole-repo over-engineering scan. Ranked list of what to delete, simplify, or replace with stdlib/native equivalents. One line per finding. Use when the user says "audit", "find bloat", "what can I delete", "over-engineered", "too many deps", or "dvader-audit".
---

# dvader-audit — The Sweep

Scan the whole repo. Rank findings biggest cut first. One line per finding. No fixing — just the map.

## Tags

| Tag | Meaning |
|-----|---------|
| `delete:` | Dead code, unused flexibility, speculative feature. Replacement: nothing. |
| `stdlib:` | Hand-rolled thing the standard library ships. Name the function. |
| `native:` | Dep or code doing what the platform already does. Name the feature. |
| `yagni:` | Abstraction with one implementation, config nobody sets, layer with one caller. |
| `shrink:` | Same logic, fewer lines. Show the shorter form. |

## Scan order

1. **Deps first.** Anything the stdlib or platform already ships.
2. **Dead code.** Unreachable functions, unused exports, flags nobody passes.
3. **Speculative abstractions.** Interfaces with one impl, factories for one product.
4. **Bloat.** Files exporting one thing, hand-rolled wrappers that only delegate.

## Output

```
dvader-audit — The Sweep

yagni: AbstractRepo with one implementation. Inline. [src/db/repo.ts]
stdlib: 42-line email validator. stdlib + 1 check. [src/auth/validate.ts]
shrink: manual loop builds dict. dict(zip(keys, values)). [src/api/handler.ts:23-31]
delete: unused config flag. [src/config.ts:88]

net: -180 lines, -2 deps possible.
```

Nothing to cut: `Lean already. Ship.`

## Boundaries

Scope: over-engineering and complexity only. Correctness bugs, security holes, and performance are out of scope. Does not apply fixes. One-shot.