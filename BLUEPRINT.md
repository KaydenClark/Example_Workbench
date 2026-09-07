# Example Workbench (v0 GAME_PLAN) - Blueprint

**Created:** 2026-09-06  
**Status:** blank project starting spec

This is the stable target for the project. Keep it short enough that a new agent can read it at the start of every session.

## What This Project Is

A self-describing tour of the smallest room the first LLM Workbench generation could produce. It is used by anyone meeting the harness for the first time and by the owner tracing how the harness contract grew: `node tour.mjs` prints every control file the room has, what truth that file keeps, and why it is kept apart from the others, and `node tests/tour.test.mjs` proves the printed map still matches the files on disk. It solves the problem that templates show the shape of an answer but never a filled example.

Core promise:

> Run one command in this directory and the room explains itself; run a second and the explanation is checked against the room, so it cannot quietly go stale.

## Non-Goals

- Do not reproduce later harness generations here (lexicon, runbook, taskboard, specs, manifest, tooling). Those live on the later `version/` branches of this repository.
- Do not add a build step, dependencies, or a package manager. Node.js 20+ alone runs everything.
- Do not give this room a remote, branch policy, or version stamp of its own; it is one commit on the `version/00-v0-game-plan` branch and the repository's policy applies.

## MVP

The first useful version must let a user:

- print the room map with `node tour.mjs` from inside this directory
- read, for each control file, the truth it owns and why it is separate
- check the map against the room with `node tests/tour.test.mjs`

MVP is complete when:

- `node tour.mjs` prints the heading `Example Workbench (v0 GAME_PLAN (pre-release, 2026-06-18)) - room map` followed by every place in `PLACES`
- `node tests/tour.test.mjs` passes: every named path exists, every `.md` file at the room root is described, the four controls this generation prescribes are described, and every `owns` and `why` is non-trivial
- no bracketed template placeholder remains in any Markdown file in the room

## Architecture Decision

| Layer | Choice | Rationale |
|---|---|---|
| Runtime | Node.js 20+, ESM | Already required by the parent repository; ships `node:test`, so nothing is installed |
| Frontend | none | The product is terminal output; a screen would be a landing page, which this contract forbids building instead of the tool |
| Backend | none | Everything is read from the local filesystem at run time |
| Database/storage | none | The only data is the `PLACES` array in `tour.mjs`; the files it describes are the store |
| Auth | none | A read-only local tool has nobody to authenticate |
| Testing | `node:test` with `node:assert/strict` | Built into the runtime; one file, one command, no framework to keep current |

Constraints:

- Use free/local tooling unless approved otherwise.
- Prefer the smallest stack that can support the MVP.
- Add complexity only when the current workflow proves it needs it.

## Initial Directory Plan

```text
./
├── tour.mjs       <- the product: exports PLACES and prints the room map
├── tests/         <- tests/tour.test.mjs, the check that keeps the map honest
├── README.md      <- setup and run commands
├── AGENTS.md      <- agent operating rules
├── BLUEPRINT.md   <- stable product/architecture reference
└── GAME_PLAN.md   <- active execution plan
```

## Core Workflows

### Print the room map

User goal: learn what each file in this room is for without opening it.

Expected flow:

1. Run `node tour.mjs` from the repository root.
2. The tour resolves the room root from `import.meta.url` and reads `PLACES`.
3. It prints the heading, then one block per place: path, `owns`, `why`.

Empty/error states:

- `PLACES` is never empty; the test fails if it names fewer than the four prescribed controls, so an empty map cannot ship.
- A path in `PLACES` that does not exist on disk is reported by the test with the missing path in the assertion message, not by the tour at print time.

### Check the map against the room

User goal: trust that the printed map is still true.

Expected flow:

1. Run `node tests/tour.test.mjs` from the repository root.
2. The test imports `PLACES` and `ROOM_ROOT` from `../tour.mjs` and lists the room root.
3. Every assertion names the offending path when it fails.

Empty/error states:

- A new `.md` file at the room root that the tour does not describe fails the test by name.
- A place with a one-word `owns` or `why` fails the test by path.

## Data Model

| Entity | Fields | Notes |
|---|---|---|
| `Place` | `path`, `owns`, `why` | One entry per control file or support location; `path` is relative to the room root; `owns` is the truth kept there; `why` is why it is not kept elsewhere, taken from this generation's own template wording |

## Verification Bar

The project is not considered working until:

- `node tests/tour.test.mjs` passes;
- the app/service starts locally;
- the primary MVP workflow has been manually verified;
- empty and error states do not crash.

Commands, once implemented:

```bash
node --version            # nothing to install; Node.js 20+ is the only requirement
node tests/tour.test.mjs
node tour.mjs
```

## Open Decisions

Only list decisions that truly block implementation.

- None. Nothing blocks implementation; the room is built and verified.
