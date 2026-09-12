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

**What license does it use?** MIT. Keep the copyright and license notice when reusing or publishing copies.

**How do I contribute?** Open or pick an issue, create a feature branch from `main`, update docs with behavior changes, run the required checks, then open a PR with problem, fix, and proof. See [Contributing](/docs/contributing).

**How do I turn it off?** Say `stop dvader` or `normal mode`.

**How do I remove it?**

```bash
npx dvader-skills remove
```
