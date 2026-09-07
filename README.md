> Historical example: LLM Workbench v3.1.1 boundaries and portable stances, 2026-09-04, source commit 09f0875edce730eebac56902fa561ec3301b0543, dated 2026-09-04. Built with that generation's own tooling on 2026-09-06. Branch version/09-v3.1.1 of KaydenClark/Example_Workbench.

# Example Workbench

> Generated from LLM Workbench v3.1.1. See `RUNBOOK.md` ->
> Upgrading The Harness.

The smallest complete v3.1.1 room, whose product is an explanation of what a
room is: for anyone meeting the harness for the first time, and for anyone who
wants to read one harness generation beside the next.

This generation added the reduced entry route (AGENTS -> RUNBOOK -> LEXICON),
concrete edit-scope boundaries, the four portable stances (Builder, Auditor,
Reviewer, Reconciler), the feedback-lane `REPORT_FORMAT.md`, branch completion
and merged-branch cleanup rules, and the worktree-safe closeout. The room is a
working installation of exactly that: `node tour.mjs` prints every place in it
with what it owns and why, and `node tests/tour.test.mjs` fails when the room
and that account disagree. The optional multi-agent team templates,
`ADOPTION.md`, and the research templates were not applicable to a fresh
single-agent room and were not copied.

## How This Project Is Run

This repository is governed by a small set of control documents. Read them
before changing anything:

- [`AGENTS.md`](AGENTS.md) - how agents behave here: authority order, read/edit
  scope, the task-selection loop, documentation ownership, and proof rules.
- [`BLUEPRINT.md`](BLUEPRINT.md) - compact product map, cross-cutting
  architecture/invariants, non-goals, and spec catalog.
- [`LEXICON.md`](LEXICON.md) - accepted project-wide terms and definitions;
  consult it when shared language could be ambiguous.
- [`TASKBOARD.md`](TASKBOARD.md) - active spec projection: current slice, owner,
  blocker, latest event, and next gate.
- [`workbench/specs/S-001-self-explaining-room/SPEC.md`](workbench/specs/S-001-self-explaining-room/SPEC.md) - on-demand capability truth,
  acceptance, decisions, verification, append-only evidence, and completion.
- [`RUNBOOK.md`](RUNBOOK.md) - how to set up, run, test, build, and recover this
  project, plus the verification commands that gate "done".
- [`workbench/wiki/MEMORY.md`](workbench/wiki/MEMORY.md) - the room brain:
  canonical, human-editable durable memory for this project. It routes to the
  live controls above, to flat memory notes, and to the owner-directed
  `design-concepts/` collection; it never duplicates live task state.

- [`workbench/feedback/WORKBENCH_FEEDBACK.md`](workbench/feedback/WORKBENCH_FEEDBACK.md) -
  Workbench Feedback, the return channel to the reusable harness these docs
  came from: log where the harness rules themselves are unclear, wrong, or slow
  the work down, so they can be improved upstream. It lives in the feedback
  lane so the root keeps exactly seven controls.

This project was bootstrapped from a single founding prompt by the one-time
`GENESIS.md` protocol. Phase 7 of that protocol says to delete or archive the
file once handoff is complete, and it was deleted; the run is recorded in the
first spec's evidence log. The harness was not adopted into an existing project,
so `ADOPTION.md` does not apply. Either runs once at start; after handoff,
AGENTS plus the progressive spec flow above govern.

## Getting Started

```bash
node --version               # nothing to install; Node.js 20+ is the only requirement
node tour.mjs                # the room map: every place, what it owns, why
node tests/tour.test.mjs     # proof that the map still matches the room
```

Full setup, environment, and troubleshooting steps live in
[`RUNBOOK.md`](RUNBOOK.md).

## Working With Agents

The control docs are intentionally plain Markdown so they work with Codex,
Claude, or any other agent that reads repository instructions - no framework or
preprocessing required.

For **Claude Code**, keep the one-line `CLAUDE.md` containing exactly
`@AGENTS.md` so the rules load automatically; the Genesis readiness gate
(`validate --genesis`) rejects any other bridge, so do not replace it with a
generated `/init` file. Other agents should be pointed at `AGENTS.md` as their
entry point.

Every completed ticket must leave proof in its final response and owning spec's
append-only evidence log. Milestone specs additionally require a short demo
artifact (screenshot, recording, preview URL, or one-command demo) so work is
accepted on product truth, not passing tests alone.

## Project Status

See [`TASKBOARD.md`](TASKBOARD.md) for active execution state and
[`BLUEPRINT.md`](BLUEPRINT.md) for the durable spec catalog.

## License

MIT, the same license as the LLM Workbench harness this room was generated from.
