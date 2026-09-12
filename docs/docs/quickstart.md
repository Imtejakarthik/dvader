---
title: Quickstart
summary: Install Dvader and use the daily core in about five minutes.
---

# Quickstart

Install the 18 Dvader skills, restart your agent, and use the daily core.

Docs site: [imtejakarthik.github.io/dvader](https://imtejakarthik.github.io/dvader/). npm package: [dvader-skills](https://www.npmjs.com/package/dvader-skills).

## Install

```bash
npx dvader-skills -t codex
```

Other useful targets:

```bash
npx dvader-skills
npx dvader-skills -t all
npx dvader-skills -t opencode,claude
npx dvader-skills --dry-run -t all
```

Default target is `~/.agents/skills`. Known targets: `agents`, `opencode`, `opencode-config`, `claude`, `codex`, `all`, `universal`.

## First Five Minutes

1. Install: `npx dvader-skills -t codex`
2. Restart your agent.
3. Say: `dvader guard`.
4. Try: `review this diff`.
5. Finish work with: `dvader-verify`.

For a harsh maintainability pass, say: `dvader-review strict structural`.

## What Changes

Dvader changes agent behavior in three places:

- Replies get shorter.
- Code changes get smaller.
- Claims require proof.

What never changes: code blocks, function names, API names, CLI commands, paths, exact errors, security warnings, and data-loss warnings.

## Check The Numbers

```bash
npm run bench:tokens
```

Current fixture average: 81% fewer rough output tokens. GPT-tokenizer check: 73% fewer tokens.

## Turn It Off

```text
stop dvader
normal mode
```

## Uninstall

```bash
npx dvader-skills remove
```

Next: [The Core](/docs/the-core).
