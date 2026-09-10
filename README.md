# Workbench Template

> Generated from LLM Workbench v3.2.1.

A copyable reference installation of LLM Workbench. It provides a legible
starting structure and an installed target for reviewed harness updates.
The repository is Workbench_Template (formerly Example_Workbench).

```bash
node tour.mjs
node tour.mjs --lifecycle
node tests/tour.test.mjs
```

The tour is an optional orientation aid. A future project needs its own product
intent, controls and verification; this update does not demonstrate automated
personalization or a fresh-project Genesis workflow. Historical specs and version
replay are retained as reference history, not new project assignments. Live
notes, handoffs and recovery data must stay out of copies.

The manifest declares every managed support path. Application code belongs to
the project that adopts the structure; the harness runtime remains under
workbench/tools and changes only through an explicit managed update.

## How This Project Is Run

This repository is governed by a small set of control documents. Read them
before changing anything:

- [`AGENTS.md`](AGENTS.md) - how agents behave here: authority order, read/edit
  scope, the task-selection loop, documentation ownership, and proof rules.
- [`BLUEPRINT.md`](BLUEPRINT.md) - desired product destination, integrated design, constraints and lifecycle. The
  complete capability catalog is linked from the Lexicon.
- [`LEXICON.md`](LEXICON.md) - accepted project-wide terms and definitions;
  consult it when shared language could be ambiguous.
- [`TASKBOARD.md`](TASKBOARD.md) - active spec projection: current slice, owner,
  blocker, latest event, and next gate.
- [`workbench/specs/S-###-slug/SPEC.md`](workbench/specs/S-###-slug/SPEC.md) - on-demand capability truth,
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
- [`workbench/docs/VERSION_HISTORY.md`](workbench/docs/VERSION_HISTORY.md) -
  how the harness got here. This repository's history replays every LLM
  Workbench generation as one commit and one `version/` branch each, from the
  three-file GAME_PLAN room through the v3.1.2 baseline, so any generation can be
  checked out, run, and diffed against its neighbours.

If this project was bootstrapped from a single founding prompt, the one-time
protocol that produced these docs is preserved in [`GENESIS.md`](GENESIS.md).
If instead the harness was adopted into an existing project, that one-time
migration protocol is [`ADOPTION.md`](ADOPTION.md). Either runs once at start;
after handoff, AGENTS plus the progressive spec flow above govern.

## Getting Started

```bash
# nothing to install - Node.js 20+ is the only requirement      # e.g. npm install / pip install -e . / make setup
node tour.mjs          # e.g. npm run dev / python -m app
node tests/tour.test.mjs         # e.g. npm test / pytest
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
[`workbench/specs/CATALOG.md`](workbench/specs/CATALOG.md) for the complete durable spec catalog.

## License

Same license as the LLM Workbench harness it was generated from. This room is
meant to be copied, read, and discarded.

The current room runs Workbench **v3.2.1**. Run `node tour.mjs` for the
updated notepad, recovery and frozen-history map. Its verified upgrade and
independent project-generation evidence belong to
[S-003](workbench/specs/S-003-v3-2-0-upgrade-and-project-validation/SPEC.md).
Historical replay branches retain their original versions.


The installed harness is v3.2.1. This repository is the reference used to test
Workbench updates; [upgrade acceptance](RUNBOOK.md#reference-upgrade-acceptance)
is required for each new version. [S-00B](workbench/specs/S-00B-v3-2-1-harness-upgrade/SPEC.md)
records this update's source, preservation and verification.
