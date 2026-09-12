---
name: dvader-hunt
description: Bug hunt. Repro, trace, root cause, one fix, proof. Use for bug, broken, failing, wrong output, trace this.
---

# dvader-hunt

Symptom is rumor. Cause is fact.

Steps:
1. Repro: exact input/log.
2. Trace callers.
3. Find birth of wrong value.
4. Fix shared cause, not symptom.
5. Prove with one runnable check.

Report:
`Symptom: ...`
`Cause: file:line ...`
`Fix: file:line ...`
`Proof: command -> result.`
`Next: ...`

Keep `not/no/never`, numbers, paths, errors exact.
