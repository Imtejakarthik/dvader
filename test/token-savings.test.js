'use strict';

const test = require('node:test');
const assert = require('node:assert/strict');
const samples = require('./fixtures/token-samples.json');
const benchmarkSamples = require('../benchmarks/output-token-benchmark.json');
const { benchmarkRows, totals } = require('../benchmarks/lib/render-table');

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

test('public benchmark stays above the savings guardrail', () => {
  const rows = benchmarkRows(benchmarkSamples);
  const total = totals(rows);

  assert.ok(rows.length >= 16, `benchmark has only ${rows.length} fixtures`);

  for (const row of rows) {
    assert.ok(row.saved > 0.45, `${row.task} saved only ${Math.round(row.saved * 100)}%`);
  }

  assert.ok(total.saved > 0.72, `benchmark saved only ${Math.round(total.saved * 100)}%`);
});
