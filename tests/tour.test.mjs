#!/usr/bin/env node
// Keeps the tour honest: each claim the map makes about this room can fail here.

import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import test from 'node:test';
import { fileURLToPath } from 'node:url';

import { GENERATION, PLACES, ROOM_ROOT, render } from '../tour.mjs';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const described = new Set(PLACES.map((place) => place.path));

// The five controls the v1 README lists as the harness.
const CONTROLS = ['AGENTS.md', 'BLUEPRINT.md', 'ROADMAP.md', 'RUNBOOK.md', 'VISUAL_DESIGN.md'];

test('the tour and the room agree on where the room is', () => {
  assert.equal(ROOM_ROOT, root, 'the tour must describe the room it ships inside');
});

test('every place the tour names exists in this room', () => {
  for (const place of PLACES) {
    assert.ok(fs.existsSync(path.join(root, place.path)), `the tour names ${place.path}, which does not exist`);
  }
});

test('every place says what it owns and why it is kept apart', () => {
  for (const place of PLACES) {
    assert.ok(place.owns && place.owns.trim().length > 20, `${place.path} does not say what it owns`);
    assert.ok(place.why && place.why.trim().length > 40, `${place.path} does not say why it is separate`);
    assert.ok(!/\[[A-Z][A-Z0-9_ -]+\]/.test(place.owns + place.why), `${place.path} still carries a template placeholder`);
  }
});

test('every control this generation prescribes is present and described', () => {
  for (const control of CONTROLS) {
    assert.ok(fs.existsSync(path.join(root, control)), `control ${control} is missing`);
    assert.ok(described.has(control), `control ${control} is not explained by the tour`);
  }
});

test('every Markdown file at the room root is described', () => {
  const docs = fs.readdirSync(root).filter((name) => name.endsWith('.md'));
  assert.ok(docs.length >= CONTROLS.length + 1, 'the room root should hold the controls plus a README');
  for (const doc of docs) {
    assert.ok(described.has(doc), `${doc} sits at the room root but the tour never explains it`);
  }
});

test('the product and its test describe themselves', () => {
  assert.ok(described.has('tour.mjs'));
  assert.ok(described.has('tests/tour.test.mjs'));
});

test('the rendered map carries the generation heading and every path', () => {
  const out = render();
  assert.ok(out.includes(`Example Workbench (${GENERATION}) - room map`), 'heading missing');
  for (const place of PLACES) {
    assert.ok(out.includes(`  ${place.path}\n`), `rendered map omits ${place.path}`);
  }
});
