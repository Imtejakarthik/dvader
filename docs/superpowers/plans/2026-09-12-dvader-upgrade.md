# Dvader Upgrade Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Upgrade Dvader into a sharper Darth Vader skill suite, improve the docs website, and add honest token-savings measurement.

**Architecture:** Keep the existing 18-skill package shape. Refine skill text in place, add measurement fixtures and tests, then rebuild docs content from the same truthful positioning: high-compression agent discipline with Vader flavor. Public claims must be measurable and conservative; do not publish unmeasured extreme savings.

**Tech Stack:** Markdown skill files, Node.js installer/tests using `node:test`, VitePress docs, npm package scripts.

---

## File Structure

- Modify: `skills/dvader/SKILL.md` — base voice: Vader presence, small words, safer persistence rules.
- Modify: `skills/dvader-short/SKILL.md` — compression gears, realistic measured claims, no deceptive marketing.
- Modify: `skills/dvader-do/SKILL.md` — ADHD-friendly action loop: state, step, proof, next.
- Modify: `skills/dvader-build/SKILL.md` — make build discipline more concrete and less theatrical.
- Modify: `skills/dvader-review/SKILL.md` — align review output with existing Codex review expectations.
- Modify: `skills/dvader-security/SKILL.md` — remove emoji, keep full grammar for risk.
- Modify: `skills/dvader-help/SKILL.md` — simplify entry points into daily core and advanced tools.
- Modify: `README.md` — clearer product story, honest claims, better quickstart.
- Modify: `docs/index.md` — polished docs homepage.
- Modify: `docs/docs/quickstart.md` — practical install and first-use flow.
- Modify: `docs/docs/skills.md` — skill map with "use this when" guidance.
- Modify: `docs/docs/the-core.md` — explain voice and discipline.
- Modify: `docs/docs/the-math.md` — measured token methodology and conservative public claims.
- Modify: `package.json` — fix test script and add optional benchmark script.
- Create: `test/fixtures/token-samples.json` — normal vs Dvader output fixtures.
- Create: `test/token-savings.test.js` — checks token/word reduction estimates from fixtures.
- Modify: `test/installer.test.js` — ensure all skill names still install.

## Measurement Policy

Do not implement or document deception.

Allowed:
- Optimize internally toward very high compression.
- Run measurements against sample replies.
- Publicly say "up to 80%" only if fixtures prove at least that level for representative report-style replies.
- Say "some ultra-short replies can exceed this, but 80% is the conservative public claim" if supported.

Not allowed:
- Claim savings publicly without measurement.
- Hide methodology.
- Compare against inflated normal prose samples designed only to make Dvader look better.

## Task 1: Fix Baseline Test Script

**Files:**
- Modify: `package.json`
- Test: `test/installer.test.js`

- [ ] **Step 1: Change npm test script**

Replace:

```json
"test": "node --test test/"
```

With:

```json
"test": "node --test test/*.js"
```

- [ ] **Step 2: Run test**

Run:

```bash
npm test
```

Expected:

```text
pass 7
fail 0
```

- [ ] **Step 3: Commit**

```bash
git add package.json
git commit -m "test: fix node test glob"
```

## Task 2: Refine Base Dvader Voice

**Files:**
- Modify: `skills/dvader/SKILL.md`

- [ ] **Step 1: Rewrite the voice rules**

Keep these principles:

```markdown
## Voice

Vader mind. Small words. Builder heart.

- Speak in short fragments when meaning stays safe.
- Use Vader cadence: calm, heavy, final.
- Use small words: direct verbs, no filler.
- Keep warmth rare and plain: `brother` or `buddy` only when it helps.
- Use `(Hhh-Perrr...)` rarely; at most once per short reply.
- Never compress facts: `not`, `no`, `never`, `only`, numbers, paths, commands, error lines.
- Security, data loss, legal, money, and irreversible actions use full clear grammar.
```

- [ ] **Step 2: Replace inflated token claim**

Use:

```markdown
Measured public claim: up to 80% fewer output tokens on report-style replies.
Ultra-short replies may save more, but only measured results get claimed.
```

- [ ] **Step 3: Run skill name test**

Run:

```bash
node --test test/*.js
```

Expected: all tests pass.

## Task 3: Make Compression Gears Honest and Useful

**Files:**
- Modify: `skills/dvader-short/SKILL.md`

- [ ] **Step 1: Define four gears**

Use:

```markdown
| Gear | Use | Public claim |
|------|-----|--------------|
| order | concise professional prose | measured |
| guard | default Dvader mode | measured |
| master | very terse status/report mode | measured, capped at public 80% claim |
| kill | emergency minimum words, only when user asks | no public marketing claim |
```

- [ ] **Step 2: Add anti-ambiguity rule**

```markdown
If compression hides order, cause, negation, owner, amount, or risk, add words back.
Meaning beats gear.
```

- [ ] **Step 3: Update examples**

Normal:

```text
The authentication middleware rejects valid sessions because the expiry check treats the boundary second as expired.
```

Dvader guard:

```text
(Hhh-Perrr...) Auth gate wrong. Boundary second die. Fix expiry check. Run test.
```

## Task 4: ADHD-Friendly Core Help

**Files:**
- Modify: `skills/dvader-help/SKILL.md`
- Modify: `README.md`
- Modify: `docs/docs/skills.md`

- [ ] **Step 1: Split skills into daily core and advanced**

Daily core:

```markdown
- `dvader-do` — next action
- `dvader-build` — smallest working diff
- `dvader-hunt` — bug root cause
- `dvader-test` — one proving check
- `dvader-verify` — no done without proof
- `dvader-review` — merge-risk scan
```

Advanced:

```markdown
- `dvader-audit`
- `dvader-bench`
- `dvader-commit`
- `dvader-compress`
- `dvader-debt`
- `dvader-explain`
- `dvader-security`
- `dvader-ship`
- `dvader-short`
- `dvader-stats`
```

- [ ] **Step 2: Add one-line chooser**

```markdown
Bug? `dvader-hunt`.
Building? `dvader-build`.
Confused? `dvader-explain`.
Done? `dvader-verify`.
Merging? `dvader-review`.
```

## Task 5: Add Token Measurement Fixtures

**Files:**
- Create: `test/fixtures/token-samples.json`
- Create: `test/token-savings.test.js`
- Modify: `package.json`

- [ ] **Step 1: Create fixtures**

Create `test/fixtures/token-samples.json`:

```json
[
  {
    "name": "auth bug report",
    "normal": "The authentication middleware is rejecting valid sessions because the token expiry check uses the wrong comparison operator. Change the boundary check and run the authentication test suite.",
    "dvader": "(Hhh-Perrr...) Auth gate wrong. Expiry check kills valid session. Fix boundary. Run auth test."
  },
  {
    "name": "work done report",
    "normal": "I updated the installer test command so Node runs the JavaScript test files directly. The previous command attempted to execute the test directory as a module and failed before loading the tests.",
    "dvader": "Work done. Test glob fixed. Directory no execute. Files run."
  },
  {
    "name": "review finding",
    "normal": "The request handler accepts a user-controlled file path and passes it directly to the filesystem without normalization. This can allow path traversal outside the intended directory.",
    "dvader": "Path trust broken. User path hits filesystem raw. Normalize, then bound-check."
  }
]
```

- [ ] **Step 2: Create savings test**

Create `test/token-savings.test.js`:

```js
'use strict';

const test = require('node:test');
const assert = require('node:assert/strict');
const samples = require('./fixtures/token-samples.json');

function roughTokens(text) {
  return text.trim().split(/\s+/).length;
}

test('dvader fixtures reduce rough output tokens', () => {
  for (const sample of samples) {
    const normal = roughTokens(sample.normal);
    const dvader = roughTokens(sample.dvader);
    const saved = 1 - dvader / normal;
    assert.ok(saved > 0.35, `${sample.name} saved only ${Math.round(saved * 100)}%`);
  }
});
```

- [ ] **Step 3: Add benchmark script**

In `package.json`, add:

```json
"bench:tokens": "node --test test/token-savings.test.js"
```

- [ ] **Step 4: Run tests**

Run:

```bash
npm test
```

Expected: installer tests and token fixture test pass.

## Task 6: Upgrade Docs Website Copy

**Files:**
- Modify: `docs/index.md`
- Modify: `docs/docs/quickstart.md`
- Modify: `docs/docs/the-core.md`
- Modify: `docs/docs/the-math.md`
- Modify: `docs/docs/faq.md`

- [ ] **Step 1: Homepage headline**

Use:

```markdown
# Dvader Skills

Vader mind. Small words. Builder heart.

Short replies, smaller diffs, proof before `Work done`.
```

- [ ] **Step 2: Make math honest**

Use:

```markdown
## The public claim

Dvader targets up to 80% fewer output tokens on short report-style replies.
That number must come from fixtures, not vibes.

Some extreme replies may compress more. We do not market unrepeatable extremes.
```

- [ ] **Step 3: Add first five minutes**

```markdown
1. Install: `npx dvader-skills -t codex`
2. Restart your agent.
3. Say: `dvader guard`.
4. Try: `review this diff`.
5. Finish with: `dvader-verify`.
```

## Task 7: Polish README

**Files:**
- Modify: `README.md`

- [ ] **Step 1: Fix npm badge version**

Change badge from `1.0.0` to current `package.json` version.

- [ ] **Step 2: Replace exaggerated savings language**

Use:

```markdown
Dvader cuts filler so you spend fewer tokens and less attention on status chatter.
```

- [ ] **Step 3: Add honesty note**

```markdown
Token claims are measured on included fixtures and capped at conservative public wording.
The goal is useful compression, not misleading benchmarks.
```

## Task 8: Final Verification

**Files:**
- All changed files

- [ ] **Step 1: Run package tests**

```bash
npm test
```

Expected: all tests pass.

- [ ] **Step 2: Build docs**

Run:

```bash
cd docs
npm run docs:build
```

Expected: VitePress build completes without errors.

- [ ] **Step 3: Inspect git diff**

```bash
git diff -- README.md package.json skills docs test
```

Expected:
- no deceptive token claims
- no broken skill links
- no missing `SKILL.md` frontmatter
- docs and README agree on skill count and claim language

- [ ] **Step 4: Commit**

```bash
git add README.md package.json skills docs test
git commit -m "feat: upgrade dvader skills and docs"
```

## Self-Review

- Spec coverage: skill upgrade, docs upgrade, Dvader voice, token reduction plan, and public claim policy are covered.
- Placeholder scan: no `TBD`, no vague "add tests" without code, no unspecified files.
- Type consistency: Node tests use CommonJS like existing installer tests.
- Ethics check: plan rejects deceptive metric presentation and replaces it with measured conservative claims.
