'use strict';
const test = require('node:test');
const assert = require('node:assert/strict');
const path = require('node:path');
const { listSkills, agentTargets, parseArgs, resolveTargets, SKILLS_DIR } = require('../bin/dvader.js');

const EXPECTED = ['dvader', 'dvader-audit', 'dvader-bench', 'dvader-build', 'dvader-commit', 'dvader-compress', 'dvader-debt', 'dvader-do', 'dvader-explain', 'dvader-help', 'dvader-hunt', 'dvader-review', 'dvader-security', 'dvader-ship', 'dvader-short', 'dvader-stats', 'dvader-test', 'dvader-verify'];

test('bundles exactly the 18 dvader skills', () => {
  assert.deepEqual(listSkills(), EXPECTED);
});

test('every skill folder has a SKILL.md with frontmatter name', () => {
  for (const s of EXPECTED) {
    const md = require('node:fs').readFileSync(path.join(SKILLS_DIR, s, 'SKILL.md'), 'utf8');
    assert.match(md, /^---\r?\nname: dvader[\w-]*/);
  }
});

test('default install target is the universal agents dir', () => {
  const r = resolveTargets(parseArgs([]));
  assert.equal(r.length, 1);
  assert.equal(r[0].name, 'agents');
  assert.ok(r[0].dir.includes('.agents'));
});

test('-t all resolves to every known target', () => {
  const r = resolveTargets(parseArgs(['-t', 'all']));
  assert.equal(r.length, Object.keys(agentTargets()).length);
});

test('parseArgs handles --target=codex form', () => {
  const a = parseArgs(['--target=codex']);
  assert.deepEqual(a.targets, ['codex']);
});

test('--dry-run install changes nothing', () => {
  const r = resolveTargets(parseArgs(['--dry-run', '-t', 'all']));
  assert.ok(r.length >= 5);
  assert.equal(parseArgs(['--dry-run']).dryRun, true);
});

test('unknown target throws', () => {
  assert.throws(() => resolveTargets(parseArgs(['-t', 'nope'])), /Unknown target/);
});