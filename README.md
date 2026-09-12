**dvader-skills** · [![npm](https://img.shields.io/badge/npm-dvader--skills-1.2.1-blue?logo=npm)](https://www.npmjs.com/package/dvader-skills) [![license](https://img.shields.io/badge/license-MIT-green)](LICENSE) [![node](https://img.shields.io/badge/node-%3E%3D16.17-brightgreen)]() [![skills](https://img.shields.io/badge/skills-18-orange)](https://github.com/Imtejakarthik/dvader/tree/main/skills) [![output](https://img.shields.io/badge/output-up%20to%2080%25-red)](#the-math)

# Dvader Skills

Vader mind. Small words. Builder heart.

Dvader is an 18-skill suite for coding agents. It cuts filler, keeps facts exact, pushes smaller diffs, and refuses to say `Work done` before proof exists.

<p align="center">
  <img src="assets/logo.png" alt="Dvader" width="200" />
</p>

## What It Does

| Discipline | Rule |
|:--|:--|
| Speak less | Short fragments, no filler, exact technical facts. |
| Build less | Existing helper, stdlib, native platform, smallest diff. |
| Move now | State, step, proof, next. |
| Prove done | Run the check before claiming completion. |

Dvader cuts filler so you spend fewer tokens and less attention on status chatter.

## Install

```bash
npx dvader-skills
npx dvader-skills -t codex
npx dvader-skills -t all
npx dvader-skills --dry-run
```

Default target: `~/.agents/skills`.

Known targets: `agents`, `opencode`, `opencode-config`, `claude`, `codex`, `all`, `universal`.

Remove:

```bash
npx dvader-skills remove
```

## Daily Core

| Skill | Job |
|---|---|
| [`dvader-do`](skills/dvader-do/SKILL.md) | State, step, proof, next. |
| [`dvader-build`](skills/dvader-build/SKILL.md) | Smallest working diff. |
| [`dvader-hunt`](skills/dvader-hunt/SKILL.md) | Repro, trace, root cause, proof. |
| [`dvader-test`](skills/dvader-test/SKILL.md) | Smallest runnable check. |
| [`dvader-verify`](skills/dvader-verify/SKILL.md) | No `Work done` without proof. |
| [`dvader-review`](skills/dvader-review/SKILL.md) | Findings first, file:line, severity. |

## Full Suite

| Skill | Job |
|---|---|
| [`dvader`](skills/dvader/SKILL.md) | Base voice and discipline. |
| [`dvader-short`](skills/dvader-short/SKILL.md) | Compression gears: `order`, `guard`, `master`, `kill`. |
| [`dvader-audit`](skills/dvader-audit/SKILL.md) | Repo-wide bloat scan. |
| [`dvader-bench`](skills/dvader-bench/SKILL.md) | Measure before optimizing. |
| [`dvader-commit`](skills/dvader-commit/SKILL.md) | Terse Conventional Commits. |
| [`dvader-compress`](skills/dvader-compress/SKILL.md) | Compress memory files, preserve code. |
| [`dvader-debt`](skills/dvader-debt/SKILL.md) | Harvest deferred shortcut markers. |
| [`dvader-explain`](skills/dvader-explain/SKILL.md) | Full-prose teaching mode. |
| [`dvader-help`](skills/dvader-help/SKILL.md) | One-page reference. |
| [`dvader-security`](skills/dvader-security/SKILL.md) | Threat scan with full grammar. |
| [`dvader-ship`](skills/dvader-ship/SKILL.md) | Branch, commit, push, PR, verify. |
| [`dvader-stats`](skills/dvader-stats/SKILL.md) | Honest usage caveats. |

## The Math

Dvader targets up to **80% fewer output tokens** on short report-style replies.

Token claims are measured on included fixtures and capped at conservative public wording. The goal is useful compression, not misleading benchmarks.

Run the fixture check:

```bash
npm run bench:tokens
```

Run all tests:

```bash
npm test
```

## Voice Example

Normal:

```text
The authentication middleware is rejecting valid sessions because the token expiry check uses the wrong comparison operator. Change the boundary check and run the authentication test suite.
```

Dvader:

```text
(Hhh-Perrr...) Auth gate wrong. Expiry check kills valid session. Fix boundary. Run auth test.
```

## Rules That Never Bend

- Never drop `not`, `no`, `never`, or `only`.
- Keep numbers, paths, commands, code, API names, and exact errors.
- Use full clear grammar for security, money, legal, data-loss, and irreversible actions.
- Add words back when compression hides order, cause, owner, amount, risk, or proof.

## License

[MIT](LICENSE) · © 2026 [gtknrg](https://github.com/gtknrg)
