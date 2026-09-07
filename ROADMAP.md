# Example Workbench - Roadmap

**Current phase:** explained  
**Owner:** Kayden Clark

This is the active work plan. Keep it forward-looking and proof-oriented. Do not use it as a dumping ground for old session history.

## Current State

The room's one capability, make the room explain itself, is done. `node tour.mjs` prints the map of the five v1 controls, the README, the tour, and its test; `node tests/tour.test.mjs` passes and proves every path exists and every prescribed control is described. All five controls are filled from the v1 templates with no placeholders left. For the most recent baseline result, see the top row of the Verification Log.

Important drift or uncertainty:

- The room is frozen at LLM Workbench source commit `a2cdd4548d895461c3d27a6da34740d8c76ccdd5`. That generation shipped no tooling, so `tests/tour.test.mjs` is the only automated check; whether each control still matches its v1 template is checked by reading.

## Current Goal

Keep the room a faithful, verified example of a filled v1 room.

Done when:

- `node tour.mjs` prints the map under the heading `Example Workbench (v1 ROADMAP, first public release, 2026-06-22) - room map`.
- `node tests/tour.test.mjs` passes from inside the room directory.
- No bracketed template placeholder remains in any control or the README.

All three hold as of 2026-09-06.

## Next Tasks

1. **Build the next generation's room** - the LLM Workbench commit after `a2cdd4548d895461c3d27a6da34740d8c76ccdd5` gets its own `version/NN-slug` branch, filled the same way from that generation's templates. That work happens on its own branch and does not change this one. Proof: on that branch, `node tour.mjs` prints its own map and `node tests/tour.test.mjs` passes.

No further tasks are queued. The template's slots for a second and third task are left empty on purpose rather than filled with invented work.

## Blocked Or Deferred

Do not start these until their prerequisite is met.

| Item | Blocked on | Why it matters |
|---|---|---|
| none | | |

## Backlog

Keep this short. Promote items into `Next Tasks` only when they are ready to work.

- none

## Release Checks

Verification commands live in `RUNBOOK.md` → Test And Build. Do not duplicate them here.

Project-specific release and checkpoint checks (not in RUNBOOK):

- Placeholder scan: `grep -rnE '\[[[:upper:]][[:upper:][:digit:]_ -]+\]' . --include=*.md --include=*.json` from the repository root returns nothing.
- Docs updated: the `Last reviewed` dates in `BLUEPRINT.md` and `RUNBOOK.md` match the last content change.

## Documentation Check

Documentation is part of done. When a task changes durable project state, update
the docs that describe that state before appending the verification row.

Check these docs before marking work complete:

| If the task changed... | Update or confirm |
|---|---|
| Product purpose, workflows, routes, data model, architecture, invariants, privacy/safety boundaries | `BLUEPRINT.md` |
| Current phase, current goal, next tasks, blockers, backlog, proof of work | `ROADMAP.md` |
| Setup, install, run, test, build, deploy, recovery, environment, operations | `RUNBOOK.md` |
| User-facing usage, demo steps, handoff, public instructions | `README.md` |
| Agent rules, authority order, read/edit scope, verification contract | `AGENTS.md` |

If no docs need edits, record `Docs checked; no update needed` in the final
response and in the verification row's `Remaining gap` field.

## Verification Log

Append a row when a task changes durable project state. Use actual results, not stale claims.

| Date | Task | Proof | Result | Remaining gap |
|---|---|---|---|---|
| 2026-09-06 | Build the room from the v1 templates and add the self-describing tour | `node tour.mjs` printed the room map; `node tests/tour.test.mjs` ran 7 tests, 7 pass, 0 fail | pass | none; docs written in the same task |
