#!/usr/bin/env node
// Example Workbench at harness v3.0.0: print the annotated map of this room.
// Every entry names a real path here, the truth it owns, and why that truth is
// kept apart from the others. `tests/tour.test.mjs` asserts each claim.

import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';

export const GENERATION = 'v3.0.0 portable workbench root, 2026-08-31';
export const ROOM_ROOT = dirname(fileURLToPath(import.meta.url));

// What this generation prescribes for a filled room: the seven root controls
// (GENESIS Phase 7), the mechanical scope file, the first spec, the room brain
// and the feedback channel in their manifest-declared lanes (GENESIS Phase 6).
export const PRESCRIBED = [
  'AGENTS.md', 'BLUEPRINT.md', 'LEXICON.md', 'RUNBOOK.md', 'TASKBOARD.md', 'CLAUDE.md', 'README.md',
  '.claude/settings.json', 'workbench/manifest.json',
  'workbench/specs/S-001-room-explains-itself/SPEC.md',
  'workbench/wiki/MEMORY.md', 'workbench/feedback/WORKBENCH_FEEDBACK.md',
];

export const PLACES = [
  { path: 'AGENTS.md',
    owns: 'How agents work here: authority order, read and edit scope, the selection loop, verification, and Git rules.',
    why: 'It is the only always-loaded file. Product detail, definitions, and commands load on demand from the others, so an agent knows its fences before it reads anything about what to build.' },
  { path: 'BLUEPRINT.md',
    owns: 'The compact product map, cross-cutting architecture and invariants, non-goals, and the generated spec catalog.',
    why: 'Product direction changes slowly and task state changes hourly. The Blueprint helps participants recover the design concept; it is not a PRD, a work queue, or a proof archive.' },
  { path: 'LEXICON.md',
    owns: 'The canonical lookup table for terms whose meaning is shared across the project.',
    why: 'Two agents silently using one word for two things is the cheapest way to make contradictory work. Definitions get one owner; requirements and decisions stay in the Blueprint or the owning spec.' },
  { path: 'RUNBOOK.md',
    owns: 'Setup, run, test, verification, harness-upgrade, troubleshooting, and recovery procedures.',
    why: 'Commands go stale faster than prose and are the easiest thing to check. Kept apart so every line is one that was actually run and seen to pass, not an aspiration.' },
  { path: 'TASKBOARD.md',
    owns: 'The hot projection of active specs only: current slice, owner, blocker, latest event, next gate.',
    why: 'Its generated region is rewritten by render and never hand-edited, so the board cannot disagree with the specs it summarizes. Completed specs disappear from it immediately.' },
  { path: 'README.md',
    owns: 'Human orientation: what the room is, the two commands, and where the controls live.',
    why: 'Every other root file is written for an agent operating under a contract. One door is for people, and it points at the controls instead of restating them.' },
  { path: 'CLAUDE.md',
    owns: 'The Claude Code bridge: exactly `@AGENTS.md`.',
    why: 'One rule set for every agent. A bridge that carried rules of its own would drift from AGENTS.md, so it carries none.' },
  { path: '.claude/settings.json',
    owns: 'The edit scope from AGENTS.md as machine-enforced permissions: deny secrets, allow the writable roots, ask on review-required actions.',
    why: 'AGENTS.md describes the fence in prose, on the honor system. This file is the belt to those suspenders: deny beats allow, so the secret rules hold even under a broad allow glob.' },
  { path: 'workbench/manifest.json',
    owns: 'The declaration of this room: schema version, harness version, genesis provenance, the five lane paths, and the closed 12-skill policy.',
    why: 'This generation introduced the manifest so tools resolve support paths through a declaration instead of assuming them. The layout validator refuses a room whose lanes or skill policy do not match it.' },
  { path: 'workbench/specs',
    owns: 'The specs lane: one stable directory per durable capability record.',
    why: 'A spec is durable and a ticket is temporary. Recording capability truth at a stable path, never moved between status folders, keeps the reason a thing exists after the sprint that made it.' },
  { path: 'workbench/specs/S-001-room-explains-itself/SPEC.md',
    owns: 'This room\'s one capability: requirements, decisions, acceptance, verification, append-only evidence, and the Genesis result.',
    why: 'Detailed requirements and proof would bloat the Blueprint and the Taskboard. They live with the capability and the hot board only projects them.' },
  { path: 'workbench/wiki',
    owns: 'The wiki lane: the room brain and, as the room grows, flat durable notes beside it.',
    why: 'Some knowledge belongs to the room but to no single spec. It is routed from one place rather than copied into several, and it never holds live task state.' },
  { path: 'workbench/wiki/MEMORY.md',
    owns: 'The room brain: the canonical, human-editable router to live controls and durable notes.',
    why: 'A room is not bootstrapped without a brain. A reader starts here and follows the smallest relevant link instead of browsing folders or searching.' },
  { path: 'workbench/grilling',
    owns: 'The grilling lane: live notepads while a decision is still being argued.',
    why: 'A notepad is a working record, never evidence. Giving it a declared lane keeps half-formed reasoning out of specs until an owner promotes it.' },
  { path: 'workbench/handoffs',
    owns: 'The handoffs lane: compactions addressed to the next session or the recovery record of an upgrade.',
    why: 'A handoff is addressed to a session, not to the repository. It is kept apart so cold continuation can use existing owners without a universal handoff artifact.' },
  { path: 'workbench/feedback',
    owns: 'The feedback lane: the return channel to the harness these controls came from.',
    why: 'When a rule is wrong the room needs somewhere to say so that is not the rule itself. Putting it in a lane keeps the root at exactly seven controls.' },
  { path: 'workbench/feedback/WORKBENCH_FEEDBACK.md',
    owns: 'The append-only log of where the v3.0.0 harness itself was unclear, wrong, or slow.',
    why: 'Lessons flow back upstream and are validated against evals before shipping as better. Taste alone never closes the loop; evidence does.' },
  { path: 'tour.mjs',
    owns: 'This room\'s one-command demo: the map you are reading.',
    why: 'Every milestone owes a demo artifact checkable in under a minute. This room\'s product is its own explanation, so the demo is the explanation printing itself.' },
  { path: 'tests/tour.test.mjs',
    owns: 'The check that keeps the map honest.',
    why: 'It asserts every named path exists, every prescribed control and manifest lane is described, and every entry says what it owns and why. Add a lane without describing it and the suite goes red.' },
];

function field(label, text, width = 78) {
  const head = `    ${label.padEnd(6)}`;
  const hang = ' '.repeat(head.length);
  const out = [];
  let line = '';
  for (const word of text.split(/\s+/)) {
    if (line && (hang + line + ' ' + word).length > width) { out.push((out.length ? hang : head) + line); line = word; }
    else line = line ? `${line} ${word}` : word;
  }
  if (line) out.push((out.length ? hang : head) + line);
  return out;
}

export function render() {
  const lines = ['', `Example Workbench (${GENERATION}) - room map`, ''];
  for (const place of PLACES) lines.push(`  ${place.path}`, ...field('owns', place.owns), ...field('why', place.why), '');
  lines.push('  Run `node tests/tour.test.mjs` to check this map against the room itself.', '');
  return lines.join('\n');
}

if (process.argv[1] && process.argv[1].endsWith('tour.mjs')) process.stdout.write(render());
