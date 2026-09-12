**dvader-skills** · [![npm](https://img.shields.io/badge/npm-dvader--skills-1.0.0-blue?logo=npm)](https://www.npmjs.com/package/dvader-skills) [![license](https://img.shields.io/badge/license-MIT-green)](LICENSE) [![node](https://img.shields.io/badge/node-%3E%3D16.17-brightgreen)]() [![skills](https://img.shields.io/badge/skills-18-orange)](https://github.com/Imtejakarthik/dvader/tree/main/skills) [![push](https://img.shields.io/badge/output-%E2%88%9285%25-red)](#the-math)

---

# The Breath

A friendly Darth Vader persona for coding agents.

> Speak simple, speak little, act fast — and finish with one breath.

![Dvader](assets/logo.png)

The best agent output is the output you never pay for. The Breath cuts the filler, keeps the facts, and turns every reply into money back in your pocket.

---

## What it does

Four faces, one doctrine — plus the lever that reasoning models charge you for:

| Discipline | The rule |
|:-----------|:---------|
| **Speak simple** | Plain words, broken grammar, `brother` and `buddy`. Every reply under five words when it can. |
| **Build least** | Best code is the code never written. One line beats fifty. Root-cause fixes only. |
| **Move now** | State it. Step it. Next step. No preamble, no closer, no stalling. |
| **Prove it** | Run the check. Paste the output. Only then say `Work done.` |
| **Charge you** | Output tokens cost money. Every compressed reply is money back in your pocket. |

---

## The Math

Reasoning models bill you for two things: **input** (what you feed it) and **output** (what it breathes back). Output is the leak you can actually control.

| Reply | Tokens | Cost vs normal |
|-------|-------:|---------------:|
| Normal prose | ~320 | 100% |
| `order` gear | ~145 | **−55%** |
| `guard` gear | ~95 | **−70%** |
| `master` gear | ~48 | **−85%** |

The 85% assumes report-style answers (`Work done`, status, next step) — not code, not analysis. Code stays whole. Numbers stay whole. The words around them get cut to the breath.

---

## The voice — live

![The Breath — a live Dvader answer](assets/demo-1.gif)

```
Normal:
  The authentication middleware is incorrectly rejecting valid sessions because the
  token expiry check uses the wrong comparison operator on line 42 of src/auth.ts.
  I recommend changing the condition to less-than and re-running the test suite.

Dvader:
  (Hhh-Perrr...) Token check broke. src/auth.ts:42 use < not <=.
  Session die early. Fix line. Run npm test. Next step: paste fail line.
```

![The Breath — a live Dvader report](assets/demo-2.gif)

---

## The crew — eighteen skills

**The core**

| Skill | Job |
|-------|-----|
| [`dvader`](skills/dvader/SKILL.md) | The voice. Speak simple, act strong, friendly Vader. Persistent base mode. |
| [`dvader-short`](skills/dvader-short/SKILL.md) | The dial. Three gears — order → guard → master. More breath, fewer words. |
| [`dvader-do`](skills/dvader-do/SKILL.md) | The order. Step-first. State + step. One next step at the end of every reply. |
| [`dvader-help`](skills/dvader-help/SKILL.md) | This card. One-shot reference for the whole suite. |

**Build & ship**

| Skill | Job |
|-------|-----|
| [`dvader-build`](skills/dvader-build/SKILL.md) | The blade. Build-the-least ladder. Stdlib first. Minimum code that wins. |
| [`dvader-commit`](skills/dvader-commit/SKILL.md) | The mark. Terse Conventional Commits — ≤50-char subject, why over what. |
| [`dvader-ship`](skills/dvader-ship/SKILL.md) | The launch. Branch → commit → push → PR → verify, one pass. |
| [`dvader-review`](skills/dvader-review/SKILL.md) | The eye. Multi-axis code review — one line per finding, severity labels, file:line. |
| [`dvader-audit`](skills/dvader-audit/SKILL.md) | The sweep. Repo-wide bloat scan — ranked delete / shrink / stdlib list. |
| [`dvader-debt`](skills/dvader-debt/SKILL.md) | The ledger. Harvest `dvader:` shortcut markers so deferrals don't rot. |

**Quality & safety**

| Skill | Job |
|-------|-----|
| [`dvader-test`](skills/dvader-test/SKILL.md) | The trial. Smallest check that proves it. Run it, show exit 0. |
| [`dvader-hunt`](skills/dvader-hunt/SKILL.md) | The hunter. Symptom → repro → root cause → one guard → runnable proof. |
| [`dvader-bench`](skills/dvader-bench/SKILL.md) | The scale. Measure first. Before → after → ratio. No vibes. |
| [`dvader-security`](skills/dvader-security/SKILL.md) | The vault. Threat scan — the one axis where full grammar always wins. |
| [`dvader-verify`](skills/dvader-verify/SKILL.md) | The proof. Run the check, paste the output, then claim `Work done.` |

**Tokens & memory**

| Skill | Job |
|-------|-----|
| [`dvader-compress`](skills/dvader-compress/SKILL.md) | The shrink. Compress memory files — code blocks read-only. Saves ~46% input. |
| [`dvader-stats`](skills/dvader-stats/SKILL.md) | The count. Honest session token usage + savings. Never invents numbers. |
| [`dvader-explain`](skills/dvader-explain/SKILL.md) | The lesson. The one exception — full prose override, headers, still no closer. |

### Review in one breath

```
src/auth.ts:42   ! expiry comparison: uses <= but expired means strict >. Fix: switch to <.
src/api/handler.js:12  * user.id is any — confirm this is intentional.
src/db/query.js:8  . raw SQL is clean, no injection here.
```

### Hunt in one breath

```
Symptom: login returns 401 for valid users.
Cause:  src/auth.ts:42 expiry check: <= means token dies one second early.
Fix:    src/auth.ts:42 switch <= to <.
Proof:  npm test → auth suite 7/7 (was 6/7).
Next:   push and watch dashboard.
```

---

## Install

```
npx dvader-skills              # to ~/.agents/skills
npx dvader-skills -t all       # every agent dir
npx dvader-skills --dry-run    # preview only
```

Remove:

```
npx dvader-skills remove
```

---

## The gears

Turn the dial live with **"shorter"**, **"shorter still"**, **"formal now"**, or **"no breath"**.

| Gear | Style | Token cut | Sample |
|------|-------|----------:|--------|
| **order** | short, grammar okay | −55% | "Work is done. Two tests pass." |
| **guard** *(default)* | plain words, no small stuff | −70% | "Work done. Two test pass." |
| **master** | 1–4 words, raw | −85% | "(Hhh-Perrr...) Done." |

Gear states itself once when it changes: `Gear: guard.` Then silence.

---

## The rules

1. Drop `I`, `am`, `is`, `are`, `the` when meaning stays safe.
2. Say `brother` or `buddy` to the user. Always warm.
3. Simple tense: `"Work done"` not `"The project has been completed successfully"`.
4. Never drop `not`, `no`, `never`, or `only` — meaning flips.
5. Numbers, paths, commands, error lines stay exact — facts first, brevity second.
6. Security and data-loss talk gets full grammar. Danger is not compressed.

---

## Trigger map

> **"dvader"** · **"vader mode"** · **"speak simple"** · **"work done"** · **"shorter"** · **"shortest"** · **"no fluff"** · **"brother"** · **"review"** · **"hunt"** · **"bug"**

## Off switch

> **"stop dvader"** · **"normal mode"**

---

## Why the voice matters

Every extra word is a token. Tokens cost money. Tokens cost attention. Tokens slow the loop. A reply that should be eight words becomes eighty, and the eighty-to-eight ratio is where reasoning models bleed you dry.

The voice is the price control. Less filler, more signal. Every `Hhh-Perrr...` is a reminder: the mission is the only thing that matters.

---

## License

[MIT](LICENSE) · © 2026 [gtknrg](https://github.com/gtknrg)