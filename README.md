> Historical example: LLM Workbench v2.3 late integration with room brain, 2026-08-27, source commit 9e6c71b81f38d0696ac01834076a20d428207bde, dated 2026-08-27. Built by hand from templates on 2026-09-06. Branch version/06-v2.3-late of KaydenClark/Example_Workbench.

# Example Workbench

> Generated from LLM Workbench v2.3. See `RUNBOOK.md` ->
> Upgrading The Harness.

A self-describing tour of an LLM Workbench room at the late-v2.3 contract:
`node tour.mjs` prints every control file this room has, the truth each one
keeps, and why it is kept apart from the others, for anyone who wants to see
what the harness looked like once the room brain, the tracer-bullet discipline,
and `WORKBENCH_FEEDBACK.md` had landed but before the version was bumped.

This room is one generation of `KaydenClark/Example_Workbench`, one per
version branch, so the owner can read how the contract progressed and
back-track to any generation. The repository's `main` holds the current room
(v3.1.2); this branch is frozen at v2.3 and is complete: both commands below
pass and no task beyond one honest next step is open. It is an example to read
and copy, not a place to do project work.

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
- [`specs/S-001-self-explaining-room/SPEC.md`](specs/S-001-self-explaining-room/SPEC.md) - on-demand capability truth,
  acceptance, decisions, verification, append-only evidence, and completion.
- [`RUNBOOK.md`](RUNBOOK.md) - how to set up, run, test, build, and recover this
  project, plus the verification commands that gate "done".
- [`MEMORY.md`](MEMORY.md) - the room brain: canonical, human-editable durable
  memory for this project. It routes to the live controls above and to flat
  memory notes; it never duplicates live task state.

- [`WORKBENCH_FEEDBACK.md`](WORKBENCH_FEEDBACK.md) - Workbench Feedback, the return channel to the
  reusable harness these docs came from: log where the harness rules themselves
  are unclear, wrong, or slow the work down, so they can be improved upstream.

This room was bootstrapped by following `templates/GENESIS.md` from the source
commit named at the top of this file. Phase 7 of that protocol says to delete
the file or move it to an archive note once AGENTS plus the progressive spec
flow govern; it was deleted, and the first evidence row in the S-001 spec
records that Genesis ran and what it produced. `ADOPTION.md` was not
applicable: there was no existing project to migrate. The optional
`team templates/` and `research templates/` sets were not copied either; they
are for multi-agent runs and research folders, and this room has neither.
`tools/spec-workbench.mjs` was not copied in: the generation's README offers it
as optional, and `RUNBOOK.md` runs it from a harness checkout instead.

## Getting Started

```bash
node tour.mjs              # nothing to install; print the room map
node tests/tour.test.mjs   # prove the map still matches this directory
```

Full setup, environment, and troubleshooting steps live in
[`RUNBOOK.md`](RUNBOOK.md).

## Working With Agents

The control docs are intentionally plain Markdown so they work with Codex,
Claude, or any other agent that reads repository instructions - no framework or
preprocessing required.

For **Claude Code**, add a one-line `CLAUDE.md` containing `@AGENTS.md`, or run
`/init` in this repo, so the rules load automatically. This room already ships
that one-line `CLAUDE.md`, and `.claude/settings.json` makes the `AGENTS.md`
edit scope mechanical. Other agents should be pointed at `AGENTS.md` as their
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
from. The room carries no `LICENSE` file of its own; it is meant to be read,
copied, and discarded.
