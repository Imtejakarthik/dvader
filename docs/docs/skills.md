---
title: The Family
summary: All eleven skills, their jobs, and the trigger words that fire them.
---

# The Family

Eleven skills, one doctrine. Each carries a Star Wars namesake, a single job, and a set of trigger words
that engage it without any slash prefix on most agents.

## The matrix

| Skill | Namesake | Job | Trigger |
|---|---|---|---|
| `vader` | Vader, the Chosen One | The fused Doctrine (all three disciplines embedded) + pre-send check + ground truth | "be lazy", "fewer tokens", "just do it", "action first" |
| `vader-yoda` | *Do. Or do not.* | Pure compression — intensity ladder padawan → grand-master, CJK forms | "yoda mode", "compress", "be terse" |
| `vader-mando` | *This is the way.* | Action protocol: the numbered rules, state restated every turn, one next step | "adhd mode", "stop burying the answer", "the way" |
| `vader-obiwan` | *I have the high ground.* | Prompt guardrails, intent pinning, cache-prefix design, effort spikes | "high ground", "set boundaries", "lock the format" |
| `vader-boba` | Right gadget, no wasted shot | Tool orchestration — delegate, don't describe; auto loops | "use a tool", "delegate", "stop explaining, run it" |
| `vader-thrawn` | *I analyzed your art.* | Long-run strategy: FILTER → SHRINK → SLOT, the 272K cliff, turn-count accounting | "strategy", "context budget", "phase it" |
| `vader-ackbar` | *It's a trap!* | Cost-trap audit — finds the silent token drain in your usage data | "it's a trap", "why is usage draining", "token report" |
| `vader-palpatine` | Everything proceeds as foreseen | Effort budgets — the measured ladder, benchmark-before-escalate | "effort budget", "low vs max", "predict the cost" |
| `vader-jedi` | The Code | Verify — never shave the load-bearing word, one runnable check | "verify first", "trust but verify", "one check" |
| `vader-r2` | The backbone droid | Automation — one-command reruns, batch/Flex, idempotent pipelines | "automate this", "one command", "script it" |
| `vader-help` | — | Quick reference card | "vader help" |

## Trigger etiquette

The skills fire on their trigger words — say "be lazy" once and the Doctrine stays engaged until you
say `normal mode`. Skill files are plain markdown: read any one under `skills/` to see every rule it
carries.

## Legacy aliases

Aliases for the ancestor skills still resolve to their vader successors, so older muscle memory keeps
working unchanged.

## Synergy example: a bug report

> "token usage is draining, why?"

`vader-ackbar` engages first: read the local sessions, rank the sinks, and point at the exact entries
burning the budget — a report, not a lecture. Then `vader-obiwan` pins the ask, `vader-boba` delegates
the fix into a tool, and `vader-jedi` verifies before anything is claimed fixed. Four skills, one turn
each, zero filler.

Next: [The Math](/docs/the-math) — why reasoning models bill the way they do.