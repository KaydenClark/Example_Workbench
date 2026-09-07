#!/usr/bin/env node
// Example Workbench, v2.3 room: print the annotated map of this room.
//
// Every entry names a real path here, the truth it keeps, and why that truth
// is not kept somewhere else. `tests/tour.test.mjs` checks the map against the
// directory, so the two cannot quietly disagree.

import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';

export const LABEL = 'v2.3 spec-centered progressive disclosure, 2026-07-16';
export const ROOM_ROOT = dirname(fileURLToPath(import.meta.url));

export const PLACES = [
  { path: 'AGENTS.md',
    owns: 'How agents work here: authority order, read and edit scope, the spec-driven work-selection loop, verification, documentation ownership, safety, and Git rules.',
    why: 'v2.3 made this the only file that always loads. Product detail comes from BLUEPRINT.md only when needed, definitions from LEXICON.md, executable work from one assigned spec, commands from RUNBOOK.md. Normal selection is `next` plus one spec, never the whole board.' },
  { path: 'BLUEPRINT.md',
    owns: 'The compact product map: core promise, pillars, cross-cutting architecture and invariants, non-goals, and the generated spec catalog.',
    why: 'Product direction changes slowly and capability detail belongs in specs, so v2.3 slimmed the Blueprint to a map. The catalog between its markers is rendered from spec metadata by `render`, which is how completed history stays linked without ever being loaded for selection.' },
  { path: 'LEXICON.md',
    owns: 'Accepted project-wide terms, one-sentence definitions, and the distinction that keeps each from its nearest alias.',
    why: 'New at v2.3 and loaded on demand. Two readers using one word for two things is the cheapest way to produce contradictory work, so meanings get one owner that holds no requirements, decisions, or work status.' },
  { path: 'TASKBOARD.md',
    owns: 'The hot projection: active specs only, each as current slice, owner, blocker, latest event and next gate, plus any owner decision blocking one.',
    why: 'v2.3 turned the taskboard from a hand-written queue and proof archive into a projection rendered from spec metadata. Completed specs disappear from it immediately, so startup context stays small and the board cannot disagree with the specs it summarizes.' },
  { path: 'specs',
    owns: 'Every stable capability record, one `S-###-slug/SPEC.md` folder per capability.',
    why: 'The spec tool reads this directory to select, show, claim, close, complete, render, and diagnose work. Keeping capability truth here rather than in the Blueprint or the board is the whole idea of progressive disclosure.' },
  { path: 'specs/S-001-self-explaining-room/SPEC.md',
    owns: 'The durable record for this room\'s one capability: outcome, verified state, decisions, tickets, acceptance, verification, append-only evidence, completion, and supersession.',
    why: 'v2.3 made the spec the unit of work. Its path is stable and never moves between status folders, so a link to it stays true after completion; a ticket inside it is temporary, the capability is not.' },
  { path: 'RUNBOOK.md',
    owns: 'Setup, run, test, full verification, the spec lifecycle commands, evaluation, version control, harness upgrade, troubleshooting, and recovery.',
    why: 'It should be boring, exact, and executable: every command in it was run and seen to pass. At v2.3 it is also where the spec tool commands live, pointing at a checkout of the harness because the tool is not part of the room.' },
  { path: 'README.md',
    owns: 'Orientation for a human: what the product is, how it is run, where the control documents are, and this room\'s provenance line.',
    why: 'Everything else here is written for an agent operating under a contract. One door is for people, and it points at the controls rather than repeating them.' },
  { path: 'HARNESS_FEEDBACK.md',
    owns: 'The append-only return channel to the harness: where its rules were unclear, wrong, missing, or slow.',
    why: 'A project\'s own work goes to specs and the board; a problem with the rules themselves needs a place that is not the rule. Lessons logged here are validated in the harness evals before they ship as better.' },
  { path: 'CLAUDE.md',
    owns: 'The Claude Code bridge: the single line @AGENTS.md.',
    why: 'One rule set, two readers. If this file carried rules of its own they would drift from AGENTS.md, so the README says to make it exactly one line.' },
  { path: '.claude/settings.json',
    owns: 'The mechanical form of the AGENTS.md edit scope: deny secrets, allow the writable roots, ask on git push and destructive commands.',
    why: 'A prose scope is an honor system. This optional file has the tool enforce the boundary instead of trusting the agent to remember it; deny beats allow, so the secret rules hold even under a broad allow glob.' },
  { path: '.claude/README.md',
    owns: 'The mapping from each scope idea in AGENTS.md to a permission bucket.',
    why: 'The permission file is a list of globs. Without this note nobody could tell which prose rule each glob realizes, or that deny wins when two rules overlap.' },
  { path: 'tour.mjs',
    owns: 'This room\'s one-command demo: the map you are reading.',
    why: 'A milestone is not accepted on passing tests alone but on a demo artifact the owner can check in under a minute. This room\'s product is its own explanation, so the demo is the explanation printing itself.' },
  { path: 'tests/tour.test.mjs',
    owns: 'The check that keeps the map honest.',
    why: 'It asserts every named path exists, every Markdown file at the root and every control v2.3 prescribes is described, the generated regions exist, and no placeholder leaked. That is the difference between documentation and a promise.' },
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
  const lines = ['', `Example Workbench (${LABEL}) - room map`, ''];
  for (const place of PLACES) {
    lines.push(`  ${place.path}`, ...field('owns', place.owns), ...field('why', place.why), '');
  }
  lines.push('  Run `node tests/tour.test.mjs` to check this map against the room itself.', '');
  return lines.join('\n');
}

if (process.argv[1] && process.argv[1].endsWith('tour.mjs')) {
  process.stdout.write(render() + '\n');
}
