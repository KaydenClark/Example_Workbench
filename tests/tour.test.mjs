#!/usr/bin/env node
// Keeps the tour honest. The tour is documentation that claims things about
// this room's layout; these cases turn each claim into something that can fail.

import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import test from 'node:test';
import { fileURLToPath } from 'node:url';

import { PLACES, ROOM_ROOT, ROUTE, lifecycle, readManifest } from '../tour.mjs';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const manifest = readManifest(root);
const described = new Set(PLACES.map((place) => place.path));

test('the tour and the room agree on where the room is', () => {
  assert.equal(ROOM_ROOT, root, 'the tour must describe the room it ships inside');
});

test('every place the tour names exists in this room', () => {
  for (const place of PLACES) {
    const target = path.join(root, place.path);
    assert.ok(fs.existsSync(target), `the tour names ${place.path}, which does not exist`);
  }
});

test('every place says what it owns and why it is separate', () => {
  for (const place of PLACES) {
    assert.ok(place.owns && place.owns.trim().length > 20, `${place.path} does not say what it owns`);
    assert.ok(place.why && place.why.trim().length > 40, `${place.path} does not say why it is kept apart`);
    assert.ok(['Root controls', 'The support root', 'The product'].includes(place.zone),
      `${place.path} sits in no known zone`);
  }
});

test('every lane the manifest declares is explained', () => {
  for (const [lane, lanePath] of Object.entries(manifest.lanes)) {
    assert.ok(described.has(lanePath), `the manifest declares lane "${lane}" at ${lanePath}, which the tour never explains`);
    const entry = PLACES.find((place) => place.path === lanePath);
    assert.equal(entry.lane, lane, `${lanePath} is lane "${lane}" but the tour labels it ${JSON.stringify(entry.lane)}`);
  }
});

test('every collection the manifest declares is explained', () => {
  for (const [collection, collectionPath] of Object.entries(manifest.collections)) {
    assert.ok(described.has(collectionPath),
      `the manifest declares collection "${collection}" at ${collectionPath}, which the tour never explains`);
    const entry = PLACES.find((place) => place.path === collectionPath);
    assert.equal(entry.collection, collection,
      `${collectionPath} is collection "${collection}" but the tour labels it ${JSON.stringify(entry.collection)}`);
  }
});

test('the seven root controls are present and all seven are explained', () => {
  const controls = ['AGENTS.md', 'BLUEPRINT.md', 'LEXICON.md', 'RUNBOOK.md', 'TASKBOARD.md', 'CLAUDE.md', 'README.md'];
  for (const control of controls) {
    assert.ok(fs.existsSync(path.join(root, control)), `root control ${control} is missing`);
    assert.ok(described.has(control), `root control ${control} is not explained by the tour`);
  }
  const rootZone = PLACES.filter((place) => place.zone === 'Root controls').map((place) => place.path).sort();
  assert.deepEqual(rootZone, [...controls].sort(),
    'the root-controls zone must be exactly the seven controls — no more, no fewer');
});

test('the Claude bridge carries no rules of its own', () => {
  assert.equal(fs.readFileSync(path.join(root, 'CLAUDE.md'), 'utf8').trim(), '@AGENTS.md');
});

test('the installed runtime carries a receipt matching the manifest', () => {
  const receiptPath = path.join(root, manifest.lanes.tools, '.workbench-tools.json');
  assert.ok(fs.existsSync(receiptPath), 'the tools lane has no receipt, so its provenance is unprovable');
  const receipt = JSON.parse(fs.readFileSync(receiptPath, 'utf8'));
  assert.equal(receipt.source.release, manifest.workbenchVersion,
    'the receipt names a different release than the manifest, so the room does not know what it is running');
});

test('the tools lane holds only what the receipt accounts for', () => {
  // This is the check that bites a real room during an upgrade: an unmanaged
  // file in the tools lane makes `next` and `claim` refuse with exit 1.
  const lane = path.join(root, manifest.lanes.tools);
  const receipt = JSON.parse(fs.readFileSync(path.join(lane, '.workbench-tools.json'), 'utf8'));
  const allowed = new Set([...Object.keys(receipt.files), '.workbench-tools.json', '.gitkeep']);
  const unmanaged = fs.readdirSync(lane).filter((name) => !allowed.has(name));
  assert.deepEqual(unmanaged, [],
    `the tools lane holds ${unmanaged.join(', ')}, which the managed runtime does not ship; move it out before upgrading`);
});

test('the lifecycle account is read from the room, not written by hand', () => {
  const l = lifecycle(root);
  const receipt = JSON.parse(fs.readFileSync(path.join(root, manifest.lanes.tools, '.workbench-tools.json'), 'utf8'));
  assert.equal(l.how, manifest.provenance.lifecycle);
  assert.deepEqual(l.source, manifest.provenance.source);
  assert.equal(l.stamped, manifest.workbenchVersion);
  assert.equal(l.attests.release, receipt.source.release);
  assert.equal(l.attests.commit, receipt.source.commit);
  assert.equal(l.attests.files, Object.keys(receipt.files).length);
});

test('the room records a full source commit, not a placeholder', () => {
  const { source } = manifest.provenance;
  assert.match(source.commit, /^[0-9a-f]{40}$/, 'provenance must carry a full 40-character commit');
  assert.match(source.release, /^v\d+\.\d+\.\d+$/);
  assert.ok(!['unrecorded', 'unknown'].includes(source.release), 'a placeholder release is never a provenance');
});

test('every step of the stated upgrade route names a real tool in this room', () => {
  // The route is the one piece of the tour that is prose rather than read from
  // the room. This case stops it naming a tool the room does not carry.
  const lane = path.join(root, manifest.lanes.tools);
  const present = new Set(fs.readdirSync(lane));
  const named = new Set();
  for (const step of ROUTE) {
    assert.ok(step.step && step.detail, 'every route step needs a name and a detail');
    for (const m of step.detail.matchAll(/([a-z-]+\.mjs)/g)) named.add(m[1]);
  }
  assert.ok(named.has('workbench-layout.mjs'), 'the route must name the tool that records provenance');
  assert.ok(present.has('workbench-layout.mjs'), 'workbench-layout.mjs is not installed in this room');
  // workbench-tools.mjs ships in the release, not the room; assert we do not
  // claim it is here.
  assert.ok(!present.has('workbench-tools.mjs'),
    'workbench-tools.mjs is a release tool, not a room tool; if it appears here the route text is wrong');
});

test('the v3.2 tour describes live notepads, recovery and frozen checkpoint history', () => {
  for (const name of ['notepads', 'notepad-templates', 'recovery']) {
    assert.ok(PLACES.some(place => place.collection === name), `${name} must be explained to a reader`);
  }
  const historical = PLACES.find(place => place.collection === 'checkpoints');
  assert.match(historical.owns, /frozen|historical/i);
  assert.doesNotMatch(historical.owns, /records promoted deliberately/i);
});

test('the v3.2 room has a stable identity distinct from its artifact identifiers', () => {
  assert.equal(manifest.workbenchVersion, 'v3.2.0');
  assert.match(manifest.workbenchId, /^WB-[0-9A-Za-z]{22}$/);
  assert.ok(manifest.collections['notepad-templates'].startsWith(manifest.collections.notepads + '/'));
});

test('the maintenance route preserves historical provenance and names a backup home', () => {
  assert.ok(ROUTE.some(step => /preserve historical/i.test(step.step)));
  assert.ok(ROUTE.some(step => /workbench-tools\.mjs update/.test(step.detail) && /--home/.test(step.detail)));
  assert.ok(ROUTE.some(step => /workbench-layout\.mjs migrate/.test(step.detail)));
  assert.ok(ROUTE.every(step => !/sets `provenance\.source`/.test(step.detail)));
});
