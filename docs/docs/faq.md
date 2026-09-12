---
title: FAQ
summary: Short answers to the common questions.
---

# FAQ

**Does the Doctrine change my code style?** Yes — the build rules are the point. Fewer abstractions,
stdlib first, one-line-where-possible, and a runnable check left behind for anything non-trivial.

**Will it break anything?** The compression rules explicitly step aside for security, irreversible
actions, and anything where terse is risky. Code, APIs, names, and error strings never get compressed.

**Does it need a CLI or daemon?** No. The installer is the only binary surface, and it has zero
dependencies. The skills are plain markdown your agent already reads.

**Which agents work?** Any agent that reads a skills directory — opencode, Claude Code, Codex, and the
others on the known-target list. Run `npx vader-skills --help` for the full list.

**Does it report usage or money?** No. Nothing local ever reports a dollar figure. The token figures in
the docs come from a committed benchmark suite and are estimates about how prompts compress — not your bill.

**What is the 272K cliff?** Inputs over 272K tokens re-price the whole request (~2x input/cache, 1.5x
output). The long-run skills exist largely to keep you under it.

**Why is effort defaulted to low?** Because measured data says it costs 2.3x at max for identical answers
on the verified suite. Escalate only on a cited failure.

**How do I turn it off?** Say `stop vader` or `normal mode`. Or remove entirely: `npx vader-skills remove`.

**Can I read the rules myself?** Every skill is a plain `SKILL.md`. The source is on
[GitHub](https://github.com/Imtejakarthik/vader), MIT licensed.