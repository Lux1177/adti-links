import { readFileSync } from 'node:fs';
import { strict as assert } from 'node:assert';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const root = resolve(__dirname, '..');

// 1) package.json sanity
const pkgPath = resolve(root, 'package.json');
const pkg = JSON.parse(readFileSync(pkgPath, 'utf8'));
assert.equal(pkg.type, 'module', 'Project must use ESM (type: module)');
assert.ok(pkg.scripts?.dev?.includes('nuxt dev'), 'scripts.dev should run nuxt dev');
assert.ok(pkg.scripts?.build?.includes('nuxt build'), 'scripts.build should run nuxt build');

// 2) nuxt.config.ts basic checks
const nuxtConfig = readFileSync(resolve(root, 'nuxt.config.ts'), 'utf8');
assert.match(nuxtConfig, /defineNuxtConfig\(/, 'nuxt.config.ts should export defineNuxtConfig()');
assert.match(nuxtConfig, /@nuxtjs\/tailwindcss/, 'Tailwind module should be registered');

// 3) tailwind.config.js sanity
const tw = readFileSync(resolve(root, 'tailwind.config.js'), 'utf8');
assert.match(tw, /content:\s*\[/, 'Tailwind content globs should be defined');

console.log('Smoke test passed: basic project structure and config look OK.');