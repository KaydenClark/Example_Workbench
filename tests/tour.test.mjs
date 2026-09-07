#!/usr/bin/env node
// Keeps the tour honest. The tour claims things about this room's layout;
// each case here turns one claim into something that can fail.

import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import test from 'node:test';
import { fileURLToPath } from 'node:url';

import { GENERATION, PLACES, ROOM_ROOT, render } from '../tour.mjs';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const described = new Set(PLACES.map((place) => place.path));

// Everything the v2.1 README tells a project to copy, plus the Claude bridge.
const CONTROLS = ['AGENTS.md', 'BLUEPRINT.md', 'TASKBOARD.md', 'RUNBOOK.md', 'README.md',
  'HARNESS_FEEDBACK.md', 'CLAUDE.md', '.claude/settings.json', '.claude/README.md'];

test('the tour and the room agree on where the room is', () => {
  assert.equal(ROOM_ROOT, root, 'the tour must describe the room it ships inside');
});

test('every place the tour names exists in this room', () => {
  for (const place of PLACES) {
    assert.ok(fs.existsSync(path.join(root, place.path)), `the tour names ${place.path}, which does not exist`);
  }
});

test('every place says what it owns and why it is separate', () => {
  for (const place of PLACES) {
    assert.ok(place.owns && place.owns.trim().length > 20, `${place.path} does not say what it owns`);
    assert.ok(place.why && place.why.trim().length > 40, `${place.path} does not say why it is kept apart`);
  }
});

test('every Markdown file at the room root is described', () => {
  for (const name of fs.readdirSync(root).filter((n) => n.endsWith('.md'))) {
    assert.ok(described.has(name), `${name} is not described by the tour`);
  }
});

test('every control v2.1 prescribes is present and described', () => {
  for (const control of CONTROLS) {
    assert.ok(fs.existsSync(path.join(root, control)), `control ${control} is missing`);
    assert.ok(described.has(control), `control ${control} is not described by the tour`);
  }
});

test('the Claude bridge carries no rules of its own', () => {
  assert.equal(fs.readFileSync(path.join(root, 'CLAUDE.md'), 'utf8').trim(), '@AGENTS.md');
});

test('the one-time Genesis protocol was removed at handoff, as Phase 7 says', () => {
  assert.ok(!fs.existsSync(path.join(root, 'GENESIS.md')), 'GENESIS.md is still at the root');
});

test('no template placeholder leaked into a control or the permission file', () => {
  const placeholder = /\[[A-Z][A-Z0-9_ -]+\]/;
  const walk = (dir) => fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) return entry.name === 'node_modules' ? [] : walk(full);
    return /\.(md|json)$/.test(entry.name) ? [full] : [];
  });
  for (const file of walk(root)) {
    const hit = fs.readFileSync(file, 'utf8').split('\n').findIndex((line) => placeholder.test(line));
    assert.equal(hit, -1, `placeholder leaked: ${path.relative(root, file)}:${hit + 1}`);
  }
});

test('the map prints under the generation heading with every place', () => {
  const out = render();
  assert.ok(out.includes(`Example Workbench (${GENERATION}) - room map`), 'heading missing');
  for (const place of PLACES) assert.ok(out.includes(`  ${place.path}\n`), `${place.path} missing from output`);
});
