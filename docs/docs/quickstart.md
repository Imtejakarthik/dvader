---
title: Quickstart
summary: Install all eleven skills and feel the Doctrine in about five minutes.
---

# Quickstart

> Install all eleven skills and feel the Doctrine in about five minutes.

The whole suite is one npm package with a **zero-dependency installer**. You are not wiring a proxy,
a daemon, or a token counter — the skill files themselves do the work.

## Install the skills

<Steps>
<div>
This works for most agents:

```bash
npx vader-skills
```

Without a flag this writes into the universal `~/.agents/skills` directory. If you are inside a project
and want the skills scoped to it, pass `-p .` to write into `./.agents/skills` instead.
</div>

<div>
Install to every agent directory at once:

```bash
# all known agent dirs
npx vader-skills -t all

# one agent
npx vader-skills -t codex

# opencode + Claude Code together
npx vader-skills -t opencode,claude

# preview before writing anything
npx vader-skills --dry-run -t all
```

Known targets: `agents`, `opencode`, `opencode-config`, `claude`, `codex`, `all`, `universal`.
</div>

<div>
Verify it took. You should now have eleven `vader-*` folders next to any existing skills:

```text
~/.agents/skills/
  vader/
  vader-ackbar/
  vader-boba/
  vader-help/
  vader-jedi/
  vader-mando/
  vader-obiwan/
  vader-palpatine/
  vader-r2/
  vader-thrawn/
  vader-yoda/
```

Restart your agent so it loads the new SKILL.md files.
</div>
</Steps>

<Note title="What it changes, and what it does not">
The Doctrine changes how your agent talks, builds, and sequences work. Output tokens drop by about
50–65% on committed benchmarks, because filler, articles, and narration get cut. What stays byte-for-byte:
code blocks, function and API names, CLI commands, and exact error strings. And the skills step aside on
their own for security warnings, irreversible actions, and any moment where being terse would make an
instruction ambiguous.
</Note>

## First contact

After restart, say:

```text
be lazy         → the fused Doctrine engages
yoda mode       → pure compression, padawan → grand-master
adhd mode       → action-first protocol
vader help      → the reference card
```

To leave the mode:

```text
stop vader
normal mode
```

## Uninstall

```bash
npx vader-skills remove
```

## Next steps

- Read [The Core](/docs/the-core) for the persistent-mode rules and the compression gears.
- Browse [The Family](/docs/skills) for all eleven skills and their triggers.
- Check [The Math](/docs/the-math) for why effort and context budget are the real bill.