---
layout: home

hero:
  name: The Vader Doctrine
  text: Build least. Speak least. Move now.
  tagline: Eleven skills that fuse minimum code, minimum prose, and minimum turns — then charge the reasoning model less for the privilege.
  image:
    src: /dvader/assets/logo.png
    alt: vader-skills
  actions:
    - theme: brand
      text: Quickstart
      link: /docs/quickstart
    - theme: alt
      text: The Family
      link: /docs/skills
    - theme: alt
      text: The Math
      link: /docs/the-math

features:
  - icon: ⚔️
    title: Build least
    details: The best code is the code never written. Question the task, reach for the standard library, one line before fifty.
  - icon: 🤐
    title: Speak least
    details: All substance, no fluff. ~50–65% fewer output tokens with every technical detail — names, numbers, errors — exact.
  - icon: 🚀
    title: Move now
    details: Action first. Numbered steps. One concrete next step. No preamble, no recap, no closers.
  - icon: 💀
    title: Charge you less
    details: Reasoning tokens bill at output rates, effort floors cost money, and the 272K cliff re-prices everything. The Doctrine budgets all of it.
---

<style>
:root {
  --vp-c-brand-1: #e50914;
  --vp-c-brand-2: #c20812;
  --vp-c-brand-3: #e50914;
}
</style>

![The Doctrine in action](./demo-1.gif)

## One command

```bash
npx vader-skills              # universal default: ~/.agents/skills
npx vader-skills -t all       # opencode, Claude Code, Codex, and more
npx vader-skills --dry-run    # preview, change nothing
```

Restart your agent. The skills fire on trigger words — no slash command needed on most agents.