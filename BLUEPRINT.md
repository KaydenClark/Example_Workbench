# Example Workbench - Blueprint

**Last reviewed:** 2026-09-06
**Status:** active
**Source root:** `.` - the clone of `https://github.com/KaydenClark/Example_Workbench` at branch `version/03-v2.0-taskboard` (no absolute path is stable across clones)

This is the stable reference for what the project is. Keep it factual,
source-backed, and short. Delete sections that do not apply instead of leaving
placeholders that look like facts.

## What This Project Is

Example Workbench is the smallest complete LLM Workbench room, whose product is
an explanation of what a room is. This copy is the room as the harness shaped
it at the v2.0 TASKBOARD generation (2026-07-01): four filled control docs
copied from `templates/`, a one-line Claude Code bridge, and a tour script that
prints a map of the room and a test that proves the map is true. It is read by
anyone meeting the harness for the first time and by the owner, who keeps one
`version/` branch per harness generation to see how the contract progressed.

Core promise:

> Run one command and the room tells you what every file is for and why it is
> kept apart from the others; run a second command and the room proves it.

Primary users:

- The owner, comparing how each harness generation asked a project to organize
  itself.
- Coding agents (Claude, Codex, or any agent that reads repository
  instructions) rehearsing the v2.0 control contract against a safe target.

## Non-Goals

This project is not trying to:

- be a real application; the tour prints text and exits;
- track the current harness - it deliberately stays at the v2.0 TASKBOARD
  generation; later generations are later `version/` branches of the same
  repository, and the current room is on `main`;
- add dependencies, a build step, or any tooling beyond Node.js 20+.

## Current Product Shape

When the project is working, a user can:

- run `node tour.mjs` and read, for every control file and the product itself,
  what truth it owns and why it is separate;
- run `node tests/tour.test.mjs` and see that every named path exists, every
  root Markdown file is described, and no template placeholder leaked;
- read the four controls as a filled example of this generation's templates.

The most important quality bar is:

- correctness of the map: nothing the tour says about the room may be false.

## Direction And Build Order

Use this section for stable product direction and sequencing logic. Put the
current executable task queue in `TASKBOARD.md`, not here.

Current phase:

- Done and frozen: the one capability ("make the room explain itself") is
  built and proven; the room now changes only to stay true to itself.

Build order:

1. Fill the four v2.0 templates for this product - the controls are the
   deliverable, so they come before any code.
2. Write the tour and its test - the product exists once the map prints and
   the proof passes.
3. Keep the map honest - any later edit to the room is accepted only if the
   test still passes.

## Architecture

| Layer | Choice | Source / Notes |
|---|---|---|
| Runtime | Node.js 20+ | ESM, `node:` built-ins only, zero dependencies |
| Frontend | none | terminal text output |
| Backend | none | |
| Database/storage | none | the room's state is its Markdown files |
| Auth | none | |
| Testing | `node:test` + `node:assert/strict` | `tests/tour.test.mjs` |
| Deployment/runtime | none | run in place from a clone of the repository |

Architecture constraints:

- `tour.mjs` locates the room through `import.meta.url`, never through the
  working directory, so it works wherever the repository is cloned.
- No dependency manifest, no install step, no build step.
- The map (`PLACES`) is the only source of the tour's claims; the test reads
  the same export, so map and proof cannot disagree about what was claimed.

## Directory Map

```text
Example_Workbench/
├── tests/         <- tour.test.mjs, the proof the map matches the room
├── tour.mjs       <- the product: prints the room map
├── CLAUDE.md      <- one line, @AGENTS.md, so Claude Code loads the rules
├── README.md      <- provenance line, the two commands, what the room is
├── AGENTS.md      <- agent behavior and read/edit scope
├── BLUEPRINT.md   <- stable project definition and direction
├── TASKBOARD.md   <- live task queue, blockers, proof log
└── RUNBOOK.md     <- setup, operation, verification, recovery
```

## Main Contracts

Use only the sections that apply. Delete irrelevant sections.

Routes / Screens, API Endpoints, and Data Model are removed: this room has no
UI, no network surface, and no stored data. Commands are the whole contract.

### Commands

| Command | Purpose | Required for done? |
|---|---|---|
| `node tour.mjs` | print the room map under the generation heading | yes |
| `node tests/tour.test.mjs` | prove every claim in the map against the room | yes |

## Core Logic And Invariants

The only logic is the `PLACES` list in `tour.mjs`: one entry per file, each
with `path`, `owns`, and `why`. `render()` turns it into text; the test turns
each entry into an assertion.

Rules:

- Every `PLACES` path exists in the room.
- Every `.md` file at the room root has a `PLACES` entry.
- Every `owns` and `why` is real prose, not a stub.
- `CLAUDE.md` is exactly `@AGENTS.md`.

Do not duplicate this logic in:

- the test file: it imports `PLACES` and `render` rather than keeping its own
  list of files, so adding a file needs one edit, not two.

## Trust, Privacy, And Safety Boundaries

Sensitive data:

- none; the room holds no secrets, tokens, personal data, or local databases.

Rules:

- nothing here needs to stay local or be encrypted; the whole room is meant to
  be read and copied;
- never commit secrets, `.env` files, or logs into this room, even by accident
  while working on another branch of the repository;
- any edit outside this repository, and any rewrite of this branch's
  published history, requires explicit owner approval.

## Known Risks

List stable architectural or product risks that future agents must stay aware
of. Immediate blockers belong in `TASKBOARD.md` -> Blocked.

| Risk | Impact | Mitigation / owner |
|---|---|---|
| Nothing runs the test automatically (no CI, no hook), so a rename or an added root file could go unnoticed | the map silently lies until someone runs the test | run `node tests/tour.test.mjs` after any edit here; owner decides whether to add CI |

## Design Decisions

Record only decisions that future agents must preserve.

| Decision | Rationale | Date / Source |
|---|---|---|
| Fill the v2.0 templates as they were; do not backport later sections (Lexicon, specs, wiki, support root) | the room's value is showing exactly what this generation asked for | 2026-09-06 / brief for the history rooms |
| `CLAUDE.md` is the one-line bridge the generation README prescribes, not the annotated dogfood version | the dogfood notes are about the harness repository, not about a room built from its templates | 2026-09-06 / LLM Workbench README at 80db4a1 |
| Optional `team templates/`, `research templates/`, and eval tooling are not copied | the room is a single-agent, single-capability project; the evaluator's collaboration criterion therefore stays unmet on purpose | 2026-09-06 / brief for the history rooms |

## Health Criteria

The project is healthy when:

- `node tests/tour.test.mjs` passes;
- `node tour.mjs` prints the map and exits 0 (there is no build, type, or lint
  step);
- the primary user workflow succeeds end-to-end;
- empty, error, and degraded states do not crash;
- secrets and local data are not exposed in committed or built output.

Verification commands live in `RUNBOOK.md`. Current task status and proof
history live in `TASKBOARD.md`.
