# Example Workbench - Blueprint

**Last reviewed:** 2026-09-06 ← update whenever any section content changes  
**Status:** active  
**Source root:** the repository root (a checkout of `https://github.com/KaydenClark/Example_Workbench`, branch `version/01-v1-roadmap`)

This is the stable reference for what the project is. Keep it factual, source-backed, and short. **Delete any section with no real content rather than leaving placeholders** — a placeholder looks like data and isn't.

## What This Project Is

A historical example room built from the first public release of LLM Workbench (v1, 2026-06-22), whose product is a self-describing tour. `tour.mjs` prints a map of every control file the room has at this generation, what truth each one keeps, and why it is kept apart from the others; `tests/tour.test.mjs` proves the map matches the files on disk. It exists for the owner and for anyone tracing how the harness contract progressed: this is what a filled room looked like when the harness was five Markdown templates and nothing else.

Core promise:

> Run one command and the room explains itself; run a second and the explanation is proven against the room.

Primary users:

- Kayden Clark, the owner, comparing harness generations and back-tracking to any of them.
- A reader meeting the v1 harness for the first time who wants a filled example rather than a bracketed template.

## Non-Goals

This project is not trying to:

- track the current harness; it is frozen at source commit `a2cdd4548d895461c3d27a6da34740d8c76ccdd5` and later generations live on later `version/NN-slug` branches of this repository, with the current room on `main`.
- run any harness tooling; v1 shipped none, so nothing renders, validates, or doctors this room.
- adopt the optional `team templates/` multi-agent material; this is a single-agent room.

## Current Product Shape

When the project is working, a user can:

- run `node tour.mjs` and read the room map for this generation.
- run `node tests/tour.test.mjs` and see every claim in the map checked against the room.
- open any of the five controls and find real content in every section the v1 template prescribes.

The most important quality bar is:

- correctness: the map must name only files that exist and describe every file the generation prescribes.

## Architecture

| Layer | Choice | Source / Notes |
|---|---|---|
| Runtime | Node.js 20+ | ESM, `import.meta.url` locates the room root |
| Frontend | none | output is plain terminal text |
| Backend | none | |
| Database/storage | none | |
| Auth | none | |
| Testing | `node:test` + `node:assert/strict` | `tests/tour.test.mjs` |
| Deployment/runtime | none | runs locally from the room directory |

Architecture constraints:

- Zero dependencies: no `package.json`, no `node_modules`, nothing to install.
- Both commands run from the repository root and resolve paths from `import.meta.url`, so the room works wherever the repository is cloned.
- `PLACES` in `tour.mjs` is the single source for the map; the test reads it rather than keeping its own list.

## Directory Map

```text
Example_Workbench/
├── tour.mjs            <- the product: prints the room map
├── tests/
│   └── tour.test.mjs   <- proves the map against the room
├── AGENTS.md           <- agent behavior and edit/read scope
├── BLUEPRINT.md        <- stable project definition
├── ROADMAP.md          <- active work plan and proof log
├── RUNBOOK.md          <- setup, operation, verification, recovery
├── VISUAL_DESIGN.md    <- visual standards, adapted for terminal output
└── README.md           <- orientation and provenance
```

## Main Contracts

Use only the sections that apply. Delete irrelevant sections.

Routes / Screens, API Endpoints, and Data Model are deleted as the template allows: this room has no routes, no endpoints, and no stored entities.

### Commands

| Command | Purpose | Required for done? |
|---|---|---|
| `node tour.mjs` | Print the room map for this generation | yes |
| `node tests/tour.test.mjs` | Prove the map names real files and describes every prescribed control | yes |

## Core Logic And Invariants

The whole of the domain logic is the `PLACES` array in `tour.mjs`: one entry per control file and product file, each with `path`, `owns`, and `why`. `render()` formats it with a hanging indent at 78 columns. The test imports `PLACES` and checks it against the filesystem.

Rules:

- Every `PLACES` path exists relative to the room root.
- Every `.md` file at the room root, and every control the v1 README lists, appears in `PLACES`.
- Every `owns` and `why` is non-trivial prose and carries no bracketed template placeholder.
- The rendered heading is exactly `Example Workbench (v1 ROADMAP, first public release, 2026-06-22) - room map`.

Do not duplicate this logic in:

- the test file (it must import `PLACES`, never restate the map);
- `README.md` (it links to the tour instead of copying the map).

## Trust, Privacy, And Safety Boundaries

Sensitive data:

- none. The room holds no secrets, tokens, local databases, or personal data.

Rules:

- Nothing in this room may acquire credentials or private data.
- Nothing outside this repository is edited from this room.
- The source worktree of LLM Workbench used to build this room is read-only reference material.

## Known Risks

List only stable architectural risks that future agents must stay aware of. Immediate blockers belong in `ROADMAP.md` → Blocked Or Deferred instead.

| Risk | Impact | Mitigation / owner |
|---|---|---|
| v1 shipped no tooling, so nothing checks the five controls against their templates | Drift between a control and what v1 prescribed is caught only by reading; `tests/tour.test.mjs` proves the map, not the prose | Keep the test green; compare each control against the same-named file at source commit `a2cdd4548d895461c3d27a6da34740d8c76ccdd5` when in doubt |

## Design Decisions

Record only decisions that future agents must preserve.

| Decision | Rationale | Date / Source |
|---|---|---|
| Fill the v1 templates rather than rewrite them | The room is evidence of what v1 prescribed; rewritten sections would show a later contract | 2026-09-06 / build brief |
| Copy no `LICENSE` and no `team templates/` | The room carries the same license as the harness it was filled from, as the README states; the team templates are optional multi-agent material not used here | 2026-09-06 / v1 README |
| No version stamp in any control | v1 templates carried no `Generated from LLM Workbench` line; inventing one would misrepresent the generation | 2026-09-06 / v1 templates |

## Health Criteria

The project is healthy when:

- `node tests/tour.test.mjs` passes;
- `node tour.mjs` prints the map without error (no build, type, or lint step exists);
- the primary user workflow succeeds end-to-end;
- empty, error, and degraded states do not crash;
- secrets and local data are not exposed in committed or built output.

Verification commands live in `RUNBOOK.md`. Proof of past runs lives in the `ROADMAP.md` Verification Log.
