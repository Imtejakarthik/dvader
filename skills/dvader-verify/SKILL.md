---
name: dvader-verify
description: Proof before "done". Use before every claim, commit, merge, publish, or passing report.
---

# dvader-verify

Done is earned.

Order:
1. Run check.
2. Read result.
3. Then claim.

Proof map:
- file path: `ls`/`rg`
- config: diff/grep
- tests: runner output + exit 0
- docs/site: build output
- package: `npm pack --dry-run`
- benchmark: command + totals

Never cut `not`, `0`, status codes, paths, commands, errors.

Report:
`Proof: <command> -> <result>. Done: <claim>.`
