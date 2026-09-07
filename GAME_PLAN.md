# Example Workbench (v0 GAME_PLAN) - Game Plan

**Created:** 2026-09-06

This is the active build plan for a new project. Keep it short, ordered, and executable.

## MVP Goal

Make the room explain itself: one command prints the annotated map of this room, and one test proves the map matches the files on disk.

## Assumptions

- Node.js 20+ is installed and nothing else is needed; `node:test` is the whole test stack.
- Both commands are run from the repository root, and the tour locates the room root from `import.meta.url` so the clone path does not matter.
- This generation prescribes exactly four controls (`AGENTS.md`, `BLUEPRINT.md`, `GAME_PLAN.md`, `README.md`); the tour describes those and the two product files, and nothing that a later generation added.

## Phase 0 - Project Scaffold

Acceptance criteria:

- Project starts locally.
- README has setup and run commands.
- Initial test/build command exists.
- Empty state renders or base endpoint responds.

Tasks:

1. Create project structure - done 2026-09-06: `tour.mjs`, `tests/`, and the four controls filled from the `blank_project` templates.
2. Install minimal dependencies - done 2026-09-06: none; Node.js 20+ is the only requirement, recorded in `README.md`.
3. Add first test or smoke check - done 2026-09-06: `tests/tour.test.mjs`.
4. Add README setup/run commands - done 2026-09-06: both commands are in `README.md`.

## Phase 1 - Core Workflow

Acceptance criteria:

- `node tour.mjs` prints the heading and every place in `PLACES` with its `owns` and `why` - done 2026-09-06.
- `PLACES` is the only state, exported from `tour.mjs` and read by the test - done 2026-09-06.
- The test rejects a place whose path does not exist or whose `owns` or `why` is trivial - done 2026-09-06.
- A root `.md` file the tour does not describe fails the test by name, so a silent gap is visible - done 2026-09-06.

Tasks:

1. Export `PLACES` from `tour.mjs` and print it under `Example Workbench (v0 GAME_PLAN, pre-release, 2026-06-18) - room map` - done.
2. Write `tests/tour.test.mjs` with `node:test` covering existence, coverage of root controls, and non-trivial text - done.
3. Fill every bracketed placeholder in the three controls and confirm none remain - done.

## Phase 2 - Usability And Reliability

Acceptance criteria:

- The room stays readable on its own branch as later generations are added to the history.
- Failure states are handled: every test assertion names the offending path.
- Relevant automated tests pass: `node tests/tour.test.mjs`.

Tasks:

1. When the next generation's branch lands, re-read this room's `why` text against that generation's templates and note in `README.md` what the next generation changed. This is the one honest next step; nothing else is planned.

## Deferred

Do not build these until the MVP is working:

- A `--lifecycle` view like the root room's: this generation has no manifest or receipt to read it from, so there is nothing to print.
- A `--json` output: nobody consumes it yet.
- A shared tour runner across generations: each room must stay runnable on its own.

## Verification

Current commands:

```bash
node --version            # nothing to install; Node.js 20+ is the only requirement
node tests/tour.test.mjs
node tour.mjs
```

Proof, 2026-09-06: `node tests/tour.test.mjs` passes (all tests, 0 failures) and `node tour.mjs` prints the heading and six places, both run from the repository root.

Manual MVP check:

1. `node tour.mjs`
2. `node tests/tour.test.mjs`
3. Expected result: the map lists `AGENTS.md`, `BLUEPRINT.md`, `GAME_PLAN.md`, `README.md`, `tour.mjs`, and `tests/tour.test.mjs`, and the test run reports zero failures.
