# Benchmarks

This folder holds the public output-compression fixture.

Run:

```bash
npm run bench:tokens
```

Regenerate the README table:

```bash
npm run bench:update
```

The benchmark uses rough whitespace token counts shared by the runner, tests, and generated README table. It is not a billing calculator and not a model-tokenizer replacement. It answers one narrow question: how much shorter are Dvader-style report replies than ordinary report prose on this fixture?

Current guardrail: the suite must include at least 16 fixtures, each row must stay above 45% reduction, and the average must stay above 72% reduction.
