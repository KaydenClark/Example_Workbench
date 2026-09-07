#!/usr/bin/env node
// Example Workbench at harness v3.1.1: print the annotated map of this room.
// Every entry names a real path here, the truth it owns, and why that truth is
// kept apart from the others. `tests/tour.test.mjs` asserts each claim.

import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';

export const GENERATION = 'v3.1.1 boundaries and portable stances, 2026-09-04';
export const ROOM_ROOT = dirname(fileURLToPath(import.meta.url));

export const PLACES = [
  { path: 'AGENTS.md',
    owns: 'How agents work here: authority order, the reduced entry route, read and edit scope, stances, verification, Git rules, and branch completion.',
    why: 'It is the only always-loaded file. This generation cut the entry route to AGENTS -> RUNBOOK -> LEXICON so an agent knows its fences and its assigned stance before it reads anything about what to build.' },
  { path: 'BLUEPRINT.md',
    owns: 'The compact product map, cross-cutting architecture and invariants, non-goals, the generated spec catalog, and the entry and delivery boundaries.',
    why: 'Product direction changes slowly and task state changes hourly. The Blueprint helps participants recover the design concept; it loads for architecture, not for default orientation.' },
  { path: 'LEXICON.md',
    owns: 'The canonical lookup table for shared terms, the task-routing section, the Stance Terms, and the Governance Core.',
    why: 'Two agents silently using one word for two things is the cheapest way to make contradictory work. Builder, Auditor, Reviewer and Reconciler are defined once here so a ticket can name one without re-explaining it.' },
  { path: 'RUNBOOK.md',
    owns: 'Ordinary entry, setup, run, test, verification, the worktree-safe closeout, harness upgrade, feedback-report procedure, troubleshooting, and recovery.',
    why: 'Commands go stale faster than prose and are the easiest thing to check. Kept apart so every line is one that was actually run and seen to pass, including the fail-fast merge and cleanup block.' },
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
    owns: 'The declaration of this room: schema 2, harness version, genesis provenance with its source commit, six lanes, seven collections, the wiki profile, and the closed 16-skill policy including the four stances.',
    why: 'Tools resolve support paths through a declaration instead of assuming them. The validator refuses a room whose lanes or skill policy do not match, and v3.1.1 manifests must list the stance skills.' },
  { path: 'workbench/specs',
    owns: 'The specs lane: one stable directory per durable capability record.',
    why: 'A spec is durable and a ticket is temporary. Recording capability truth at a stable path, never moved between status folders, keeps the reason a thing exists after the sprint that made it.' },
  { path: 'workbench/specs/S-001-self-explaining-room/SPEC.md',
    owns: 'This room\'s one capability: requirements, decisions, acceptance, verification, append-only evidence, and the stance each ticket carries.',
    why: 'Normal stance is set in the SPEC and TASK, not chosen by the arriving agent. Putting the stance on the ticket is what makes a stance an assignment rather than a mood.' },
  { path: 'workbench/docs',
    owns: 'The docs lane: long-form supporting documentation that is neither a root control nor a capability spec.',
    why: 'The root is capped at seven controls on purpose. Material that would bloat one of them lands here instead of being wedged into a file whose job is something else.' },
  { path: 'workbench/docs/adr',
    owns: 'Architecture decision records: rationale, alternatives considered, and what supersedes what.',
    why: 'A decision and the code implementing it have different lifetimes. An ADR keeps the argument after the code changes; its rule binds only where canonicalized_in points.' },
  { path: 'workbench/wiki',
    owns: 'The wiki lane: the room brain, its seeded contract files, and flat durable notes as the room grows.',
    why: 'Some knowledge belongs to the room but to no single spec. It is routed from one place rather than copied into several, and it never holds live task state.' },
  { path: 'workbench/wiki/MEMORY.md',
    owns: 'The room brain: the canonical, human-editable router to live controls and durable notes.',
    why: 'A room is not bootstrapped without a brain. A reader starts here and follows the smallest relevant link instead of browsing folders or searching.' },
  { path: 'workbench/wiki/design-concepts',
    owns: 'Owner-directed articles explaining one durable cross-cutting design model each.',
    why: 'Design intent is the first thing lost when only the implementation is written down. These are commissioned by the owner, not accumulated by agents.' },
  { path: 'workbench/wiki/guidebooks',
    owns: 'Ordered procedures that outgrew the Runbook.',
    why: 'A procedure useful twice belongs somewhere findable, but the Runbook is reserved for this project\'s own verified commands.' },
  { path: 'workbench/wiki/archive',
    owns: 'Superseded notes, kept for provenance.',
    why: 'Deleting a wrong note destroys the record that anyone believed it. Archiving keeps the trail out of the live brain; it is the only collection allowed to nest.' },
  { path: 'workbench/sessions',
    owns: 'The sessions lane: live working records and the one durable collection promoted from them.',
    why: 'Most session text is scratch and some must never be committed. The lane\'s .gitignore keeps live records untracked so durability is a deliberate act, not the default.' },
  { path: 'workbench/sessions/grilling',
    owns: 'Live notepads while a decision is still being argued. Untracked.',
    why: 'A notepad is a working record, never evidence. Keeping it out of version control stops half-formed reasoning from being cited as a settled decision.' },
  { path: 'workbench/sessions/handoffs',
    owns: 'Compactions addressed to the next session. Untracked.',
    why: 'A handoff is addressed to a session, not the repository. Cold continuation uses existing owners, so no universal handoff artifact is required or committed.' },
  { path: 'workbench/sessions/checkpoints',
    owns: 'Privacy-checked records promoted deliberately from the live collections. Tracked.',
    why: 'Promotion refuses secret-like content, absolute home paths, and email addresses, naming the line instead of writing a redacted copy. That gate is why session records are safe to keep at all.' },
  { path: 'workbench/feedback',
    owns: 'The feedback lane: the return channel to the harness and the assigned feedback reports.',
    why: 'When a rule is wrong the room needs somewhere to say so that is not the rule itself. Putting it in a lane keeps the root at exactly seven controls.' },
  { path: 'workbench/feedback/WORKBENCH_FEEDBACK.md',
    owns: 'The append-only log of where the v3.1.1 harness itself was unclear, wrong, or slow.',
    why: 'Lessons flow back upstream and are validated against evals before shipping as better. Taste alone never closes the loop; evidence does.' },
  { path: 'workbench/feedback/REPORT_FORMAT.md',
    owns: 'The shape of an assigned harness feedback report: target, evidence, findings, rejected findings, next action, review boundary.',
    why: 'New in this generation. A report assesses a target without repairing it or granting authority, so its format lives beside the log it feeds and not in the Runbook.' },
  { path: 'workbench/tools',
    owns: 'The managed runtime: eleven tools installed from the release with a receipt naming the source release, commit, and a hash per file.',
    why: 'The room runs its own copies, so it is not coupled to a harness checkout elsewhere on disk. The receipt is what makes an upgrade checkable, and it is why this lane changes only through an explicit update.' },
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
  for (const place of PLACES) lines.push(`  ${place.path}`, ...field('owns', place.owns), ...field('why', place.why), '');
  lines.push('  Run `node tests/tour.test.mjs` to check this map against the room itself.');
  return lines.join('\n');
}

if (process.argv[1] && process.argv[1].endsWith('tour.mjs')) process.stdout.write(`${render()}\n`);
