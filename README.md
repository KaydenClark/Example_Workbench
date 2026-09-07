> Historical example: LLM Workbench v2.1, 2026-07-06, source commit dd1ed326a1d55e1f2303aa233cc4d1bf6a0a4270, dated 2026-07-06. Built by hand from templates on 2026-09-06. Branch version/04-v2.1 of KaydenClark/Example_Workbench.

# Example Workbench

> Generated from LLM Workbench v2.1. See `RUNBOOK.md` ->
> Upgrading The Harness.

A self-describing tour of a v2.1 LLM Workbench room: `node tour.mjs` prints
every control file this room has, the truth each one keeps, and why it is kept
apart from the others, for anyone who wants to see what the harness contract
looked like at v2.1.

`KaydenClark/Example_Workbench` keeps one branch per harness generation, and
this branch, `version/04-v2.1`, is one commit whose tree is the whole room, so
the owner can check out any generation and read how the contract progressed.
`main` carries the current room (v3.1.2); this branch is frozen at v2.1 and is
complete: both commands below pass and no task beyond one honest next step is
open. It is an example to read and copy, not a place to do project work.

## How This Project Is Run

This repository is governed by a small set of control documents. Read them
before changing anything:

- [`AGENTS.md`](AGENTS.md) - how agents behave here: authority order, read/edit
  scope, the task-selection loop, documentation ownership, and proof rules.
- [`BLUEPRINT.md`](BLUEPRINT.md) - what this project is: identity, direction,
  architecture, invariants, and preserved decisions. Stable and source-backed.
- [`TASKBOARD.md`](TASKBOARD.md) - the live work queue and append-only proof
  log. Its **Executive Brief** (top of the file) is the one-glance status for
  anyone who does not want to read code.
- [`RUNBOOK.md`](RUNBOOK.md) - how to set up, run, test, build, and recover this
  project, plus the verification commands that gate "done".

- [`HARNESS_FEEDBACK.md`](HARNESS_FEEDBACK.md) - the return channel to the
  reusable harness these docs came from: log where the harness rules themselves
  are unclear, wrong, or slow the work down, so they can be improved upstream.

This room was bootstrapped by following `templates/GENESIS.md` from the source
commit named at the top of this file. Phase 7 of that protocol says to delete
the file or move it to an archive note once the four control docs govern; it
was deleted, and the first proof-log row in `TASKBOARD.md` records that Genesis
ran and what it produced. `ADOPTION.md` was not applicable: there was no
existing project to migrate. The optional `team templates/` and
`research templates/` sets were not copied either; they are for multi-agent
runs and research folders, and this room has neither. After handoff, the four
control docs above govern.

## Getting Started

```bash
git checkout version/04-v2.1   # nothing to install; Node.js 20+ is the only requirement
node tour.mjs                  # print the room map: every control, what it owns, why it is separate
node tests/tour.test.mjs       # prove the map still matches this room
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

Every completed agent task must leave proof in its final response and in the
`TASKBOARD.md` proof log. Milestone tasks additionally require a short demo
artifact (screenshot, recording, preview URL, or one-command demo) so work is
accepted on product truth, not passing tests alone.

## Project Status

See the **Executive Brief** at the top of [`TASKBOARD.md`](TASKBOARD.md) for the
current shipping state, health, any decision the owner needs to make, blockers,
and the next milestone.

## License

MIT, the same license as the LLM Workbench harness this room was generated
from. No `LICENSE` file is committed on this branch; the harness's `LICENSE` at
the source commit named at the top of this file is the reference text.
