#!/usr/bin/env node
// Keeps the tour honest: each claim `tour.mjs` makes about this room's layout
// becomes something that can fail.

import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import test from 'node:test';
import { fileURLToPath } from 'node:url';

import { GENERATION, PLACES, ROOM_ROOT, render } from '../tour.mjs';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const manifest = JSON.parse(fs.readFileSync(path.join(root, 'workbench/manifest.json'), 'utf8'));
const described = new Set(PLACES.map((place) => place.path));
const CONTROLS = ['AGENTS.md', 'BLUEPRINT.md', 'LEXICON.md', 'RUNBOOK.md', 'TASKBOARD.md', 'CLAUDE.md', 'README.md'];

test('the tour describes the room it ships inside', () => {
  assert.equal(ROOM_ROOT, root);
  assert.equal(described.size, PLACES.length, 'a path is described twice');
});

test('every place the tour names exists in this room', () => {
  for (const place of PLACES) {
    assert.ok(fs.existsSync(path.join(root, place.path)), `the tour names ${place.path}, which does not exist`);
  }
});

test('every place says what it owns and why it is kept apart', () => {
  for (const place of PLACES) {
    assert.ok(place.owns && place.owns.trim().length > 20, `${place.path} does not say what it owns`);
    assert.ok(place.why && place.why.trim().length > 40, `${place.path} does not say why it is kept apart`);
  }
});

test('the seven root controls and every root markdown file are described', () => {
  for (const control of CONTROLS) {
    assert.ok(fs.existsSync(path.join(root, control)), `root control ${control} is missing`);
    assert.ok(described.has(control), `root control ${control} is not described by the tour`);
  }
  for (const name of fs.readdirSync(root).filter((entry) => entry.endsWith('.md'))) {
    assert.ok(described.has(name), `${name} sits at the room root but the tour never describes it`);
  }
  assert.equal(fs.readFileSync(path.join(root, 'CLAUDE.md'), 'utf8').trim(), '@AGENTS.md');
});

test('every lane and collection the manifest declares is described', () => {
  for (const [name, lanePath] of [...Object.entries(manifest.lanes), ...Object.entries(manifest.collections)]) {
    assert.ok(described.has(lanePath), `the manifest declares ${name} at ${lanePath}, which the tour never describes`);
  }
});

test('the installed runtime carries a receipt naming the manifest version', () => {
  const receipt = JSON.parse(fs.readFileSync(path.join(root, manifest.lanes.tools, '.workbench-tools.json'), 'utf8'));
  assert.equal(receipt.source.release, manifest.workbenchVersion);
  assert.equal(receipt.source.commit, manifest.provenance.source.commit);
});

test('the map prints under the generation heading', () => {
  const [heading] = render().split('\n');
  assert.equal(heading, `Example Workbench (${GENERATION}) - room map`);
  assert.ok(!GENERATION.includes('('), 'the label contains no parentheses');
});
