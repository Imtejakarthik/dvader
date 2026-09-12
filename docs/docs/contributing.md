---
title: Contributing
summary: How to propose, test, and ship changes to Dvader Skills.
---

# Contributing

Contributions should make Dvader shorter, safer, clearer, or easier to install.

## Process

1. Open or pick an issue.
2. Create a feature branch from `main`.
3. Keep skill edits short and exact.
4. Update docs when behavior, installation, package metadata, links, or benchmark numbers change.
5. Run proof before opening a PR.

## Required Checks

```bash
npm test
npm run bench:tokens
npm run bench:gpt
npm run release:check
cd docs && npm run build
```

For frontend changes, include a screenshot or describe the viewport checked.

## Skill Rules

Do not remove rules that preserve:

- `not`, `no`, `never`, `only`
- numbers and units
- paths, commands, error lines
- code blocks and API names
- security warnings
- data-loss or irreversible-action instructions

Compression is useful only while meaning survives.

## Benchmarks

Benchmark claims must stay honest:

- Keep rough whitespace and GPT-tokenizer numbers separate.
- Do not claim billing savings from output fixtures.
- Update `benchmarks/output-token-benchmark.json` and generated docs together.
- Run `npm run bench:save` when changing measured outputs.

## Pull Requests

PR body should include:

- Problem
- Fix
- Proof commands
- Screenshots for docs UI changes
- Linked issue when one exists

Next: [FAQ](/docs/faq).
