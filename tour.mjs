#!/usr/bin/env node
// The room's one-command demo: print the annotated map of this room as the
// first LLM Workbench generation (v0 GAME_PLAN, pre-release, 2026-06-18) had it.
//
// Every entry names a real path in this room and says what truth it owns and
// why that truth is kept apart from the others. `tests/tour.test.mjs` asserts
// that each path exists and that every control this generation prescribes is
// here, so the map cannot quietly drift from the room.

import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';

export const LABEL = 'v0 GAME_PLAN, pre-release, 2026-06-18';
export const ROOM_ROOT = dirname(fileURLToPath(import.meta.url));

// The four controls this generation prescribes. AGENTS names the first three
// as its Working Documents and itself is the file every agent reads first.
export const CONTROLS = ['AGENTS.md', 'BLUEPRINT.md', 'GAME_PLAN.md', 'README.md'];

// path: relative to the room root. owns: the truth kept here. why: the reason
// it is not kept somewhere else, in this generation's own words where it had them.
export const PLACES = [
  {
    path: 'AGENTS.md',
    owns: 'How an agent works here: its role, operating rules, the TDD requirement, code standards, the first-session checklist, and what not to do.',
    why: 'The user owns product direction and the agent owns implementation choices. That split has to be stated before any building starts, so it gets its own file, read before BLUEPRINT and GAME_PLAN.',
  },
  {
    path: 'BLUEPRINT.md',
    owns: 'The stable target: purpose, users, non-goals, MVP, architecture decisions, directory plan, core workflows, data model, and the verification bar.',
    why: 'It is meant to be short enough that a new agent reads it at the start of every session. The target changes slowly, so it is kept apart from the plan, which changes every time a task completes.',
  },
  {
    path: 'GAME_PLAN.md',
    owns: 'The active execution plan: MVP goal, assumptions, ordered phases with acceptance criteria and tasks, deferred work, and current verification commands.',
    why: 'This is the file that must be kept current as tasks complete or priorities change. Mixing it into the Blueprint would make the stable target churn with every ticket.',
  },
  {
    path: 'README.md',
    owns: 'Setup, run, and validation commands once the project exists, plus where this room came from.',
    why: 'This generation shipped no README template and no Runbook; the README is the one door for a person and the only place the exact commands are written down.',
  },
  {
    path: 'tour.mjs',
    owns: 'The product: this map, exported as PLACES and printed on demand.',
    why: 'AGENTS says not to claim the project works until it has been run. A room whose product is its own explanation makes the demo the explanation printing itself.',
  },
  {
    path: 'tests/tour.test.mjs',
    owns: 'The check that keeps the map honest.',
    why: 'TDD is required by AGENTS: every feature starts with a verification target. This test asserts every path here exists and every prescribed control is described, so a stale map fails instead of misleading.',
  },
];

export function render() {
  const lines = ['', `Example Workbench (${LABEL}) - room map`, ''];
  for (const place of PLACES) {
    lines.push(`  ${place.path}`);
    lines.push(`    owns  ${place.owns}`);
    lines.push(`    why   ${place.why}`);
    lines.push('');
  }
  lines.push('  Run `node tests/tour.test.mjs` to check this map against the room itself.');
  return lines.join('\n');
}

if (process.argv[1] && process.argv[1].endsWith('tour.mjs')) {
  process.stdout.write(render() + '\n');
}
