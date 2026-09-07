#!/usr/bin/env node
// Keeps the tour honest: each claim the map makes about this room can fail here.

import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import test from 'node:test';
import { fileURLToPath } from 'node:url';

import { CONTROLS, GENERATION, PLACES, ROOM_ROOT, render } from '../tour.mjs';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const described = new Set(PLACES.map((place) => place.path));
const rootMarkdown = fs.readdirSync(root).filter((name) => name.endsWith('.md'));

test('the tour describes the room it ships inside', () => {
  assert.equal(ROOM_ROOT, root);
});

test('every place the tour names exists in this room', () => {
  for (const place of PLACES) {
    assert.ok(fs.existsSync(path.join(root, place.path)), `the tour names ${place.path}, which does not exist`);
  }
});

test('every Markdown file at the room root is described', () => {
  for (const name of rootMarkdown) {
    assert.ok(described.has(name), `${name} sits at the room root but the tour never explains it`);
  }
});

test('every control this generation prescribes is present and described', () => {
  for (const control of [...CONTROLS, 'README.md', 'CLAUDE.md']) {
    assert.ok(fs.existsSync(path.join(root, control)), `control ${control} is missing`);
    assert.ok(described.has(control), `control ${control} is not explained by the tour`);
  }
});

test('every place says what it owns and why it is kept apart', () => {
  for (const place of PLACES) {
    assert.ok(place.owns && place.owns.trim().length > 20, `${place.path} does not say what it owns`);
    assert.ok(place.why && place.why.trim().length > 40, `${place.path} does not say why it is separate`);
  }
});

test('the Claude bridge is the one line the generation README prescribes', () => {
  assert.equal(fs.readFileSync(path.join(root, 'CLAUDE.md'), 'utf8').trim(), '@AGENTS.md');
});

test('no template placeholder leaked into the filled controls', () => {
  for (const name of rootMarkdown) {
    const text = fs.readFileSync(path.join(root, name), 'utf8');
    const leaks = [...text.matchAll(/\[[A-Z][A-Z0-9_ -]+\](?!\()/g)].map((m) => m[0]);
    assert.deepEqual(leaks, [], `${name} still holds template placeholders: ${leaks.join(', ')}`);
  }
});

test('the map prints under the generation heading and names every place', () => {
  const output = render();
  assert.ok(output.includes(`Example Workbench (${GENERATION}) - room map`), 'heading is missing');
  for (const place of PLACES) {
    assert.ok(output.includes(`\n${place.path}\n`), `${place.path} is not printed`);
  }
});
