#!/usr/bin/env node
'use strict';

const { once } = require('node:events');
const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');

const VERSION = require('../package.json').version;
const SKILLS_DIR = path.join(__dirname, '..', 'skills');

function listSkills() {
  return fs
    .readdirSync(SKILLS_DIR)
    .filter((n) => fs.statSync(path.join(SKILLS_DIR, n)).isDirectory())
    .filter((n) => fs.existsSync(path.join(SKILLS_DIR, n, 'SKILL.md')))
    .sort();
}

function agentTargets() {
  const home = os.homedir();
  return {
    agents: path.join(home, '.agents', 'skills'),
    opencode: path.join(home, '.opencode', 'skills'),
    'opencode-config': path.join(home, '.config', 'opencode', 'skills'),
    claude: path.join(home, '.claude', 'skills'),
    codex: path.join(home, '.codex', 'skills'),
  };
}

function parseArgs(argv) {
  const args = { command: 'install', targets: null, path: null, dryRun: false, yes: false, help: false };
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (a === '--help' || a === '-h') args.help = true;
    else if (a === '--dry-run') args.dryRun = true;
    else if (a === '--yes' || a === '-y') args.yes = true;
    else if (a === '--target' || a === '--targets' || a === '-t') args.targets = (argv[++i] || '').split(',').map((s) => s.trim()).filter(Boolean);
    else if (a.startsWith('--target=')) args.targets = a.split('=')[1].split(',').map((s) => s.trim()).filter(Boolean);
    else if (a === '--path' || a === '-p') args.path = argv[++i] || null;
    else if (a.startsWith('--path=')) args.path = a.split('=').slice(1).join('=');
    else if (a === 'install' || a === 'remove' || a === 'list') args.command = a;
    else if (!i) args.unknown = a;
  }
  return args;
}

function resolveTargets(args) {
  const known = agentTargets();
  if (args.path) return [{ name: path.basename(path.resolve(args.path)), dir: path.resolve(args.path) }];
  if (!args.targets) return [{ name: 'agents', dir: known.agents }]; // safe default: universal dir
  const missing = args.targets.filter((t) => !known[t] && t !== 'all' && t !== 'universal');
  if (missing.length) {
    throw new Error(`Unknown target(s): ${missing.join(', ')}. Known: ${Object.keys(known).join(', ')}, all, universal.`);
  }
  if (args.targets.includes('all') || args.targets.includes('universal')) return Object.values(known).map((d, i) => ({ name: Object.keys(known)[i], dir: d }));
  return args.targets.map((t) => ({ name: t, dir: known[t] }));
}

function install(args) {
  const skills = listSkills();
  if (!skills.length) {
    console.error('No dvader skills found next to this package.');
    process.exit(1);
  }
  const targets = resolveTargets(args);
  let planned = 0;
  for (const t of targets) {
    for (const s of skills) {
      const dest = path.join(t.dir, s);
      planned++;
      if (args.dryRun) {
        console.log(`would copy skills/${s} -> ${dest}`);
        continue;
      }
      fs.cpSync(path.join(SKILLS_DIR, s), dest, { recursive: true, force: true });
      console.log(`installed ${s} -> ${dest}`);
    }
  }
  if (args.dryRun) console.log(`[dry-run] ${planned} copies. Nothing written.`);
  else console.log(`\nDone. ${skills.length} dvader skills -> ${targets.length} target(s). Restart your agent to load them.`);
}

function remove(args) {
  const targets = resolveTargets(args);
  const skills = listSkills();
  for (const t of targets) {
    for (const s of skills) {
      const dest = path.join(t.dir, s);
      if (!fs.existsSync(dest)) continue;
      if (args.dryRun) {
        console.log(`would remove ${dest}`);
        continue;
      }
      fs.rmSync(dest, { recursive: true, force: true });
      console.log(`removed ${dest}`);
    }
  }
  if (args.dryRun) console.log('[dry-run] nothing removed.');
  else console.log('\nDone. dvader skills removed.');
}

function help() {
  console.log(`dvader-skills ${VERSION} — The Breath installer
Installs the 6 dvader skill folders into agent skill directories.

Usage: npx dvader-skills <command> [options]

Commands:
  install   copy skills into target dirs (default)
  remove    delete installed dvader skills from target dirs
  list      print the bundled skills and known target dirs

Options:
  -t, --target <list>  agents,opencode,opencode-config,claude,codex,all,universal
                       (default: agents -> ~/.agents/skills)
  -p, --path <dir>     copy to a single explicit directory instead
      --dry-run        print what would happen, change nothing
  -y, --yes            skip the confirmation prompt on install
  -h, --help           this card

Examples:
  npx dvader-skills                       # to ~/.agents/skills
  npx dvader-skills -t all                # every known agent dir
  npx dvader-skills -t opencode,codex
  npx dvader-skills --dry-run -t all
`);
}

async function main() {
  const stdin = process.stdin;
  const args = parseArgs(process.argv.slice(2));
  if (args.help) return help();
  if (args.command === 'list') {
    console.log('Bundled skills:\n  ' + listSkills().join('\n  '));
    console.log('\nKnown targets:');
    for (const [k, d] of Object.entries(agentTargets())) console.log(`  ${k} -> ${d}`);
    return;
  }
  if (args.command === 'remove') return remove(args);
  if (!args.dryRun && !args.yes && !process.platform.startsWith('win') && stdin.isTTY && process.env.NODE_ENV !== 'test') {
    console.log('Install dvader skills? (y/N) ');
    stdin.setEncoding('utf8');
    stdin.resume();
    const [line] = await once(stdin, 'data');
    const ok = String(line).trim().toLowerCase();
    if (ok !== 'y' && ok !== 'yes') {
      console.log('Aborted. Use --yes to skip this prompt.');
      return;
    }
  }
  install(args);
}

module.exports = { listSkills, agentTargets, parseArgs, resolveTargets, SKILLS_DIR };

if (require.main === module) main().catch((e) => {
  console.error(e.message || e);
  process.exit(1);
});