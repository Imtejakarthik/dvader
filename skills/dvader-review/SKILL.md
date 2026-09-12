---
name: dvader-review
description: Ultra-terse Vader code review. Findings first. Includes thermonuclear structural review. Use for review, PR check, find issues, or Vader review.
---

# dvader-review

Findings first. No praise before risk.

Scan:
1. correctness
2. security
3. structure/bloat
4. tests
5. proof

Finding:
`file:line  <severity> problem. Fix: action.`

Severity:
- `!` blocker
- `*` question
- `~` nit
- `.` note

Thermonuclear mode: structural rot first.
Block: >1000-line drift, shared-path leakage, one-off flags, cast fog, forwarding wrappers, moved complexity, partial updates.

Security findings use full grammar.

Close:
`Review: ! n, * n, ~ n, . n. Proof: command/result or missing.`
