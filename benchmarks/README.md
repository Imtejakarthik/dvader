# Benchmarks

This folder holds the public output-compression fixture.

Run:

```bash
npm run bench:tokens
```

The benchmark uses rough whitespace token counts. It is not a billing calculator and not a model-tokenizer replacement. It answers one narrow question: how much shorter are Dvader-style report replies than ordinary report prose on this fixture?

Current guardrail: the suite must stay above 66% average reduction.
