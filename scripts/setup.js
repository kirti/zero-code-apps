#!/usr/bin/env node
/**
 * zero-code-apps setup script
 * Runs automatically after npm install via postinstall hook.
 * Checks if skillforge-ai is available and guides the user if not.
 */

import { execSync } from 'child_process';
import { existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');

const reset  = '\x1b[0m';
const bold   = '\x1b[1m';
const green  = '\x1b[38;5;77m';
const cyan   = '\x1b[38;5;51m';
const yellow = '\x1b[38;5;220m';
const dim    = '\x1b[2m';

function log(msg)  { console.log(`  ${msg}`); }
function ok(msg)   { console.log(`  ${green}✓${reset}  ${msg}`); }
function info(msg) { console.log(`  ${cyan}→${reset}  ${msg}`); }
function warn(msg) { console.log(`  ${yellow}!${reset}  ${msg}`); }
function blank()   { console.log(''); }

// Check if skillforge-ai CLI is available
function hasSkillpack() {
  try {
    execSync('skillforge-ai --version', { stdio: 'pipe' });
    return true;
  } catch {
    return false;
  }
}

// Get skillforge-ai version if available
function getSkillforgeVersion() {
  try {
    return execSync('skillforge-ai --version', { stdio: 'pipe' }).toString().trim();
  } catch {
    return null;
  }
}

blank();
log(`${bold}zero-code-apps${reset}  ${dim}setup${reset}`);
blank();

// Check serve
ok('dependencies installed (serve ready)');

// Check skillforge-ai
if (hasSkillpack()) {
  const ver = getSkillforgeVersion();
  ok(`skillforge-ai ${ver} found — you're all set!`);
  blank();
  log(`${bold}Start developing:${reset}`);
  blank();
  info(`${cyan}npm run dev${reset}                          ${dim}→ http://localhost:3000${reset}`);
  info(`${cyan}open demos/nexvault/index.html${reset}       ${dim}→ NexVault demo${reset}`);
  info(`${cyan}open demos/pulse-analytics/index.html${reset} ${dim}→ Pulse Analytics demo${reset}`);
  blank();
  log(`${bold}Add a new demo:${reset}`);
  blank();
  info(`${cyan}skillforge-ai list${reset}                       ${dim}→ see available skills${reset}`);
  info(`${cyan}skillforge-ai prompt frontend-design chart-js --task "..."${reset}`);
  info(`${dim}→ paste output into Claude/GPT → save to demos/my-app/index.html${reset}`);

} else {
  warn('skillforge-ai not found on your system');
  blank();
  log(`${bold}Install it in one of two ways:${reset}`);
  blank();

  // Option A — from npm (once published)
  log(`${bold}Option A${reset} — install from npm (once published):`);
  info(`${cyan}npm install -g skillforge-ai${reset}`);
  blank();

  // Option B — link from local clone
  log(`${bold}Option B${reset} — link from local clone (works right now):`);
  info(`${cyan}git clone https://github.com/kirti/skillforge-ai${reset}`);
  info(`${cyan}cd skillforge-ai && npm install && npm run build && npm link${reset}`);
  info(`${cyan}cd ../zero-code-apps${reset}    ${dim}← come back here${reset}`);
  blank();

  // Option C — just open the demos without skillforge-ai
  log(`${bold}Or just open the demos directly${reset} — skillforge-ai only needed to generate new ones:`);
  info(`${cyan}open index.html${reset}                       ${dim}→ gallery${reset}`);
  info(`${cyan}open demos/nexvault/index.html${reset}        ${dim}→ NexVault${reset}`);
  info(`${cyan}open demos/pulse-analytics/index.html${reset} ${dim}→ Pulse Analytics${reset}`);
}

blank();
