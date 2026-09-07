# Example Workbench

> Generated from LLM Workbench v3.1.2. See `RUNBOOK.md` ->
> Upgrading The Harness.

The smallest complete LLM Workbench room, whose product is an explanation of
what a room is - for anyone meeting the harness for the first time, and for
anyone who needs a safe target to rehearse a genesis or an upgrade against.

```bash
node tour.mjs               # what every part of a room is for, and why
node tour.mjs --lifecycle   # how this room came to exist, and how it upgrades
node tests/tour.test.mjs    # proof that both answers still match this room
```

The structure of a room is documented upstream in `templates/`, which is
generic and bracketed by design: you see the shape of the answer, never a
filled example, and nothing checks that the templates still describe what the
tools actually produce. This room is that filled example. It was created by the
real genesis path, so it cannot describe a shape the tools do not produce, and
every claim it makes about its own layout is asserted by a test - add a lane to
`workbench/manifest.json` without describing it and the suite goes red.

One boundary worth naming up front, because it is the part people get wrong:
everything the harness manages lives under `workbench/`, declared by a manifest
rather than assumed by path. A root `tools/` directory, if a project has one,
belongs to the application and is never touched by the harness. The room you
are reading has no application `tools/` at all - its product is `tour.mjs` at
the root.

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
  three-file GAME_PLAN room to this v3.1.2 room, so any generation can be
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
[`BLUEPRINT.md`](BLUEPRINT.md) for the durable spec catalog.

## License

Same license as the LLM Workbench harness it was generated from. This room is
meant to be copied, read, and discarded.
