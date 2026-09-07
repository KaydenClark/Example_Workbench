# Example Workbench (v1.1 anti-drift) - Blueprint

**Last reviewed:** 2026-09-06 <- update whenever any section content changes  
**Status:** active  
**Source root:** the repository root (a clone of `KaydenClark/Example_Workbench` with branch `version/02-v1.1-anti-drift` checked out)

This is the stable reference for what the project is. Keep it factual, source-backed, and short. **Delete any section with no real content rather than leaving placeholders**, a placeholder looks like data and isn't.

## What This Project Is

A historical Example Workbench room: a filled copy of the LLM Workbench v1.1 templates (source commit 8572dd1, 2026-06-25) whose product is a self-describing tour. `tour.mjs` prints the map of this room, one entry per control file, saying what truth each file owns and why that truth is kept apart from the others. It is used by the owner of `KaydenClark/Example_Workbench` to see how the harness contract looked at this generation, next to the v3.1.2 room on `main`, and to back-track to it if needed.

Core promise:

> Run one command from this directory and the room explains every file it contains; run one more and the room proves that explanation is still true.

Primary users:

- The owner, checking out the `version/NN-slug` branches side by side to see how the harness contract progressed.
- An agent arriving cold in this room, who needs a filled example of the v1.1 controls rather than the bracketed templates.

## Non-Goals

This project is not trying to:

- be a real application; the tour is the whole product and it will not grow a UI, a server, or a data store.
- track the newer harness; this room is frozen at the v1.1 template set and is not upgraded in place, later generations get their own `version/NN-slug` branch.
- coordinate more than one agent; the team templates were not copied because the room is single-agent.

## Current Product Shape

When the project is working, a user can:

- run `node tour.mjs` from the repository root and read the room map under the heading `Example Workbench (v1.1 anti-drift and version control, 2026-06-25) - room map`.
- run `node tests/tour.test.mjs` and see every claim in the map checked against the room: every path exists, every control is described, every entry says what it owns and why.
- import `PLACES` from `tour.mjs` to reuse the map programmatically.

The most important quality bar is:

- correctness: the map must never describe a file that does not exist or omit a control the generation prescribes.

## Architecture

| Layer | Choice | Source / Notes |
|---|---|---|
| Runtime | Node.js 20+ (ESM) | `tour.mjs` uses `import.meta.url` to find the room root; verified on Node v22 |
| Frontend | none | output is plain terminal text |
| Backend | none | - |
| Database/storage | none | the map is a constant in `tour.mjs`; nothing is written at run time |
| Auth | none | - |
| Testing | `node:test` and `node:assert/strict` | `tests/tour.test.mjs`, zero dependencies |
| Deployment/runtime | none | run in place from a clone of the repository with this branch checked out |

Architecture constraints:

- Zero dependencies: no `package.json`, no `node_modules`, only the Node standard library.
- Both commands must work from the repository root regardless of where the repository is cloned.
- `tour.mjs` and `tests/tour.test.mjs` stay small (roughly 40-90 lines each); if the map needs more, that is a sign the room has outgrown this generation.

## Directory Map

```text
Example_Workbench/
├── tour.mjs            <- the product: PLACES table and the printed room map
├── tests/              <- tests/tour.test.mjs, proof that the map matches the room
├── CLAUDE.md           <- one line, @AGENTS.md, so Claude Code loads the rules
├── README.md           <- human orientation and provenance line
├── AGENTS.md           <- agent behavior and edit/read scope
├── BLUEPRINT.md        <- stable project definition
├── ROADMAP.md          <- active work plan and proof log
├── RUNBOOK.md          <- setup, operation, verification, recovery
└── VISUAL_DESIGN.md    <- default palette and accessibility rules (dormant here)
```

## Main Contracts

Use only the sections that apply. Delete irrelevant sections. Routes / Screens and API Endpoints were deleted from this room: the product has no screens and no network surface.

### Commands

| Command | Purpose | Required for done? |
|---|---|---|
| `node tour.mjs` | Print the room map, the demo artifact | yes |
| `node tests/tour.test.mjs` | Prove the map matches the room | yes |
| `node --check tour.mjs` | Syntax check without running | no |

### Data Model

| Entity | Key fields | Stored where | Notes |
|---|---|---|---|
| `Place` | `path`, `owns`, `why` | `PLACES` array in `tour.mjs` | one per control file or support location; `path` is relative to the room root |

## Core Logic And Invariants

The only logic is the map itself: `PLACES` in `tour.mjs` lists every control file and support location the room has at this generation, and `tests/tour.test.mjs` turns each listed claim into an assertion.

Rules:

- Every `path` in `PLACES` exists in the room.
- Every Markdown file at the room root, and every control the v1.1 templates prescribe, has a `PLACES` entry.
- Every entry has a non-trivial `owns` and `why`; a `why` shorter than a sentence is a placeholder.
- No template placeholder (an upper-case name in square brackets) survives in any control file.

Do not duplicate this logic in:

- `README.md` or `BLUEPRINT.md` prose; they may summarize the map but the list of places lives only in `tour.mjs`.

## Trust, Privacy, And Safety Boundaries

Sensitive data:

- none; this room stores no credentials, tokens, or private data and must acquire none.

Rules:

- Nothing in this room reads the environment, the network, or files outside the room root.
- Absolute home paths and email addresses must not be written into the controls beyond the declared source root above.
- Any change that adds a dependency, a network call, or a write outside the room requires explicit user approval.

## Known Risks

List only stable architectural risks that future agents must stay aware of. Immediate blockers belong in `ROADMAP.md` -> Blocked Or Deferred instead.

| Risk | Impact | Mitigation / owner |
|---|---|---|
| The room is edited to match a newer harness generation | The historical record stops being historical | Later generations get their own `version/NN-slug` branch; this one stays on the v1.1 template set (owner) |
| A control is added without a `PLACES` entry | The map lies by omission | `tests/tour.test.mjs` fails on any undescribed root `.md` file |

## Design Decisions

Record only decisions that future agents must preserve.

| Decision | Rationale | Date / Source |
|---|---|---|
| Fill the templates by hand rather than with tooling | The v1.1 generation ships no room tooling; its README says to copy and replace placeholders | 2026-09-06 / upstream `README.md` -> How To Use It |
| Keep `VISUAL_DESIGN.md` even though the product is terminal text | The v1.1 README lists it as a shipped control and `AGENTS.md` routes UI work to it; marked dormant in place rather than deleted | 2026-09-06 / `VISUAL_DESIGN.md` -> Project Application |
| Do not copy `team templates/` | The room is single-agent; the manager/subagent write-safety rule in `AGENTS.md` stays as written and is noted as not applicable | 2026-09-06 / `README.md` |

## Health Criteria

The project is healthy when:

- `node tests/tour.test.mjs` passes;
- `node --check tour.mjs` passes when relevant;
- the primary user workflow succeeds end-to-end: `node tour.mjs` prints the map under the expected heading;
- empty, error, and degraded states do not crash: a missing path fails the test with the path named, never a stack trace from the tour;
- secrets and local data are not exposed in committed or built output.

Verification commands live in `RUNBOOK.md`. Proof of past runs lives in the `ROADMAP.md` Verification Log.
