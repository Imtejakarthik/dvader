'use strict';

const fs = require('node:fs');
const path = require('node:path');
const samples = require('./output-token-benchmark.json');
const { benchmarkRows, totals, renderMarkdown } = require('./lib/render-table');
const { getTokenizer, pct } = require('./lib/rough-tokenizer');

function argValue(name, fallback) {
  const prefix = `--${name}=`;
  const hit = process.argv.find((arg) => arg.startsWith(prefix));
  return hit ? hit.slice(prefix.length) : fallback;
}

const tokenizerName = argValue('tokenizer', 'rough');
const tokenizer = getTokenizer(tokenizerName);
const rows = benchmarkRows(samples, tokenizer);
const total = totals(rows);
const output = {
  metadata: {
    fixtureVersion: 2,
    tokenizer: tokenizerName,
    generatedAt: new Date().toISOString(),
    samples: samples.length,
  },
  rows,
  total,
};

if (process.argv.includes('--save')) {
  const dir = path.join(__dirname, 'results');
  fs.mkdirSync(dir, { recursive: true });
  const safeDate = output.metadata.generatedAt.replace(/[:.]/g, '-');
  fs.writeFileSync(path.join(dir, `benchmark-${safeDate}-${tokenizerName}.json`), JSON.stringify(output, null, 2));
  fs.writeFileSync(path.join(dir, `latest-${tokenizerName}.json`), JSON.stringify(output, null, 2));
}

if (process.argv.includes('--json')) {
  console.log(JSON.stringify(output, null, 2));
} else {
  console.log(`Tokenizer: ${tokenizerName}`);
  process.stdout.write(renderMarkdown(rows));
}

if (total.saved < 0.72) {
  console.error(`Average savings too low: ${pct(total.saved)}`);
  process.exitCode = 1;
}
