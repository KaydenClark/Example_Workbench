#!/usr/bin/env node
// Keeps the tour honest. The tour claims things about this room's layout and
// about what the v1.1 generation added; each case turns a claim into a check.

import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import test from 'node:test';
import { fileURLToPath } from 'node:url';

import { CONTROLS, HEADING, PLACES, ROOM_ROOT, render } from '../tour.mjs';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const described = new Set(PLACES.map((place) => place.path));
const read = (file) => fs.readFileSync(path.join(root, file), 'utf8');

test('the tour and the room agree on where the room is', () => {
  assert.equal(ROOM_ROOT, root, 'the tour must describe the room it ships inside');
});

test('every place the tour names exists in this room', () => {
  for (const place of PLACES) {
    assert.ok(fs.existsSync(path.join(root, place.path)), `the tour names ${place.path}, which does not exist`);
  }
});

test('every root Markdown file and every prescribed control is described', () => {
  for (const file of fs.readdirSync(root).filter((name) => name.endsWith('.md'))) {
    assert.ok(described.has(file), `${file} is not described by the tour`);
  }
  for (const control of CONTROLS) {
    assert.ok(fs.existsSync(path.join(root, control)), `prescribed control ${control} is missing`);
    assert.ok(described.has(control), `prescribed control ${control} is not described by the tour`);
  }
});

test('every place says what it owns and why it is kept apart', () => {
  for (const place of PLACES) {
    assert.ok(place.owns && place.owns.trim().length > 20, `${place.path} does not say what it owns`);
    assert.ok(place.why && place.why.trim().length > 40, `${place.path} does not say why it is kept apart`);
  }
});

test('the printed map opens with the generation heading', () => {
  assert.equal(HEADING, 'Example Workbench (v1.1 anti-drift and version control, 2026-06-25) - room map');
  assert.equal(render().trim().split('\n')[0], HEADING);
});

test('the v1.1 additions are present in the filled controls, not left generic', () => {
  assert.equal(read('CLAUDE.md').trim(), '@AGENTS.md', 'the Claude bridge must be exactly the import');
  const agents = read('AGENTS.md');
  assert.match(agents, /^## Staying On Track$/m, 'AGENTS.md lost the anti-drift protocol');
  assert.match(agents, /^## When To Ask, Proceed, Or Stop$/m, 'AGENTS.md lost the stop-after-two-failures rule');
  assert.match(agents, /re-read the log immediately before appending/, 'AGENTS.md lost the write-safety rule');
  const roadmap = read('ROADMAP.md');
  assert.ok(/^- \[x\] \*\*/m.test(roadmap), 'ROADMAP.md Next Tasks must be a checkbox ledger with the tour ticked');
  assert.ok(/^- \[ \] \*\*/m.test(roadmap), 'ROADMAP.md must name one honest next step');
  const runbook = read('RUNBOOK.md');
  assert.match(runbook, /^## Version Control$/m, 'RUNBOOK.md lost the Version Control section');
  assert.match(runbook, /`integration`/, 'the Version Control section must name the repository staging branch');
  assert.match(read('VISUAL_DESIGN.md'), /^## Accessibility$/m, 'VISUAL_DESIGN.md lost the Accessibility section');
});

test('no template placeholder survived in the controls', () => {
  for (const file of fs.readdirSync(root).filter((name) => /\.(md|json)$/.test(name))) {
    const hit = read(file).match(/\[[A-Z][A-Z0-9_ -]+\]/);
    assert.equal(hit, null, `${file} still carries the placeholder ${hit && hit[0]}`);
  }
});
