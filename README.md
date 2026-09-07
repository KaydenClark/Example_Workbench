# Example Workbench

> Historical example: LLM Workbench v3.1.0 managed runtime and governance core, 2026-09-04, source commit 4ce74f8de1da30a3bffd9286e32c3b63e417a08b, dated 2026-09-04. Built with that generation's own tooling on 2026-09-06. Branch version/08-v3.1.0 of KaydenClark/Example_Workbench.

> Generated from LLM Workbench v3.1.0. See `RUNBOOK.md` ->
> Upgrading The Harness.

A room that explains itself: one command prints what every control file and
support location in a v3.1.0 room is for and why it is kept apart from the
others, for anyone meeting the harness for the first time.

The v3.1.0 generation is the first public v3 release. It added the managed
runtime tools installed with a receipt, the ADR tool, diagnostics with
registered blocking effects, the Governance Core in the controls, and the full
wiki template set. This room is the smallest complete installation of that
contract: seven filled root controls, a schema 2 support root declared by a
manifest, eleven receipt-backed runtime tools, one stable spec, and a room
brain. It is a finished historical snapshot, kept for comparison with the
other generations, not a project under development.

```bash
node tour.mjs             # what every part of this room is for, and why
node tests/tour.test.mjs  # proof that the answer still matches the room
```

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

This project was bootstrapped from a single founding prompt with the one-time
`GENESIS.md` protocol of LLM Workbench v3.1.0. That protocol says to delete or
archive itself after handoff, so it is not kept here; the founding prompt and
the Genesis result are preserved in the first spec's evidence log. `ADOPTION.md`
did not apply because nothing existed before Genesis. The optional team
templates and research templates were not copied: the room has one agent at
a time and no research folders. `.claude/settings.json` was copied and filled
(see `.claude/README.md`). After
handoff, AGENTS plus the progressive spec flow above govern.

## Getting Started

```bash
node --version            # v20 or newer; the room has no dependencies to install
node tour.mjs             # print the room map
node tests/tour.test.mjs  # check the map against the room
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

MIT, the same license as the LLM Workbench harness this room was generated
from. The room is meant to be read, copied, and compared.
