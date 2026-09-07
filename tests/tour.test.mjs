#!/usr/bin/env node
// Keeps the tour honest. The tour is documentation that claims things about
// this room's layout; these cases turn each claim into something that can fail.

import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import test from 'node:test';
import { fileURLToPath } from 'node:url';

import { LABEL, PLACES, ROOM_ROOT, render } from '../tour.mjs';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const described = new Set(PLACES.map((place) => place.path));

// What v2.3 prescribes for a filled room: the six copied controls, the Claude
// bridge and permission file, the harness feedback log, and one stable spec.
const CONTROLS = [
  'AGENTS.md', 'BLUEPRINT.md', 'LEXICON.md', 'TASKBOARD.md', 'RUNBOOK.md', 'README.md',
  'HARNESS_FEEDBACK.md', 'CLAUDE.md', '.claude/settings.json', '.claude/README.md',
  'specs/S-001-self-explaining-room/SPEC.md',
];

test('the tour and the room agree on where the room is', () => {
  assert.equal(ROOM_ROOT, root, 'the tour must describe the room it ships inside');
  assert.equal(LABEL, 'v2.3 spec-centered progressive disclosure, 2026-07-16');
});

test('every place the tour names exists in this room', () => {
  for (const place of PLACES) {
    assert.ok(fs.existsSync(path.join(root, place.path)), `the tour names ${place.path}, which does not exist`);
  }
});

test('every Markdown file at the room root is described', () => {
  for (const name of fs.readdirSync(root)) {
    if (name.endsWith('.md')) assert.ok(described.has(name), `${name} sits at the root but the tour never explains it`);
  }
});

test('every control this generation prescribes is present and described', () => {
  for (const control of CONTROLS) {
    assert.ok(fs.existsSync(path.join(root, control)), `${control} is missing`);
    assert.ok(described.has(control), `${control} is not explained by the tour`);
  }
});

test('every place says what it owns and why it is separate', () => {
  for (const place of PLACES) {
    assert.ok(place.owns && place.owns.trim().length > 20, `${place.path} does not say what it owns`);
    assert.ok(place.why && place.why.trim().length > 40, `${place.path} does not say why it is kept apart`);
  }
});

test('the Claude bridge carries no rules of its own', () => {
  assert.equal(fs.readFileSync(path.join(root, 'CLAUDE.md'), 'utf8').trim(), '@AGENTS.md');
});

test('the generated regions exist, so render and doctor have a target', () => {
  const blueprint = fs.readFileSync(path.join(root, 'BLUEPRINT.md'), 'utf8');
  const taskboard = fs.readFileSync(path.join(root, 'TASKBOARD.md'), 'utf8');
  assert.match(blueprint, /<!-- spec-catalog:start -->[\s\S]*S-001[\s\S]*<!-- spec-catalog:end -->/);
  assert.match(taskboard, /<!-- hot-specs:start -->[\s\S]*<!-- hot-specs:end -->/);
});

test('the one-time Genesis protocol was removed at handoff, as Phase 7 says', () => {
  assert.ok(!fs.existsSync(path.join(root, 'GENESIS.md')), 'GENESIS.md is still at the root');
});

test('no template placeholder leaked into any control, spec, or permission file', () => {
  const placeholder = /\[[A-Z][A-Z0-9_ -]+\]/;
  const walk = (dir) => fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) return entry.name === 'node_modules' ? [] : walk(full);
    return /\.(md|json)$/.test(entry.name) ? [full] : [];
  });
  for (const file of walk(root)) {
    // A genuine Markdown link such as [S-001](specs/...) is not a placeholder.
    const lines = fs.readFileSync(file, 'utf8').replace(/\[[^\]]*\]\([^)]*\)/g, '').split('\n');
    const hit = lines.findIndex((line) => placeholder.test(line));
    assert.equal(hit, -1, `placeholder leaked: ${path.relative(root, file)}:${hit + 1}`);
  }
});

test('the map prints under the generation heading with every place', () => {
  const out = render();
  assert.ok(out.includes(`Example Workbench (${LABEL}) - room map`), 'heading missing');
  for (const place of PLACES) assert.ok(out.includes(`  ${place.path}\n`), `${place.path} missing from output`);
});
