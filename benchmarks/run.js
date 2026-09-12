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
