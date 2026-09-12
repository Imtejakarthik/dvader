'use strict';

const test = require('node:test');
const assert = require('node:assert/strict');
const samples = require('./fixtures/token-samples.json');
const benchmarkSamples = require('../benchmarks/output-token-benchmark.json');

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
  let normalTotal = 0;
  let dvaderTotal = 0;

  for (const sample of benchmarkSamples) {
    normalTotal += roughTokens(sample.normal);
    dvaderTotal += roughTokens(sample.dvader);
  }

  const saved = 1 - dvaderTotal / normalTotal;
  assert.ok(saved > 0.66, `benchmark saved only ${Math.round(saved * 100)}%`);
});
