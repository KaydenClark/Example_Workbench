> Historical example: LLM Workbench v3.0.0 portable workbench root, 2026-08-31, source commit d80d14c531c4bece9e2978d11e92e5a5d7bd77a5, dated 2026-08-31. Built with that generation's own tooling on 2026-09-06. Branch version/07-v3.0.0 of KaydenClark/Example_Workbench.

# Example Workbench

> Generated from LLM Workbench v3.0.0. See `RUNBOOK.md` ->
> Upgrading The Harness.

The smallest complete v3.0.0 LLM Workbench room, whose product is an
explanation of what a room is at this generation, for anyone meeting the
harness for the first time.

```bash
node tour.mjs             # what every part of a v3.0.0 room is for, and why
node tests/tour.test.mjs  # proof that the answer still matches this room
```

This is the generation that introduced the portable support root: everything
the harness manages moved from a root `specs/` folder and root `MEMORY.md` and
`WORKBENCH_FEEDBACK.md` files into a lowercase `workbench/` directory whose
five lanes (`specs`, `wiki`, `grilling`, `handoffs`, `feedback`) are declared
by `workbench/manifest.json` rather than assumed by path. The manifest also
records the harness version, Genesis provenance, and the closed 12-skill
policy, and `workbench-layout.mjs validate --genesis` refuses a room that does
not match it. The room was created by the real Genesis path (`init` wrote the
manifest and lanes; `render` and `doctor` project and check the spec), and
every claim it makes about its own layout is asserted by a test. The optional
team templates, research templates, and `ADOPTION.md` were not applicable to a
green-field single-agent room and were not copied.

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
- [`workbench/specs/S-###-slug/SPEC.md`](workbench/specs/S-001-room-explains-itself/SPEC.md) - on-demand capability truth,
  acceptance, decisions, verification, append-only evidence, and completion.
- [`RUNBOOK.md`](RUNBOOK.md) - how to set up, run, test, build, and recover this
  project, plus the verification commands that gate "done".
- [`workbench/wiki/MEMORY.md`](workbench/wiki/MEMORY.md) - the room brain: canonical, human-editable durable
  memory for this project. It routes to the live controls above and to flat
  memory notes; it never duplicates live task state.

- [`workbench/feedback/WORKBENCH_FEEDBACK.md`](workbench/feedback/WORKBENCH_FEEDBACK.md) - Workbench Feedback, the return channel to the
  reusable harness these docs came from: log where the harness rules themselves
  are unclear, wrong, or slow the work down, so they can be improved upstream.

This project was bootstrapped from a single founding prompt with the v3.0.0
`GENESIS.md`; as its Phase 7 prescribes, the one-time protocol was deleted
after handoff rather than kept, and the Genesis result is recorded in the first
spec's evidence log. `ADOPTION.md`, the migration protocol for an existing
project, did not apply. Either runs once at start; after handoff, AGENTS plus
the progressive spec flow above govern.

## Getting Started

```bash
node --version            # v20 or newer; there is nothing to install
node tour.mjs             # run: print the room map
node tests/tour.test.mjs  # test: check the map against the room
```

Full setup, environment, and troubleshooting steps live in
[`RUNBOOK.md`](RUNBOOK.md).

## Working With Agents

The control docs are intentionally plain Markdown so they work with Codex,
Claude, or any other agent that reads repository instructions - no framework or
preprocessing required.

For **Claude Code**, keep the one-line `CLAUDE.md` containing exactly
`@AGENTS.md` so the rules load automatically; do not replace it with a generated
`/init` file. Other agents should be pointed at `AGENTS.md` as their entry
point.

Every completed ticket must leave proof in its final response and owning spec's
append-only evidence log. Milestone specs additionally require a short demo
artifact (screenshot, recording, preview URL, or one-command demo) so work is
accepted on product truth, not passing tests alone.

## Project Status

See [`TASKBOARD.md`](TASKBOARD.md) for active execution state and
[`BLUEPRINT.md`](BLUEPRINT.md) for the durable spec catalog.

## License

Same license as the LLM Workbench harness it was generated from (MIT). This
room is meant to be copied, read, and discarded.
