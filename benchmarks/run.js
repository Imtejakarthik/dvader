'use strict';

const samples = require('./output-token-benchmark.json');

function roughTokens(text) {
  return text.trim().split(/\s+/).filter(Boolean).length;
}

function pct(saved) {
  return `${Math.round(saved * 100)}%`;
}

function row(sample) {
  const normal = roughTokens(sample.normal);
  const dvader = roughTokens(sample.dvader);
  const saved = 1 - dvader / normal;
  return { task: sample.task, normal, dvader, saved };
}

const rows = samples.map(row);
const normalTotal = rows.reduce((sum, item) => sum + item.normal, 0);
const dvaderTotal = rows.reduce((sum, item) => sum + item.dvader, 0);
const averageSaved = 1 - dvaderTotal / normalTotal;

console.log('Task | Normal | Dvader | Saved');
console.log('--- | ---: | ---: | ---:');
for (const item of rows) {
  console.log(`${item.task} | ${item.normal} | ${item.dvader} | ${pct(item.saved)}`);
}
console.log(`Average | ${normalTotal} | ${dvaderTotal} | ${pct(averageSaved)}`);

if (averageSaved < 0.66) {
  console.error(`Average savings too low: ${pct(averageSaved)}`);
  process.exitCode = 1;
}
