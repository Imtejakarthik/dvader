'use strict';

const fs = require('node:fs');
const path = require('node:path');
const { execFileSync } = require('node:child_process');

const root = path.join(__dirname, '..');
const required = [
  'README.md',
  'LICENSE',
  'assets/dvader-logo.png',
  'assets/dvader-power.gif',
  'assets/hero-grid-background.png',
  'docs/index.md',
  'docs/docs/the-math.md',
  'benchmarks/output-token-benchmark.json',
  'benchmarks/prompts.json',
  'benchmarks/results/latest-rough.json',
  'benchmarks/results/latest-gpt.json',
];

function fail(message) {
  console.error(`FAIL ${message}`);
  process.exitCode = 1;
}

for (const rel of required) {
  if (!fs.existsSync(path.join(root, rel))) fail(`missing ${rel}`);
}

const pkg = require('../package.json');
if (!pkg.repository.url.includes('Imtejakarthik/dvader')) fail('repository URL wrong');
if (pkg.license !== 'MIT') fail('license must be MIT');
if (!pkg.homepage.includes('imtejakarthik.github.io/dvader')) fail('homepage URL wrong');

const readme = fs.readFileSync(path.join(root, 'README.md'), 'utf8');
for (const text of ['https://imtejakarthik.github.io/dvader/', 'https://www.npmjs.com/package/dvader-skills', 'assets/dvader-logo.png']) {
  if (!readme.includes(text)) fail(`README missing ${text}`);
}

execFileSync(process.execPath, ['benchmarks/run.js'], { cwd: root, stdio: 'inherit' });

if (process.platform === 'win32') {
  execFileSync('cmd.exe', ['/d', '/s', '/c', 'npm pack --dry-run'], { cwd: root, stdio: 'inherit' });
} else {
  execFileSync('npm', ['pack', '--dry-run'], { cwd: root, stdio: 'inherit' });
}

if (!process.exitCode) console.log('release checklist pass');
