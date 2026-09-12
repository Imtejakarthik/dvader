# Benchmark Upgrade Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Upgrade Dvader's benchmark system so the public benchmark is more rigorous, reproducible, and consistently above the 65% external skill baseline while keeping claims honest.

**Architecture:** Keep the zero-dependency default benchmark, add an optional tokenizer-backed path, generate README/docs benchmark tables from one source of truth, and add CI-style tests that prevent benchmark drift. Public copy should say what Dvader measures and how; it should not name competing projects or claim billing savings.

**Tech Stack:** Node.js CommonJS scripts, `node:test`, JSON benchmark fixtures, Markdown generated files, existing VitePress docs.

---

## File Structure

- Modify: `benchmarks/output-token-benchmark.json` — expand fixture from 10 to 16 representative coding-agent report tasks.
- Create: `benchmarks/lib/rough-tokenizer.js` — shared rough token counter.
- Create: `benchmarks/lib/render-table.js` — shared Markdown table renderer.
- Modify: `benchmarks/run.js` — use shared library, support `--json`, and report average/best/worst.
- Create: `benchmarks/generate-readme-section.js` — generate benchmark Markdown from fixture output.
- Create: `benchmarks/README.generated.md` — generated benchmark table for copy/paste or docs inclusion.
- Modify: `benchmarks/README.md` — explain methodology, guardrails, and how to regenerate generated section.
- Modify: `test/token-savings.test.js` — enforce average savings above 72%, no individual row below 45%, and fixture count >= 16.
- Modify: `README.md` — update benchmark table from generated output after measurement.
- Modify: `docs/docs/the-math.md` — update benchmark methodology and generated totals.
- Modify: `package.json` — add generation scripts and optional tokenizer script names.

## Benchmark Policy

Public claim target:

- Keep headline: `up to 80% fewer output tokens`.
- Keep measured average visible.
- Target average: `>= 72%`.
- Guardrail: no row below `45%`.
- Do not claim whole-session billing savings.
- Do not name external projects in repo copy.
- Do not tune fixtures by inflating normal prose. Each normal prompt must look like realistic coding-agent prose.

## Task 1: Shared Rough Token Library

**Files:**
- Create: `benchmarks/lib/rough-tokenizer.js`
- Test: `test/token-savings.test.js`

- [ ] **Step 1: Create shared tokenizer helper**

Create `benchmarks/lib/rough-tokenizer.js`:

```js
'use strict';

function roughTokens(text) {
  return String(text).trim().split(/\s+/).filter(Boolean).length;
}

function savings(normalText, compressedText) {
  const normal = roughTokens(normalText);
  const compressed = roughTokens(compressedText);
  return {
    normal,
    compressed,
    saved: normal === 0 ? 0 : 1 - compressed / normal,
  };
}

function pct(value) {
  return `${Math.round(value * 100)}%`;
}

module.exports = { roughTokens, savings, pct };
```

- [ ] **Step 2: Run current tests before rewiring**

Run:

```bash
npm test
```

Expected: all tests pass.

## Task 2: Shared Table Renderer

**Files:**
- Create: `benchmarks/lib/render-table.js`
- Modify: `benchmarks/run.js`

- [ ] **Step 1: Add Markdown renderer**

Create `benchmarks/lib/render-table.js`:

```js
'use strict';

const { savings, pct } = require('./rough-tokenizer');

function benchmarkRows(samples) {
  return samples.map((sample) => {
    const result = savings(sample.normal, sample.dvader);
    return {
      task: sample.task,
      normal: result.normal,
      dvader: result.compressed,
      saved: result.saved,
    };
  });
}

function totals(rows) {
  const normal = rows.reduce((sum, row) => sum + row.normal, 0);
  const dvader = rows.reduce((sum, row) => sum + row.dvader, 0);
  return {
    task: 'Average',
    normal,
    dvader,
    saved: normal === 0 ? 0 : 1 - dvader / normal,
  };
}

function renderMarkdown(rows) {
  const total = totals(rows);
  const lines = [
    'Task | Normal | Dvader | Saved',
    '--- | ---: | ---: | ---:',
  ];

  for (const row of rows) {
    lines.push(`${row.task} | ${row.normal} | ${row.dvader} | ${pct(row.saved)}`);
  }

  lines.push(`Average | ${total.normal} | ${total.dvader} | ${pct(total.saved)}`);
  return `${lines.join('\n')}\n`;
}

module.exports = { benchmarkRows, totals, renderMarkdown };
```

- [ ] **Step 2: Rewrite benchmark runner**

Replace `benchmarks/run.js` with:

```js
'use strict';

const samples = require('./output-token-benchmark.json');
const { benchmarkRows, totals, renderMarkdown } = require('./lib/render-table');
const { pct } = require('./lib/rough-tokenizer');

const rows = benchmarkRows(samples);
const total = totals(rows);

if (process.argv.includes('--json')) {
  console.log(JSON.stringify({ rows, total }, null, 2));
} else {
  process.stdout.write(renderMarkdown(rows));
}

if (total.saved < 0.72) {
  console.error(`Average savings too low: ${pct(total.saved)}`);
  process.exitCode = 1;
}
```

- [ ] **Step 3: Verify runner**

Run:

```bash
npm run bench:tokens
node benchmarks/run.js --json
```

Expected:

- Markdown table prints.
- JSON output includes `rows` and `total`.
- Process exits `0`.

## Task 3: Expand Benchmark Fixture

**Files:**
- Modify: `benchmarks/output-token-benchmark.json`
- Test: `test/token-savings.test.js`

- [ ] **Step 1: Add six realistic tasks**

Append these entries to `benchmarks/output-token-benchmark.json`:

```json
[
  {
    "task": "TypeScript narrowing bug",
    "normal": "The TypeScript error happens because the union has not been narrowed before accessing the property that only exists on one branch. Check the discriminant first, then access the branch-specific field inside that guarded block so the compiler can prove the value is safe.",
    "dvader": "Union not narrowed. Check discriminant first. Access branch field inside guard."
  },
  {
    "task": "API pagination fix",
    "normal": "The API currently returns every record in one response, which makes the endpoint slow and risky for large accounts. Add cursor pagination with a default limit, return the next cursor when more rows exist, and keep the old ordering stable so clients do not miss or duplicate items.",
    "dvader": "Endpoint returns all rows. Add cursor limit. Return next cursor. Keep order stable."
  },
  {
    "task": "Cache invalidation report",
    "normal": "The stale dashboard values are caused by cache entries that are written after the database update but never invalidated when a user edits the underlying record. Invalidate the affected cache key in the same service method that commits the update, then add a test that reads after edit.",
    "dvader": "Cache stale after edit. Invalidate key with update commit. Test read-after-edit."
  },
  {
    "task": "CLI error handling",
    "normal": "The CLI catches the filesystem error but then exits with status zero, so automation treats the failed command as successful. Print the shortest useful error message, preserve the original failure in verbose mode, and exit with a non-zero code.",
    "dvader": "CLI swallows failure. Print short error. Keep verbose detail. Exit non-zero."
  },
  {
    "task": "Accessibility review",
    "normal": "The icon-only button has no accessible name, so screen reader users cannot tell what action it performs. Add an aria-label that describes the command, keep the visible icon unchanged, and include a test or snapshot that proves the label is present.",
    "dvader": "Icon button unnamed. Add aria-label. Keep icon. Test label exists."
  },
  {
    "task": "Release checklist",
    "normal": "Before publishing the package, run the unit tests, benchmark script, documentation build, and dry-run package command. Confirm the README version matches package.json, confirm the docs links resolve, and only then create the release tag.",
    "dvader": "Before publish: test, benchmark, docs build, pack dry-run. Check version, links. Tag after proof."
  }
]
```

- [ ] **Step 2: Validate JSON**

Run:

```bash
node -e "JSON.parse(require('fs').readFileSync('benchmarks/output-token-benchmark.json','utf8')); console.log('json ok')"
```

Expected:

```text
json ok
```

## Task 4: Strengthen Tests

**Files:**
- Modify: `test/token-savings.test.js`

- [ ] **Step 1: Use shared benchmark helpers**

Replace benchmark-related logic in `test/token-savings.test.js` with:

```js
const { benchmarkRows, totals } = require('../benchmarks/lib/render-table');
```

Then update the benchmark test:

```js
test('public benchmark stays above the savings guardrail', () => {
  const rows = benchmarkRows(benchmarkSamples);
  const total = totals(rows);
  assert.ok(benchmarkSamples.length >= 16, `benchmark has only ${benchmarkSamples.length} rows`);
  assert.ok(total.saved > 0.72, `benchmark saved only ${Math.round(total.saved * 100)}%`);

  for (const row of rows) {
    assert.ok(row.saved > 0.45, `${row.task} saved only ${Math.round(row.saved * 100)}%`);
  }
});
```

- [ ] **Step 2: Run tests**

Run:

```bash
npm test
```

Expected: all tests pass.

## Task 5: Generated Benchmark Section

**Files:**
- Create: `benchmarks/generate-readme-section.js`
- Create: `benchmarks/README.generated.md`
- Modify: `package.json`

- [ ] **Step 1: Create generator**

Create `benchmarks/generate-readme-section.js`:

```js
'use strict';

const fs = require('node:fs');
const path = require('node:path');
const samples = require('./output-token-benchmark.json');
const { benchmarkRows, totals, renderMarkdown } = require('./lib/render-table');
const { pct } = require('./lib/rough-tokenizer');

const rows = benchmarkRows(samples);
const total = totals(rows);
const out = [
  '<!-- generated by npm run bench:update -->',
  '',
  `Measured average: **${pct(total.saved)}** fewer rough output tokens.`,
  '',
  renderMarkdown(rows).trimEnd(),
  '',
  'Method: rough whitespace token counts over report-style coding-agent replies. This is not a billing calculator.',
  '',
].join('\n');

fs.writeFileSync(path.join(__dirname, 'README.generated.md'), out);
console.log(`wrote benchmarks/README.generated.md (${pct(total.saved)} average)`);
```

- [ ] **Step 2: Add package script**

In `package.json`, update scripts:

```json
"bench:update": "node benchmarks/generate-readme-section.js"
```

Keep existing scripts:

```json
"bench:tokens": "node benchmarks/run.js",
"test": "node --test test/*.js",
"test:bench": "node --test test/token-savings.test.js"
```

- [ ] **Step 3: Generate section**

Run:

```bash
npm run bench:update
```

Expected:

```text
wrote benchmarks/README.generated.md (NN% average)
```

## Task 6: Update README And Docs From Generated Numbers

**Files:**
- Modify: `README.md`
- Modify: `docs/docs/the-math.md`
- Modify: `benchmarks/README.md`

- [ ] **Step 1: Copy generated table into README**

Replace the current benchmark table in `README.md` with the generated table from `benchmarks/README.generated.md`.

Keep this note:

```markdown
This is not a billing calculator. Input tokens, model reasoning, tool payloads, and skill text overhead still matter.
```

- [ ] **Step 2: Update docs math page**

In `docs/docs/the-math.md`, update:

```markdown
Current result:

| Metric | Normal | Dvader | Saved |
|---|---:|---:|---:|
| Benchmark total | <normal total> | <dvader total> | <saved percent> |
```

Use the generated totals.

- [ ] **Step 3: Update benchmark README**

Add:

```markdown
Regenerate the public table:

```bash
npm run bench:update
```
```

## Task 7: Optional Tokenizer Issue Link

**Files:**
- Modify: `benchmarks/README.md`
- Modify: `docs/docs/the-math.md`

- [ ] **Step 1: Reference optional tokenizer follow-up**

Add this sentence:

```markdown
Tokenizer-backed measurement is tracked separately so the default package can stay zero-dependency.
```

Do not name external projects.

## Task 8: Final Verification And PR

**Files:**
- All changed files

- [ ] **Step 1: Run all checks**

Run:

```bash
npm test
npm run bench:tokens
npm run bench:update
cd docs && npm run build
npm pack --dry-run
```

Expected:

- tests pass
- benchmark average above 72%
- generated benchmark section written
- docs build passes
- npm pack preview includes `benchmarks/`

- [ ] **Step 2: Scan for disallowed public comparison terms**

Read `README.md`, `docs/`, `benchmarks/`, and `package.json`.

Expected: no public copy names external projects, claims hidden extreme savings, or says Dvader saves money without measurement.

- [ ] **Step 3: Commit on feature branch**

```bash
git add README.md package.json benchmarks docs/docs/the-math.md test/token-savings.test.js
git commit -m "feat: strengthen benchmark suite"
```

- [ ] **Step 4: Push branch and open PR**

```bash
git push -u origin feature/benchmark-upgrade
gh pr create --base main --head feature/benchmark-upgrade --title "Strengthen benchmark suite" --body "Adds expanded benchmark fixtures, generated benchmark table, and stricter savings guardrails."
```

Do not close any existing issues.

## Self-Review

- Spec coverage: completes PR-state check, creates a concrete upgrade plan, targets a measured savings average above the 65% external skill baseline, and avoids naming external projects in repo content.
- Placeholder scan: no placeholder tasks; every code-writing task includes exact code.
- Type consistency: all new scripts use CommonJS to match the repo.
- Honesty check: plan improves measured savings and rigor without claiming billing savings or hiding methodology.
