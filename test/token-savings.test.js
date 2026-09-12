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
