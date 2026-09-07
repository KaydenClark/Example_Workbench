#!/usr/bin/env node
// Example Workbench, v2.0 TASKBOARD generation: the room's one-command demo.
//
// Every entry below names a real path in this room, the truth that file owns,
// and why that truth is kept apart from the others. `tests/tour.test.mjs`
// asserts that each path exists and that every Markdown file at the room root
// is described here, so the map cannot quietly drift from the room.

import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

export const GENERATION = 'v2.0 TASKBOARD, 2026-07-01';
export const ROOM_ROOT = dirname(fileURLToPath(import.meta.url));

// The four copy-ready templates this generation ships in `templates/`.
export const CONTROLS = ['AGENTS.md', 'BLUEPRINT.md', 'TASKBOARD.md', 'RUNBOOK.md'];

export const PLACES = [
  {
    path: 'AGENTS.md',
    owns: 'How agents behave here: authority order, read and edit scope, the work-selection loop, documentation ownership, and proof rules.',
    why: 'The template opens with four questions - what can the agent read, what can it edit, how does it choose work, where is the proof - and this file exists so those answers are found before any code is. Its edit-scope section says of itself that it answers nothing until the paths are filled in: scope is a fence, not a fact about the product, so it is kept apart from the project description.',
  },
  {
    path: 'BLUEPRINT.md',
    owns: 'Stable project identity: what the project is, non-goals, product shape, direction and build order, architecture, invariants, safety boundaries, and preserved decisions.',
    why: 'It is the stable reference, meant to stay factual, source-backed, and short. Direction changes slowly and the queue changes daily, so this generation deleted ROADMAP.md, moved executable next work into TASKBOARD.md, and left only sequencing logic here. Recording a finished task never requires editing the description of the product.',
  },
  {
    path: 'TASKBOARD.md',
    owns: 'The live work queue and proof ledger: current focus, status lanes (ready, in-progress, blocked, deferred, done), and the append-only proof log.',
    why: 'This generation replaced the roadmap with a board. A roadmap said where the project was going; the board says what is ready, claimed, blocked, deferred, or done, and every done item carries a proof row with actual results that is appended and never rewritten. Agents choose their next task here, so the state must be current and separate from strategy.',
  },
  {
    path: 'RUNBOOK.md',
    owns: 'Setup, environment, install, run, test and build, the coverage policy, evaluation procedure, version control, troubleshooting, and recovery.',
    why: 'The template asks for it to be boring, exact, and executable. Commands go stale faster than prose and are cheaper to check, so they get their own file where every block is something that was actually run, and where the verification that gates "done" lives.',
  },
  {
    path: 'README.md',
    owns: 'Orientation for a human: what this room is, its provenance, and the two commands.',
    why: 'Every other file is written for an agent operating under the controls. This generation ships no README template (at this commit, adding one is still an open item on the harness taskboard upstream), so the human door is written by hand: provenance, commands, and which optional templates were left out.',
  },
  {
    path: 'CLAUDE.md',
    owns: 'The Claude Code entry point: one line, `@AGENTS.md`.',
    why: 'The generation README says to add a one-line CLAUDE.md containing @AGENTS.md so the rules load automatically. The rules live once, in AGENTS.md, so Codex, Claude, and any other agent read the same source of truth; the bridge carries nothing of its own that could drift.',
  },
  {
    path: 'tour.mjs',
    owns: 'The one-command demo: the map you are reading.',
    why: 'The product of this room is its own explanation. Printing the map is the demo an owner can check in under a minute without reading code, which is the bar the harness sets for accepting work.',
  },
  {
    path: 'tests/tour.test.mjs',
    owns: 'The proof that the map still matches the room.',
    why: 'Documentation that nothing checks is a promise. This test fails when a named path is missing, when a root Markdown file is undescribed, or when an entry is empty, so the taskboard proof row can name a command rather than a claim.',
  },
];

export function render() {
  const lines = ['', `Example Workbench (${GENERATION}) - room map`, ''];
  for (const place of PLACES) {
    lines.push(place.path, `  owns  ${place.owns}`, `  why   ${place.why}`, '');
  }
  lines.push('Run `node tests/tour.test.mjs` to check this map against the room itself.', '');
  return lines.join('\n');
}

if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  process.stdout.write(render());
}
