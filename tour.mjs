#!/usr/bin/env node
// The one-command demo of this room: print the map of every control file it
// has at the v1.1 generation, saying what truth each one owns and why that
// truth is kept apart from the others. `tests/tour.test.mjs` checks every
// claim here against the room, so the map cannot quietly drift from it.

import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

export const GENERATION = 'v1.1 anti-drift and version control, 2026-06-25';
export const HEADING = `Example Workbench (${GENERATION}) - room map`;
export const ROOM_ROOT = dirname(fileURLToPath(import.meta.url));

// The seven controls the v1.1 templates and README prescribe for a filled room.
export const CONTROLS = ['AGENTS.md', 'BLUEPRINT.md', 'ROADMAP.md', 'RUNBOOK.md', 'VISUAL_DESIGN.md', 'README.md', 'CLAUDE.md'];

export const PLACES = [
  {
    path: 'AGENTS.md',
    owns: 'How agents behave here: what they may read, what they may edit, what their job is, and where the proof of done lives.',
    why: 'It ranks second only to the current user request, above code and every other doc, so an agent knows its fences before it reads anything about the product. At this generation it also carries the anti-drift protocol (re-read ROADMAP after any context summary) and the rule to stop after the same change fails verification twice instead of looping.',
  },
  {
    path: 'BLUEPRINT.md',
    owns: 'The stable reference for what the project is: purpose, non-goals, architecture, invariants, safety boundaries, and preserved decisions.',
    why: 'Identity changes far more slowly than the work plan, so it is kept out of ROADMAP. Its own rule is to delete a section rather than leave a placeholder, because a placeholder looks like data and is not.',
  },
  {
    path: 'ROADMAP.md',
    owns: 'The active work plan: current state, current goal, the Next Tasks checklist, blockers, backlog, and the append-only Verification Log.',
    why: 'It is the durable ledger that survives a context summary: a box is ticked only once its proof exists, and the agent trusts the checklist over memory. The log is append-only and re-read immediately before every append, because a shared file written by two agents at once is itself an overlap.',
  },
  {
    path: 'RUNBOOK.md',
    owns: 'How to operate the project: prerequisites, run, test, build, version control, troubleshooting, and recovery.',
    why: 'Procedures must be boring, exact, and executable, so they are kept apart from intent and plans. The Version Control section, new at this generation, puts branch, commit, and PR conventions and the never-commit list where an agent looks for commands rather than in the behavior contract.',
  },
  {
    path: 'VISUAL_DESIGN.md',
    owns: 'The default dark-mode palette, its accessibility rules, and the no-emoji-as-icons rule for any visual surface.',
    why: 'It is a reusable default that ranks below project brand docs in its own authority order, so it lives apart from the project-specific controls. This room prints plain terminal text, so it is marked dormant in place rather than deleted, and its rule that state is never encoded by color alone still binds the tour.',
  },
  {
    path: 'README.md',
    owns: 'Orientation for a human: what this room is, its provenance line, the two commands, and which templates were and were not copied.',
    why: 'Every other file here is written for an agent operating under a contract. One door is for people, and it is the last authority in the order so nothing in it can override a control.',
  },
  {
    path: 'CLAUDE.md',
    owns: 'The Claude Code bridge: exactly the line @AGENTS.md, an import.',
    why: 'Claude Code reads CLAUDE.md rather than AGENTS.md by default. A one-line import gives it the same rules as every other agent without a second copy that could drift.',
  },
  {
    path: 'tour.mjs',
    owns: 'This room\'s product: the PLACES table and the printed map you are reading.',
    why: 'Every completed task owes a demo artifact checkable in under a minute. This room\'s product is its own explanation, so the demo is the explanation printing itself.',
  },
  {
    path: 'tests/tour.test.mjs',
    owns: 'The proof that the map matches the room.',
    why: 'It asserts every named path exists, every root Markdown file and every prescribed control is described, every entry says what it owns and why, and no template placeholder survived. Add a control without describing it and the run goes red.',
  },
];

function wrap(label, text, width = 78) {
  const head = `  ${label.padEnd(5)}`;
  const hang = ' '.repeat(head.length);
  const lines = [];
  let line = '';
  for (const word of text.split(/\s+/)) {
    if (line && (hang + line + ' ' + word).length > width) {
      lines.push((lines.length ? hang : head) + line);
      line = word;
    } else {
      line = line ? `${line} ${word}` : word;
    }
  }
  if (line) lines.push((lines.length ? hang : head) + line);
  return lines;
}

export function render() {
  const out = ['', HEADING, ''];
  for (const place of PLACES) {
    out.push(place.path, ...wrap('owns', place.owns), ...wrap('why', place.why), '');
  }
  out.push('Run `node tests/tour.test.mjs` to check this map against the room itself.');
  return out.join('\n');
}

if (process.argv[1] && process.argv[1].endsWith('tour.mjs')) {
  process.stdout.write(render() + '\n');
}
