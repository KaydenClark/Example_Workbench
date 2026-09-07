#!/usr/bin/env node
// Keeps the tour honest. The tour claims things about this room's layout;
// each case here turns one claim into something that can fail.

import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import test from 'node:test';
import { fileURLToPath } from 'node:url';

import { CONTROLS, LABEL, PLACES, ROOM_ROOT, render } from '../tour.mjs';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const described = new Set(PLACES.map((place) => place.path));

test('the tour and the room agree on where the room is', () => {
  assert.equal(ROOM_ROOT, root, 'the tour must describe the room it ships inside');
});

test('every place the tour names exists in this room', () => {
  for (const place of PLACES) {
    assert.ok(fs.existsSync(path.join(root, place.path)), `the tour names ${place.path}, which does not exist`);
  }
});

test('every control this generation prescribes is present and described', () => {
  for (const control of CONTROLS) {
    assert.ok(fs.existsSync(path.join(root, control)), `control ${control} is missing`);
    assert.ok(described.has(control), `control ${control} is not explained by the tour`);
  }
});

test('every Markdown file at the room root is described', () => {
  const rootDocs = fs.readdirSync(root).filter((name) => name.endsWith('.md'));
  for (const doc of rootDocs) {
    assert.ok(described.has(doc), `${doc} sits at the room root but the tour never explains it`);
  }
});

test('every place says what it owns and why it is separate', () => {
  for (const place of PLACES) {
    assert.ok(place.owns && place.owns.trim().length > 20, `${place.path} does not say what it owns`);
    assert.ok(place.why && place.why.trim().length > 40, `${place.path} does not say why it is kept apart`);
  }
});

test('the rendered map carries the generation heading and every place', () => {
  const out = render();
  assert.ok(out.includes(`Example Workbench (${LABEL}) - room map`), 'the heading names the generation');
  for (const place of PLACES) {
    assert.ok(out.includes(`  ${place.path}\n`), `the rendered map omits ${place.path}`);
  }
});
