---
title: The Math
summary: Honest token-savings claims and how Dvader measures them.
---

# The Math

Dvader targets short report-style replies: status, review findings, proof lines, and next steps.

## Public Claim

Dvader targets up to **80% fewer output tokens** on short report-style replies.

That number must come from fixtures, not vibes. Some extreme replies may compress more. We do not market unrepeatable extremes.

## Current Fixture Check

The package includes a rough token-savings benchmark:

```bash
npm run bench:tokens
```

It compares normal report prose against Dvader-style reports in `benchmarks/output-token-benchmark.json`.

Current result:

| Metric | Normal | Dvader | Saved |
|---|---:|---:|---:|
| Benchmark total | 434 | 113 | 74% |

The test is intentionally conservative:

- It uses whitespace token estimates, not model tokenizer internals.
- It checks ten representative report-style replies.
- It does not claim billing savings.
- It does not claim every answer compresses equally.

## Why 80%, Not More

The public number should be repeatable. A one-word answer can beat 80%, but a useful answer often needs paths, commands, error lines, and proof. Those facts stay.

Shorter is good. Correct is mandatory.

## When Compression Stops

Dvader adds words back for:

- security risk
- data loss
- legal or money-sensitive decisions
- irreversible operations
- ambiguous sequence
- missing proof

Next: [FAQ](/docs/faq).
