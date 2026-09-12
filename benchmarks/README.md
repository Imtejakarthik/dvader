# Benchmarks

This folder holds the public output-compression fixture.

Run:

```bash
npm run bench:tokens
npm run bench:gpt
```

Regenerate the README table:

```bash
npm run bench:update
```

The default benchmark uses rough whitespace token counts shared by the runner, tests, and generated README table. `npm run bench:gpt` runs the same fixture through `gpt-tokenizer`. Neither mode is a billing calculator. They answer one narrow question: how much shorter are Dvader-style report replies than ordinary report prose on this fixture?

Persist history:

```bash
npm run bench:save
```

Current guardrail: the suite must include at least 16 fixtures, each rough row must stay above 45% reduction, rough average must stay above 78%, and GPT-tokenizer average must stay above 72%.
