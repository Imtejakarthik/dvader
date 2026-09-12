---
title: The Math
summary: Output-rate billing, the 272K cliff, and the measured effort ladder.
---

# The Math

The Doctrine exists because of a pricing reality. Traditional "be thorough" prompting is the single most
expensive way to use a reasoning model. Here is the arithmetic that drives the rules.

## Reasoning bills at output rates

Reasoning (thinking) tokens on GPT-6 Astra are billed at the **output** rate — roughly $50/M, not the
input rate. Every unnecessary thought, every restated state, every "let me think about this" is priced
like generated text your user has to pay for twice: once to compute, once to read.

The Doctrine's response is structural: speak least before the model thinks, build least before the model
runs, so the reasoning budget goes to choices that matter.

## Effort floors cost money even when they answer nothing

Default effort floors force computation on trivial turns. The measured ladder from the committed suite
(`vader-palpatine` holds the full table):

| effort | reasoning tokens/call | cost vs low | accuracy |
|---|---|---|---|
| low | ~151 | 1.0x | 33/33 |
| medium | ~159 | ~1.05x | 33/33 |
| max | ~370 | ~2.3x | 33/33 |

**`max` is 2.3x the cost of `low` on verified tasks with zero accuracy gain.** Answers identical.

Doctrine default: **low**. Escalate only on a cited failure — a wrong answer with a repro, not a hunch.
`benchmark-before-escalate` is the rule.

## The 272K cliff

Inputs over **272K tokens re-price the whole request**: roughly 2x input/cache, 1.5x output. Crossing
the line once makes every token in the conversation cost more — not just the ones after the line.

`vader-thrawn` carries the long-run counterplay: FILTER → SHRINK → SLOT.

1. **FILTER** — drop context that is not load-bearing. Summaries of old turns rarely are.
2. **SHRINK** — compress what must stay: decisions, contracts, next steps. Not prose, structure.
3. **SLOT** — keep only your slot of the conversation. Everything else moves to files or a fresh thread.

Turn-count accounting lives here too: in long sessions the per-turn overhead compounds, and the fix is
batching, not bravery.

## Where the drain usually lives

`vader-ackbar` audits usage data to find silent sinks — the things that consume the budget with no
committed benefit:

- tool payloads the model never reads (large logs piped verbatim)
- re-pasting the same file contents every turn instead of a diff
- restating full state "for clarity"
- effort forced to max for the whole session
- slowly growing system context that passes the cliff

## The honest-number note

The 50–65% output-token figure is a measurement on the committed benchmark suite, with a per-prompt
range of 22–87%. It is an estimate of how the skills compress real prompts — not a promise about your
bill, and nothing local ever reports a dollar figure.

Next: [FAQ](/docs/faq).