#!/usr/bin/env node
// Example Workbench, v2.1 room: print the annotated map of this room.
//
// Every entry names a real path here, the truth it keeps, and why that truth
// is not kept somewhere else. `tests/tour.test.mjs` checks the map against the
// directory, so the two cannot quietly disagree.

import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';

export const GENERATION = 'v2.1, 2026-07-06';
export const ROOM_ROOT = dirname(fileURLToPath(import.meta.url));

export const PLACES = [
  {
    path: 'AGENTS.md',
    owns: 'How agents behave here: authority order, read and edit scope, the work-selection loop, documentation ownership, verification and proof rules, and the branch and PR flow.',
    why: 'The template says it must answer four questions quickly: what can the agent read, what can it edit, how does it choose work, where is the proof. It has to be true before any other file is opened, and at v2.1 it is also the only place the edit scope is written in prose.',
  },
  {
    path: 'BLUEPRINT.md',
    owns: 'What the project is: identity, core promise, non-goals, architecture, invariants, safety boundaries, and preserved design decisions.',
    why: 'Stable and source-backed. v2.1 retired ROADMAP.md and split its job: direction and build order live here because they change slowly, while the executable queue lives in TASKBOARD.md because it changes every session.',
  },
  {
    path: 'TASKBOARD.md',
    owns: 'The live work queue and append-only proof log, plus the executive interface: a five-line Executive Brief and a Pending Decisions queue.',
    why: 'It is the one hand-written status document, and v2.1 added the owner interface to it so the person who never reads code gets one glance at where the project stands and the decisions only they can make, each with options, a recommendation, and a cost.',
  },
  {
    path: 'RUNBOOK.md',
    owns: 'Setup, run, test, verification, evaluation, version control, harness upgrade, troubleshooting, and recovery.',
    why: 'It should be boring, exact, and executable: every command in it is one that was run and seen to pass, so it is kept apart from prose that only describes. It is also where v2.1 pins the integration-branch rule: PRs target integration, and only the owner merges integration into main.',
  },
  {
    path: 'README.md',
    owns: 'Orientation for a human: what the product is, how it is run, where the controls are, and this room\'s provenance line.',
    why: 'v2.1 is the first generation to ship a product README template, because the workbench\'s own README was being copied by mistake. Its job is to point readers at the four control docs, not to repeat them.',
  },
  {
    path: 'HARNESS_FEEDBACK.md',
    owns: 'The append-only return channel to the harness: where its rules were unclear, wrong, missing, or slow.',
    why: 'A project\'s own bugs go in TASKBOARD.md; a problem with the rules themselves needs somewhere that is not the rule. v2.1 introduced this file so lessons flow back upstream and are validated in evals before shipping as better.',
  },
  {
    path: 'CLAUDE.md',
    owns: 'The Claude Code bridge: the single line @AGENTS.md.',
    why: 'One rule set, two readers. If this file carried rules of its own they would drift from AGENTS.md, so the v2.1 README says to make it exactly one line.',
  },
  {
    path: '.claude/settings.json',
    owns: 'The mechanical form of the AGENTS.md edit scope: deny secrets, allow the writable roots, ask on git push and destructive commands.',
    why: 'A prose scope is an honor system. v2.1 added this optional file so the boundary is enforced by the tool rather than remembered by the agent; it is the belt to that suspenders.',
  },
  {
    path: '.claude/README.md',
    owns: 'The mapping from each scope idea in AGENTS.md to a permission bucket.',
    why: 'The permission file is a list of globs. Without this note nobody could tell which prose rule each glob realizes, or that deny beats allow when the two overlap.',
  },
  {
    path: 'tour.mjs',
    owns: 'This room\'s one-command demo: the map you are reading.',
    why: 'v2.1 made the demo artifact an acceptance rule: a milestone is not accepted on passing tests alone but on something the owner can check in under a minute. This room\'s product is its own explanation, so the demo is the explanation printing itself.',
  },
  {
    path: 'tests/tour.test.mjs',
    owns: 'The check that keeps the map honest.',
    why: 'It asserts every named path exists, every Markdown file at the root and every control v2.1 prescribes is described, and no template placeholder leaked. That is the difference between documentation and a promise.',
  },
];

// A labelled paragraph with a hanging indent, so continuation lines line up.
function field(label, text, width = 78) {
  const head = `    ${label.padEnd(6)}`;
  const hang = ' '.repeat(head.length);
  const out = [];
  let line = '';
  for (const word of text.split(/\s+/)) {
    if (line && (hang + line + ' ' + word).length > width) {
      out.push((out.length ? hang : head) + line);
      line = word;
    } else {
      line = line ? `${line} ${word}` : word;
    }
  }
  if (line) out.push((out.length ? hang : head) + line);
  return out;
}

export function render() {
  const lines = ['', `Example Workbench (${GENERATION}) - room map`, ''];
  for (const place of PLACES) {
    lines.push(`  ${place.path}`, ...field('owns', place.owns), ...field('why', place.why), '');
  }
  lines.push('  Run `node tests/tour.test.mjs` to check this map against the room itself.', '');
  return lines.join('\n');
}

if (process.argv[1] && process.argv[1].endsWith('tour.mjs')) {
  process.stdout.write(render() + '\n');
}
