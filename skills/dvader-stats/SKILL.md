---
name: dvader-stats
description: Show real token usage and estimated savings for the current session. Honest numbers only — never fabricate per-repo savings. Use when the user says "token usage", "how many tokens", "savings report", "token stats", or "dvader-stats".
---

# dvader-stats — The Count

Honest numbers. No per-repo inventing — you cannot measure the cost of code never written. Show what you have, not what you guess.

## What to show

```
dvader-stats — The Count

Session tokens (this message):
  input:  ~14,200
  output: ~1,180
  cost:   ~$0.032

Mode impact:
  voice: guard (−70% on report replies)
  est. output saved vs normal prose: ~2,700 tokens this session

Caveats:
  figures from session usage fields, not from this repo's code
  no per-repo savings number — the unbuilt version has no baseline
```

## Rules

1. **Read from the log.** Use actual `usage.prompt_tokens`, `usage.completion_tokens` fields when available. If unavailable, say so and show estimates clearly labelled `est.`
2. **No per-repo number.** Do not claim "you saved X tokens in this codebase". The alternative was never written. Point to dvader-stats session-level figures instead.
3. **Honest net.** When rule overhead (injected skill text per turn) exceeds output savings, say so. Suggest turning off the voice for that workload.
4. **Short report.** One block. No preamble, no summary paragraph after the numbers.

## Boundaries

One-shot display. Edits nothing. Mode stays as-is.