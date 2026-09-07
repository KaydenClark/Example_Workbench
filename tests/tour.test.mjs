#!/usr/bin/env node
// Keeps the tour honest: each claim the map makes becomes something that can fail.

import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import test from 'node:test';
import { fileURLToPath } from 'node:url';

import { GENERATION, PLACES, PRESCRIBED, ROOM_ROOT, readManifest, render } from '../tour.mjs';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const manifest = readManifest(root);
const described = new Set(PLACES.map((place) => place.path));

test('the tour and the room agree on where the room is', () => {
  assert.equal(ROOM_ROOT, root, 'the tour must describe the room it ships inside');
});

test('every place the tour names exists in this room', () => {
  for (const place of PLACES) {
    assert.ok(fs.existsSync(path.join(root, place.path)), `the tour names ${place.path}, which does not exist`);
  }
});

test('every Markdown document at the room root is described', () => {
  for (const name of fs.readdirSync(root).filter((entry) => entry.endsWith('.md'))) {
    assert.ok(described.has(name), `${name} sits at the room root but the tour never explains it`);
  }
});

test('every control this generation prescribes is present and described', () => {
  for (const control of PRESCRIBED) {
    assert.ok(fs.existsSync(path.join(root, control)), `prescribed control ${control} is missing`);
    assert.ok(described.has(control), `prescribed control ${control} is not explained by the tour`);
  }
});

test('every lane and collection the manifest declares is described and labelled', () => {
  for (const [kind, entries] of [['lane', manifest.lanes], ['collection', manifest.collections]]) {
    for (const [name, target] of Object.entries(entries)) {
      const place = PLACES.find((entry) => entry.path === target);
      assert.ok(place, `the manifest declares ${kind} "${name}" at ${target}, which the tour never explains`);
      assert.equal(place[kind], name, `${target} is ${kind} "${name}" but the tour labels it ${JSON.stringify(place[kind])}`);
    }
  }
});

test('every place says what it owns and why it is kept apart', () => {
  for (const place of PLACES) {
    assert.ok(place.owns && place.owns.trim().length > 20, `${place.path} does not say what it owns`);
    assert.ok(place.why && place.why.trim().length > 40, `${place.path} does not say why it is separate`);
    assert.notEqual(place.owns.trim(), place.why.trim(), `${place.path} repeats its owns as its why`);
  }
});

test('the Claude bridge carries no rules of its own', () => {
  assert.equal(fs.readFileSync(path.join(root, 'CLAUDE.md'), 'utf8').trim(), '@AGENTS.md');
});

test('the installed runtime carries a receipt naming the manifest release', () => {
  const receipt = JSON.parse(fs.readFileSync(path.join(root, manifest.lanes.tools, '.workbench-tools.json'), 'utf8'));
  assert.equal(receipt.source.release, manifest.workbenchVersion, 'the receipt and the manifest name different releases');
  assert.equal(receipt.source.commit, manifest.provenance.source.commit, 'the receipt and the manifest name different commits');
});

test('the rendered map carries the generation heading and every place', () => {
  const out = render();
  assert.ok(out.includes(`Example Workbench (${GENERATION}) - room map`), 'heading missing from rendered map');
  for (const place of PLACES) assert.ok(out.includes(`  ${place.path}`), `${place.path} missing from rendered map`);
});
