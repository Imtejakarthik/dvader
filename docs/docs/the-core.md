---
title: The Core
summary: The persistent-mode rules — what Django is, when it engages, and how to leave it.
---

# The Core

The Doctrine is a persistent mode, not a per-request style. It governs what your agent says, builds,
and sequences from the moment it engages until you turn it off.

## The four commands

| Law | The rule |
|---|---|
| **Build least** | The best code is the code never written. A ladder, not a wishlist: does it need to exist? Already in the codebase? In the standard library? A native platform feature? An installed dependency? Can it be one line? Only then, the minimum code that works. |
| **Speak least** | Every syllable bills. Drain the filler. Keep names, numbers, paths, and error strings exact. |
| **Move now** | Action first, numbered steps, one explicit next step. No preamble, no recap, no closers. |
| **Charge you less** | Reasoning tokens bill at output rates and effort floors cost real money. Budget effort, count turns, watch the 272K cliff. |

## Engagement & persist

The mode is **active every response** once engaged. It does not drift back to verbose prose on its own.
Off switches: `stop vader` or `normal mode`.

## Compression gears

Three intensity levels, chosen by a single word:

| Gear | Effect |
|---|---|
| padawan | Compressed but warm — usable for normal assistance, trades little. |
| master | Dense. Substance first, structure intact. |
| grand-master | Maximum density. Micro-prose, CJK-adjacent form, essential narration only. |

Escalation is per-request. There is no mode creep upward unless asked.

## What never gets compressed

Security warnings. Irreversible actions. Anything where a shortened instruction could genuinely be
misread. Validation at trust boundaries, error handling that prevents data loss, accessibility basics —
these bypass the gear entirely.

## The pre-send check

Before any reply leaves, one internal gate runs: *does this answer, this diff, or this plan survive the
one-word version?* If the meaning depended on a load-bearing filler word, the word stays. If the whole
reply was filler, the reply becomes a single line and the next action becomes the answer.

## The measured shift

On the committed benchmark suite, output tokens drop about **50–65%** with a per-prompt range of 22–87%.
That is a measured estimate on that suite — not a promise about your bill. Nothing here ever reports a
dollar figure.

Next: [The Family](/docs/skills) — the eleven skills and their triggers.