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
