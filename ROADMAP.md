# Example Workbench (v1.1 anti-drift) - Roadmap

**Current phase:** room filled and self-describing  
**Owner:** Kayden Clark

This is the active work plan. Keep it forward-looking and proof-oriented. Do not use it as a dumping ground for old session history.

## Current State

The room is complete for its one capability. `tour.mjs` prints the room map for every control file at this generation (seven root controls plus the product and its test), and `tests/tour.test.mjs` passes against the room as it stands. For the most recent baseline result, see the top row of the Verification Log.

Important drift or uncertainty:

- This room is one commit on the `version/02-v1.1-anti-drift` branch of `KaydenClark/Example_Workbench`, whose `main` holds a v3.1.2 room. The two are different harness generations; nothing on `main` instructs this room, and this room is not upgraded to match it.
- `AGENTS.md` -> What Not To Do refers to `TASKBOARD.md` and `team templates/` for manager/subagent runs; neither exists in this room because it is single-agent. The rule is kept verbatim and marked not applicable in place.

## Current Goal

Make the room explain itself: one command prints what every file is for, and one command proves that explanation still matches the room.

Done when:

- `node tour.mjs` prints every control file and support location under the heading `Example Workbench (v1.1 anti-drift and version control, 2026-06-25) - room map`.
- `node tests/tour.test.mjs` passes: every named path exists, every root `.md` file and every prescribed control is described, every `owns` and `why` is non-trivial, and no template placeholder remains.
- Every control the v1.1 templates ship is copied and filled, with the anti-drift, version-control, and write-safety additions from commit fb406e1 present and filled rather than generic.

## Next Tasks

Work top to bottom. Tick a box only once its proof exists (a Verification Log row or a named manual check). This list is the live progress ledger, keep it accurate across the session, especially after a context summary.

- [x] **Fill the v1.1 controls** - `AGENTS.md`, `BLUEPRINT.md`, `ROADMAP.md`, `RUNBOOK.md`, `VISUAL_DESIGN.md`, `README.md`, and the `CLAUDE.md` bridge filled with no placeholder left. Proof: the placeholder grep in `RUNBOOK.md` -> Test And Build returns nothing (Verification Log, 2026-09-06).
- [x] **Write the tour** - `tour.mjs` exports `PLACES` and prints the room map. Proof: `node tour.mjs` (Verification Log, 2026-09-06).
- [x] **Prove the tour** - `tests/tour.test.mjs` asserts every claim in the map against the room. Proof: `node tests/tour.test.mjs` (Verification Log, 2026-09-06).
- [ ] **Compare against the neighbouring generations** - once the `version/01-*` and `version/03-*` branches exist, add one paragraph to `README.md` naming what changed between this room and the ones before and after it. Proof: manual check that each named difference points at a real section on the neighbouring branch.

## Blocked Or Deferred

Do not start these until their prerequisite is met.

| Item | Blocked on | Why it matters |
|---|---|---|
| Compare against the neighbouring generations | The neighbouring `version/NN-slug` branches being built and pushed | The comparison is the reason the version branches exist; written early it would describe rooms that are not there yet |

## Backlog

Keep this short. Promote items into `Next Tasks` only when they are ready to work.

- None. The room is frozen at the v1.1 template set; new harness behavior belongs on a later generation's branch, not here.

## Release Checks

Verification commands live in `RUNBOOK.md` -> Test And Build. Do not duplicate them here.

Project-specific release and checkpoint checks (not in RUNBOOK):

- Placeholder scan over `.md` and `.json` files returns nothing (the exact command is in `RUNBOOK.md` -> Test And Build, full verification).
- The provenance line at the top of `README.md` still names source commit `8572dd17f8ee97603225be6cdff924c0d767521b` dated 2026-06-25 and branch `version/02-v1.1-anti-drift`.

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
| 2026-09-06 | Fill the v1.1 controls, write the tour, prove the tour | `node tour.mjs` printed 9 places under the expected heading; `node tests/tour.test.mjs` reported 7 tests, 7 pass, 0 fail; placeholder grep returned nothing | pass | Docs written in the same task; the neighbouring-generation comparison in `README.md` waits on the neighbouring version branches |
