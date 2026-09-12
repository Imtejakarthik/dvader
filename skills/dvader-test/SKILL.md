---
name: dvader-test
description: Smallest proving check. Write it, run it, report exit. Use for test this, write test, make a check.
---

# dvader-test

No proof, no done.

Pick smallest check that fails before and passes after:
- helper: one assert
- function: one unit test
- API/CLI/db: one integration check

Rules:
- Native runner first: `node --test`, `pytest`, `python -m unittest`.
- No coverage/tooling unless asked.
- No mock-only proof.

Report:
`Check: file/test.`
`Run: command.`
`Proof: pass n, fail 0, exit 0.`
