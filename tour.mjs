#!/usr/bin/env node
// Example Workbench at harness v3.1.0: print the annotated map of this room.
// Every entry names a real path here, the truth it owns, and why that truth is
// kept apart from the others. `tests/tour.test.mjs` asserts each claim and
// that every lane and collection the manifest declares is described.

import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

export const GENERATION = 'v3.1.0 managed runtime and governance core, 2026-09-04';
export const ROOM_ROOT = dirname(fileURLToPath(import.meta.url));
export const PRESCRIBED = ['AGENTS.md', 'BLUEPRINT.md', 'LEXICON.md', 'RUNBOOK.md', 'TASKBOARD.md', 'CLAUDE.md', 'README.md'];

export function readManifest(root = ROOM_ROOT) {
  return JSON.parse(readFileSync(join(root, 'workbench/manifest.json'), 'utf8'));
}

export const PLACES = [
  { path: 'AGENTS.md',
    owns: 'How agents work here: authority order, State Resolution, read and edit scope, the selection loop, verification, Git rules, and session records.',
    why: 'It is the only always-loaded file. This generation put the Governance Core reference here too, so an agent knows which claims instruct and which are only evidence before it reads anything about what to build.' },
  { path: 'BLUEPRINT.md',
    owns: 'The compact product map, cross-cutting architecture and invariants, non-goals, and the generated spec catalog.',
    why: 'Product direction changes slowly and task state changes hourly. The Blueprint helps participants recover the design concept; it is not a PRD, a work queue, or a proof archive.' },
  { path: 'LEXICON.md',
    owns: 'Shared definitions: the Workbench terms, the Governance Core, and this room\'s project terms.',
    why: 'Two agents silently using one word for two things is the cheapest way to make contradictory work. The Governance Core lives here because it defines roles and boundaries, while the binding behavior stays in AGENTS.md.' },
  { path: 'RUNBOOK.md',
    owns: 'Setup, run, test, verification, lifecycle and diagnostics commands, harness-upgrade, troubleshooting, and recovery.',
    why: 'Commands go stale faster than prose and are the easiest thing to check. Kept apart so every line is one that was actually run and seen to pass, not an aspiration.' },
  { path: 'TASKBOARD.md',
    owns: 'The hot projection of active specs only: current slice, owner, blocker, latest event, next gate.',
    why: 'Its generated region is rewritten by render and never hand-edited, so the board cannot disagree with the specs it summarizes. Completed specs disappear from it immediately.' },
  { path: 'README.md',
    owns: 'Human orientation: what the room is, the two commands, and where the controls live.',
    why: 'Every other root file is written for an agent operating under a contract. One door is for people, and it points at the controls instead of restating them.' },
  { path: 'CLAUDE.md',
    owns: 'The Claude Code bridge: exactly `@AGENTS.md`.',
    why: 'One rule set for every agent. A bridge that carried rules of its own would drift from AGENTS.md, so the readiness gate rejects any other content.' },
  { path: 'workbench/manifest.json',
    owns: 'The declaration of this room: schema 2, harness version, genesis provenance with the source commit, six lanes, seven collections, the wiki profile, and the closed 12-skill policy.',
    why: 'Every tool resolves support paths through this declaration instead of assuming them. A room whose lanes, collections, or policy do not match it is refused before any tool reads a spec.' },
  { path: 'workbench/docs', lane: 'docs',
    owns: 'The docs lane: supporting documentation that is neither a root control nor a capability spec.',
    why: 'The root is capped at seven controls on purpose. Material that would bloat one of them lands here instead of being wedged into a file whose job is something else.' },
  { path: 'workbench/docs/adr', collection: 'adr',
    owns: 'Architecture decision records: title, decision, alternatives, consequences, and the control that carries the rule.',
    why: 'An ADR owns rationale, and its rule binds only where `canonicalized_in` points. Keeping the argument apart from the rule means the rule stays in one control and the reasoning survives the code that implemented it.' },
  { path: 'workbench/specs', lane: 'specs',
    owns: 'The specs lane: one stable directory per durable capability record.',
    why: 'A spec is durable and a ticket is temporary. Recording capability truth at a stable path, never moved between status folders, keeps the reason a thing exists after the sprint that made it.' },
  { path: 'workbench/specs/S-001-self-explaining-room/SPEC.md',
    owns: 'This room\'s one capability: requirements, decisions, acceptance, verification, append-only evidence, and the Genesis result.',
    why: 'Detailed requirements and proof would bloat the Blueprint and the Taskboard. They live with the capability and the hot board only projects them.' },
  { path: 'workbench/wiki', lane: 'wiki',
    owns: 'The wiki lane: the room brain, the seeded contract files, and the three declared collections.',
    why: 'Some knowledge belongs to the room but to no single spec. It is routed from one place rather than copied into several, and it never holds live task state.' },
  { path: 'workbench/wiki/MEMORY.md',
    owns: 'The room brain: the canonical, human-editable router to live controls and durable notes.',
    why: 'A room is not bootstrapped without a brain. A reader starts here and follows the smallest relevant link instead of browsing folders or searching.' },
  { path: 'workbench/wiki/SCHEMA.md',
    owns: 'The wiki contract seeded by init: required properties, sensitivity handling, CRUD, stale handling, and links.',
    why: 'This generation shipped the full wiki template set so every room is born with the same note rules. Seeding them from the release means the rules cannot be forgotten or invented per room.' },
  { path: 'workbench/wiki/design-concepts', collection: 'design-concepts',
    owns: 'Owner-directed articles that each explain one durable, cross-cutting design model.',
    why: 'Design intent is the first thing lost when only the implementation is written down. These are commissioned by the owner, never accumulated by agents, and the collection must exist even when empty.' },
  { path: 'workbench/wiki/guidebooks', collection: 'guidebooks',
    owns: 'Ordered procedures that outgrew the Runbook.',
    why: 'A procedure that is useful twice belongs somewhere findable, but the Runbook is reserved for this project\'s own verified commands.' },
  { path: 'workbench/wiki/archive', collection: 'archive',
    owns: 'Superseded, generated, and migration material kept for provenance.',
    why: 'Deleting a wrong note destroys the record that anyone believed it. Archiving keeps the trail without leaving the mistake in the live brain, and it is the only collection allowed to nest.' },
  { path: 'workbench/sessions', lane: 'sessions',
    owns: 'The sessions lane: live notepads, handoffs, and promoted checkpoints, with a `.gitignore` that keeps the first two untracked.',
    why: 'Most session text is scratch and some of it must never be committed. This lane exists so that durability is a deliberate act rather than the default.' },
  { path: 'workbench/sessions/grilling', collection: 'grilling',
    owns: 'Live interview notepads while a decision is still being argued. Untracked.',
    why: 'A notepad is a working record, never evidence. Keeping it out of version control stops half-formed reasoning from being cited as a settled decision.' },
  { path: 'workbench/sessions/handoffs', collection: 'handoffs',
    owns: 'Compactions written so another context can continue the work. Untracked.',
    why: 'A handoff is addressed to the next session, not to the repository. It goes stale within hours, so committing it would publish something wrong by the time anyone reads it.' },
  { path: 'workbench/sessions/checkpoints', collection: 'checkpoints',
    owns: 'The one durable session collection: records promoted deliberately after a privacy check.',
    why: 'Promotion refuses secret-like content, absolute home paths, and email addresses, and names the offending line instead of writing a redacted copy. That gate is why session records are safe to have at all.' },
  { path: 'workbench/feedback', lane: 'feedback',
    owns: 'The feedback lane: the return channel to the harness these controls came from.',
    why: 'When a rule is wrong the room needs somewhere to say so that is not the rule itself. Putting it in a lane keeps the root at exactly seven controls.' },
  { path: 'workbench/feedback/WORKBENCH_FEEDBACK.md',
    owns: 'The append-only log of where the v3.1.0 harness itself was unclear, wrong, or slow.',
    why: 'Lessons flow back upstream and are validated against evals before shipping as better. Taste alone never closes the loop; evidence does.' },
  { path: 'workbench/tools', lane: 'tools',
    owns: 'The managed runtime: eleven tools copied from the release, run as the room\'s own `node workbench/tools/...` commands.',
    why: 'This generation made the room run its own copies so it is not coupled to a harness checkout elsewhere on disk. The lane changes only through an explicit update with backup and rollback, never by hand; an application\'s root `tools/` is never touched.' },
  { path: 'workbench/tools/.workbench-tools.json',
    owns: 'The receipt: source repository, release, commit, install date, and a SHA-256 per managed file.',
    why: 'The receipt is what makes an upgrade checkable instead of hopeful. `verify` reports drift by file name, and the readiness gate refuses a lane whose receipt names a release other than the manifest\'s.' },
  { path: 'tour.mjs',
    owns: 'This room\'s one-command demo: the map you are reading.',
    why: 'Every milestone owes a demo artifact checkable in under a minute. This room\'s product is its own explanation, so the demo is the explanation printing itself.' },
  { path: 'tests/tour.test.mjs',
    owns: 'The check that keeps the map honest.',
    why: 'It asserts every named path exists, every root control and manifest lane and collection is described, and every entry says what it owns and why. Add a lane without describing it and the suite goes red.' },
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
  const lines = [`Example Workbench (${GENERATION}) - room map`, ''];
  for (const place of PLACES) {
    const tag = place.lane ? `  [lane: ${place.lane}]` : place.collection ? `  [collection: ${place.collection}]` : '';
    lines.push(`  ${place.path}${tag}`, ...field('owns', place.owns), ...field('why', place.why), '');
  }
  lines.push('  Run `node tests/tour.test.mjs` to check this map against the room itself.');
  return lines.join('\n');
}

if (process.argv[1] && process.argv[1].endsWith('tour.mjs')) process.stdout.write(`${render()}\n`);
