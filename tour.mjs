#!/usr/bin/env node
// The one-command demo of this historical room: print the annotated map.
//
// At LLM Workbench v1 (2026-06-22) the harness was five Markdown templates at
// the repository root and nothing else: no manifest, no support root, no
// tools, no specs. Every entry below names a real file in this room and says
// what truth it owns and why that truth is kept apart from the others, in the
// words of that generation's own templates and README.

import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';

export const ROOM_ROOT = dirname(fileURLToPath(import.meta.url));
export const GENERATION = 'v1 ROADMAP, first public release, 2026-06-22';

export const PLACES = [
  {
    path: 'AGENTS.md',
    owns: 'Agent behavior: authority order, read and edit scope, the agent job, TDD rules, documentation ownership, and proof-of-done requirements.',
    why: 'The template says this file must answer four questions quickly: what the agent can read, what it can edit, what its job is, and where the proof is. Everything an agent needs before touching code sits in one file, so no task starts on chat history or one-off instructions.',
  },
  {
    path: 'BLUEPRINT.md',
    owns: 'Stable project identity: what the project is, non-goals, product shape, architecture, invariants, and safety boundaries.',
    why: 'It is the reference for what the project is, kept factual, source-backed and short. It changes far more slowly than the work plan, and the template insists that a section with no real content is deleted rather than left as a placeholder, because a placeholder looks like data and is not.',
  },
  {
    path: 'ROADMAP.md',
    owns: 'Current state, current goal, next tasks, blockers, backlog, and the append-only Verification Log.',
    why: 'This is the active work plan and the only required durable write: every task that changes state appends one row of proof here. It is forward-looking on purpose and is not a dumping ground for old session history.',
  },
  {
    path: 'RUNBOOK.md',
    owns: 'Setup, run, test, build, troubleshooting, and recovery commands.',
    why: 'It explains how to operate the project and is meant to be boring, exact and executable. Commands go stale fastest and are the easiest thing to check, so they live apart from the prose that would hide a broken one.',
  },
  {
    path: 'VISUAL_DESIGN.md',
    owns: 'Shared visual standards: the default palette, dark-mode usage, and the rule against emoji as icons.',
    why: 'It is a reusable default for any UI surface, ranked below project-specific brand requirements in its own authority order. This room prints to a terminal, so it records that adaptation in place instead of pretending to need a palette.',
  },
  {
    path: 'README.md',
    owns: 'Orientation for a person: what this room is, its provenance, and the two commands.',
    why: 'The v1 workbench README described the harness itself and told users to copy the templates and replace the brackets. A filled room needs its own front door, written for the human who opens the folder, not a copy of the workbench description.',
  },
  {
    path: 'tour.mjs',
    owns: 'This room map: the product of the room.',
    why: 'The room exists to explain itself. Printing the map is the smallest demo that proves the controls describe a real project rather than a template.',
  },
  {
    path: 'tests/tour.test.mjs',
    owns: 'The check that the map matches the room.',
    why: 'Every path named here must exist, every control this generation prescribes must be described, and every description must say something. Without the test the map is a claim; with it the map is a promise that fails visibly when broken.',
  },
];

// A labelled paragraph with a hanging indent so wrapped lines sit under the text.
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
  lines.push('  Five control files at the root, one product file, one test. No manifest,');
  lines.push('  no support root, no tools: at v1 the harness was the templates themselves.');
  lines.push('');
  for (const place of PLACES) {
    lines.push(`  ${place.path}`);
    lines.push(...field('owns', place.owns));
    lines.push(...field('why', place.why));
    lines.push('');
  }
  lines.push('  Run `node tests/tour.test.mjs` to check this map against the room itself.');
  return lines.join('\n');
}

if (process.argv[1] && process.argv[1].endsWith('tour.mjs')) {
  process.stdout.write(render() + '\n');
}
