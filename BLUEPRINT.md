# Example Workbench - Blueprint

> Generated from LLM Workbench v2.1. See `RUNBOOK.md` ->
> Upgrading The Harness.

**Last reviewed:** 2026-09-06
**Status:** active
**Source root:** the repository root of `KaydenClark/Example_Workbench` at
branch `version/04-v2.1` (given as repository and branch rather than as an
absolute path, so the doc stays true on every clone and carries no
machine-specific home path)

This is the stable reference for what the project is. Keep it factual,
source-backed, and short. Delete sections that do not apply instead of leaving
placeholders that look like facts.

## What This Project Is

A self-describing tour of a v2.1 LLM Workbench room. `tour.mjs` names every
control file and support location the room has at this generation, the truth
each one keeps, and why it is kept apart from the others; `tests/tour.test.mjs`
proves that map matches the directory. It is used by the owner of
`KaydenClark/Example_Workbench` to see how the harness contract progressed
from generation to generation, and by anyone meeting the v2.1 contract for the
first time who wants a filled example rather than a bracketed template.

Core promise:

> Run `node tour.mjs` in this directory and you get every control file a v2.1
> room has, what truth it keeps, and why it is kept apart; run
> `node tests/tour.test.mjs` and you get proof that the map still matches the
> directory it sits in.

Primary users:

- The owner, reading generation rooms side by side to see what changed.
- An agent or person meeting the v2.1 harness contract cold.

## Non-Goals

This project is not trying to:

- Reproduce the current room's layout on `main` (`workbench/`, manifest,
  LEXICON, spec lanes); those arrived in later generations and live on later
  `version/` branches.
- Be upgraded in place to a later harness version. It is frozen at v2.1 on
  purpose; upgrading it would destroy the thing it documents.
- Host real project work. The one open task is the only future work it has.

## Current Product Shape

When the project is working, a user can:

- Print the room map with `node tour.mjs` and read, for each of the eleven
  places, what it owns and why it is separate.
- Prove the map with `node tests/tour.test.mjs`: every path exists, every root
  Markdown file and every v2.1 control is described, no placeholder leaked.
- Read the filled `AGENTS.md`, `BLUEPRINT.md`, `TASKBOARD.md`, `RUNBOOK.md`,
  `README.md`, `HARNESS_FEEDBACK.md`, and `.claude/` as a complete v2.1 room.

The most important quality bar is:

- correctness: the map must match the directory, and a test must say so.

## Direction And Build Order

Use this section for stable product direction and sequencing logic. Put the
current executable task queue in `TASKBOARD.md`, not here.

Current phase:

- complete: both commands pass, the controls are filled, and the room is frozen
  at v2.1. Only the one `ready` task in `TASKBOARD.md` remains.

Build order:

1. Filled control docs from the v2.1 templates - the controls are the real
   deliverable; the tour only describes them, so they had to exist first.
2. `tour.mjs` and `tests/tour.test.mjs` - the demo artifact and its proof,
   which v2.1 requires before a milestone is accepted.
3. Machine-readable output for cross-generation diffing - later, because it
   adds nothing to the explanation itself and is useful only for comparing
   this branch's map against the other generation branches.

## Architecture

| Layer | Choice | Source / Notes |
|---|---|---|
| Runtime | Node.js 20+ | ESM, `import.meta.url` to locate the room root; built and verified on Node 22 |
| Frontend | none | CLI output only |
| Backend | none | no server, no network |
| Database/storage | none | the map is a constant in `tour.mjs` |
| Auth | none | |
| Testing | `node:test` + `node:assert/strict` | `tests/tour.test.mjs`, zero dependencies |
| Deployment/runtime | none | run from inside the room directory |

Architecture constraints:

- Zero dependencies and no `package.json`; the room must run from a bare clone.
- Both commands run from inside the room directory, and the tour locates the
  room from `import.meta.url` so the clone path does not matter.
- Nothing in this room reads or writes outside the repository root.

## Directory Map

```text
Example_Workbench/
├── .claude/             <- Claude Code permission file and its mapping note
├── tests/               <- tour.test.mjs, the proof that the map is honest
├── tour.mjs             <- the product: prints the annotated room map
├── AGENTS.md            <- agent behavior and read/edit scope
├── BLUEPRINT.md         <- stable project definition and direction
├── TASKBOARD.md         <- live task queue, blockers, proof log
├── RUNBOOK.md           <- setup, operation, verification, recovery
├── README.md            <- human orientation and the provenance line
├── HARNESS_FEEDBACK.md  <- append-only return channel to the harness
└── CLAUDE.md            <- the one-line Claude Code bridge
```

## Main Contracts

Use only the sections that apply. Delete irrelevant sections.

Routes / Screens, API Endpoints, and Data Model do not apply: this is a CLI
with no routes, no endpoints, and no stored entities. Those three sections were
dropped as the template allows.

### Commands

| Command | Purpose | Required for done? |
|---|---|---|
| `node tour.mjs` | print the room map; the demo artifact | yes |
| `node tests/tour.test.mjs` | prove the map matches the directory | yes |
| `node --check tour.mjs` | syntax check without running | no |

## Core Logic And Invariants

The whole product is the `PLACES` array exported by `tour.mjs`: one entry per
place with `path`, `owns`, and `why`. The renderer prints it under the heading
`Example Workbench (v2.1, 2026-07-06) - room map`.

Rules:

- Every `path` in `PLACES` exists relative to the room root.
- Every Markdown file at the room root, and every control v2.1 prescribes
  (the four control docs, `README.md`, `HARNESS_FEEDBACK.md`, `CLAUDE.md`,
  `.claude/settings.json`), has an entry.
- Every `owns` is longer than 20 characters and every `why` longer than 40.
- No bracketed uppercase template token remains in any `.md` or `.json` file
  in the room.

Do not duplicate this logic in:

- `README.md` or this file, which point at the tour rather than restate its
  `why` text;
- `tests/tour.test.mjs`, which reads `PLACES` rather than carrying a list of
  its own.

## Trust, Privacy, And Safety Boundaries

Sensitive data:

- none. The room holds Markdown, JSON, and two small scripts.

Rules:

- nothing must stay local; everything here is meant to be committed;
- no secret, credential, token, or absolute home path may be committed;
- no data operation needs explicit user approval because there is no data.

## Known Risks

List stable architectural or product risks that future agents must stay aware
of. Immediate blockers belong in `TASKBOARD.md` -> Blocked.

| Risk | Impact | Mitigation / owner |
|---|---|---|
| Someone follows `RUNBOOK.md` -> Upgrading The Harness on this room | the room stops being a v2.1 example and duplicates a later version branch | Non-Goals above, the README provenance line, and `AGENTS.md` -> What Not To Do all say it is frozen; owner |
| The `PLACES` list drifts from the directory | the tour lies | `tests/tour.test.mjs` fails on any missing path or undescribed root file; agent making the change |

## Design Decisions

Record only decisions that future agents must preserve.

| Decision | Rationale | Date / Source |
|---|---|---|
| Founding prompt, preserved verbatim: "The room's product is a self-describing tour, the same idea as the root room's `tour.mjs`, scaled to what that generation had" | Genesis Phase 1 requires the owner's real words so later drift checks compare against them | 2026-09-06 / owner's build brief |
| `GENESIS.md` was deleted at handoff, not archived | Genesis Phase 7 offers delete or archive; deletion keeps the root to the files v2.1 prescribes and the upstream copy is at the source commit named in `README.md` | 2026-09-06 / GENESIS Phase 7 |
| `ADOPTION.md`, `team templates/`, and `research templates/` were not copied | they serve an existing project, a multi-agent run, and research folders; this room is none of those | 2026-09-06 / v2.1 README |
| The room is frozen at v2.1 | its purpose is to show the v2.1 contract; later generations are later `version/` branches of the same repository | 2026-09-06 / owner's build brief |
| Source root is recorded as repository and branch, not an absolute path | an absolute path is machine-specific and would put a home path into a committed file | 2026-09-06 / this file |
| No remote or integration branch was created for this room | `KaydenClark/Example_Workbench` already has its remote, `main` default, and `integration` staging branch; this room is one commit on `version/04-v2.1`, and branch-per-task applies | 2026-09-06 / `RUNBOOK.md` -> Version Control |

## Health Criteria

The project is healthy when:

- `node tests/tour.test.mjs` passes;
- `node --check tour.mjs` passes when relevant;
- the primary user workflow succeeds end-to-end: `node tour.mjs` prints the
  map under the generation heading with every place present;
- empty, error, and degraded states do not crash: the tour has no inputs, and
  the test reports a missing or undescribed file by name instead of throwing;
- secrets and local data are not exposed in committed or built output.

Verification commands live in `RUNBOOK.md`. Current task status and proof
history live in `TASKBOARD.md`.
