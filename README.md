> Historical example: LLM Workbench v2.3 spec-centered progressive disclosure, 2026-07-16, source commit 08ab78e5a59a68d2b04028fe71a2be488d5ae10e, dated 2026-07-16. Built by hand from templates on 2026-09-06. Branch version/05-v2.3 of KaydenClark/Example_Workbench.

# Example Workbench

> Generated from LLM Workbench v2.3. See `RUNBOOK.md` ->
> Upgrading The Harness.

A self-describing tour of a v2.3 LLM Workbench room: `node tour.mjs` prints
every control file and support location this room has, the truth each one
keeps, and why it is kept apart from the others, for anyone who wants to see
what the harness contract looked like when specs became the unit of work.

This room is one commit on the `version/05-v2.3` branch of
`KaydenClark/Example_Workbench`; every harness generation has a branch like it,
so the owner can read how the contract progressed and check out any generation.
`main` holds the current room. This branch is frozen at v2.3 and is complete:
both commands below pass, the spec tool's `render` and `doctor` are green, and
no work is open beyond one honest next ticket. It is an example to read and
copy, not a place to do project work.

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

- [`HARNESS_FEEDBACK.md`](HARNESS_FEEDBACK.md) - the return channel to the
  reusable harness these docs came from: log where the harness rules themselves
  are unclear, wrong, or slow the work down, so they can be improved upstream.

This room was bootstrapped by following `templates/GENESIS.md` from the source
commit named at the top of this file. Phase 7 of that protocol says to delete
the file or move it to an archive note once the controls govern; it was
deleted, and the first evidence row in the spec above records that Genesis ran
and what it produced. `ADOPTION.md` was not applicable: there was no existing
project to migrate. The optional `team templates/` and `research templates/`
sets were not copied either; they are for multi-agent runs and research
folders, and this room has neither. After handoff, AGENTS plus the progressive
spec flow above govern.

## Getting Started

```bash
# nothing to install; Node.js 20+ is the only requirement
node tour.mjs              # print the room map: every place, what it owns, why it is separate
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

Same license as the LLM Workbench harness this room was generated from (MIT).
The room carries no `LICENSE` file of its own; it is meant to be read, copied,
and discarded.
