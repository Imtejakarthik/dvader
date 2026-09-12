---
title: FAQ
summary: Short answers to common Dvader questions.
---

# FAQ

**Does Dvader change my code style?** Yes. It pushes smaller diffs, existing helpers, stdlib first, and proof before done.

**Will it break technical accuracy?** It should not. The rules preserve negation, numbers, paths, commands, code, API names, and exact errors.

**Does it need a daemon?** No. The installer copies plain markdown skill folders.

**Which agents work?** Any agent that reads a skills directory. The installer knows `agents`, `opencode`, `opencode-config`, `claude`, and `codex`.

**Why only claim up to 80%?** Because the public claim should be repeatable and measured. Extreme replies can be shorter, but they are not the headline.

**Does it report money saved?** No. The local package only tests rough output compression fixtures.

**How do I turn it off?** Say `stop dvader` or `normal mode`.

**How do I remove it?**

```bash
npx dvader-skills remove
```
