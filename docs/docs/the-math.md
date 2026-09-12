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

The package includes rough and tokenizer-backed benchmark modes:

```bash
npm run bench:tokens
npm run bench:gpt
```

It compares normal report prose against Dvader-style reports in `benchmarks/output-token-benchmark.json`.

Current result:

| Metric | Normal | Dvader | Saved |
|---|---:|---:|---:|
| Rough total | 685 | 130 | 81% |
| GPT tokenizer total | 775 | 212 | 73% |

The test is intentionally conservative:

- It keeps rough whitespace counts as the zero-dependency default.
- It also supports `--tokenizer=gpt` through `gpt-tokenizer`.
- It checks 16 representative report-style replies.
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
