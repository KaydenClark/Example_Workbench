# S-001 - Room Explains Itself

> Generated from LLM Workbench v3.0.0. Copy this file to the stable
> path `workbench/specs/S-001-room-explains-itself/SPEC.md`; never move it between status folders.

**Spec ID:** S-001
**Status:** active
**Priority:** 1
**Owner:** Kayden Clark
**Updated:** 2026-09-06
**Catalog description:** A room that prints a test-checked map of every control file and support location it has, with what each owns and why it is kept apart.
**Blockers:** none
**Latest event:** TK-001 closed: the map prints and its test passes.
**Next gate:** Complete TK-002.

## Outcome

A newcomer runs one command inside this room and learns what every root
control, the manifest, every declared lane, the spec, the room brain, and the
feedback channel are for, and why each is kept apart from the others. A second
command proves that answer is still true of the room it ships in. The founding
prompt, verbatim: "make the room explain itself".

## Why It Matters

The v3.0.0 templates describe the shape of a room in bracketed prose, and the
layout validator checks the manifest and lanes, but nothing upstream shows a
filled room or checks that the explanation matches what the tools produce.
This room is that filled example, made by the generation's own Genesis path,
and its test is what keeps the explanation from rotting.

## Current Verified State

- `tour.mjs` exports `GENERATION`, `PRESCRIBED`, `PLACES`, and `render()`, and
  prints the map under the heading
  `Example Workbench (v3.0.0 portable workbench root, 2026-08-31) - room map`.
- `tests/tour.test.mjs` passes: every named path exists, every root Markdown
  document and prescribed control is described, every manifest lane is a real
  directory and is described, every entry has a non-trivial owns and why, and
  `CLAUDE.md` is exactly `@AGENTS.md`.
- Gap: the tour does not yet read the manifest's version and provenance back
  out; the test asserts them, but the printed map does not say which harness
  made the room.

## Desired Behavior

- `node tour.mjs` prints every place with `owns` and `why`, fits a terminal,
  and takes no arguments.
- `node tests/tour.test.mjs` fails when a named path is missing, a prescribed
  control or declared lane is undescribed, an entry is trivial, or the Claude
  bridge carries rules of its own.
- Both commands run from inside the room with Node.js 20+ and no dependencies.

## Decisions And Contracts

- `PLACES` in `tour.mjs` is the single enumeration of the room's structure;
  the test reads the same list the terminal prints.
- The prescribed controls are the seven root controls plus
  `.claude/settings.json`, `workbench/manifest.json`, this spec,
  `workbench/wiki/MEMORY.md`, and `workbench/feedback/WORKBENCH_FEEDBACK.md`
  (GENESIS Phases 4, 6, and 7 at v3.0.0).
- The room brain and the feedback channel live in their manifest-declared
  lanes, not at the root, so the root keeps exactly seven controls.
- `GENESIS.md` was not kept in the room; Phase 7 allows deletion after handoff
  and this spec's evidence log is the record that it ran.
- The spec tool is run from the harness checkout with `--path .`; the room
  carries no copy of `spec-workbench.mjs` at this generation.

## Non-Goals

- Testing the upstream harness tools; the harness owns those suites.
- Adding any file the v3.0.0 templates and Genesis protocol do not prescribe.
- Upgrading this room to a later harness; each generation is its own branch.

## Dependencies And Blockers

- none

## Vertical Implementation Slices

Tickets are temporary tracer bullets within this stable capability record.

| Ticket | Slice | Status | Blockers | Proof |
|---|---|---|---|---|
| TK-001 | Print the annotated room map from `tour.mjs` and prove it with `tests/tour.test.mjs` | done | none | `node tour.mjs` prints 19 places under the generation heading; `node tests/tour.test.mjs` reports 8 pass, 0 fail (2026-09-06) |
| TK-002 | Read the manifest's version and provenance back out so the printed map says which harness made the room | ready | none | pending |

## Acceptance Criteria

- [x] `node tour.mjs` prints every root control, `.claude/settings.json`, the manifest, every declared lane, this spec, the room brain, the feedback log, and both product files, each with a non-trivial owns and why.
- [x] `node tests/tour.test.mjs` passes from inside the room and fails when a prescribed control, declared lane, or named path goes undescribed or missing.
- [x] `workbench-layout.mjs validate --project . --genesis` reports `valid` and `spec-workbench.mjs doctor --path .` passes.
- [ ] The printed map names the harness version and provenance read from `workbench/manifest.json` (TK-002).

## Testing Seams

- `PLACES` and `PRESCRIBED` exported from `tour.mjs`: the test asserts against the same data the terminal prints.
- `workbench/manifest.json`: the test reads the declared lanes, version, and provenance directly, so a manifest change without a tour change fails.
- `render()` exported from `tour.mjs`: the heading and every path are asserted on the rendered text.

## Verification Procedure

```bash
node tests/tour.test.mjs
node --check tour.mjs && node tests/tour.test.mjs && node /PATH/TO/LLM_WORKBENCH/tools/workbench-layout.mjs validate --project . --genesis && node /PATH/TO/LLM_WORKBENCH/tools/spec-workbench.mjs doctor --path .
```

## Documentation Impact

- `README.md` names the two commands and the generation; `RUNBOOK.md` records
  the harness commands and the commit to check out; `BLUEPRINT.md` and
  `TASKBOARD.md` carry the rendered catalog and hot board.

## Append-Only Evidence And Execution Log

| Date | Ticket | Event | Verification | Docs | Remaining gap |
|---|---|---|---|---|---|
| 2026-09-06 | genesis | Genesis ran from the v3.0.0 checkout: `workbench-layout.mjs init --provenance genesis --version v3.0.0` wrote `workbench/manifest.json` and the five lanes; the seven root controls, `.claude/settings.json`, this spec, `workbench/wiki/MEMORY.md`, and `workbench/feedback/WORKBENCH_FEEDBACK.md` were filled from `templates/` at v3.0.0; `GENESIS.md` deleted after handoff per Phase 7. | `node /PATH/TO/LLM_WORKBENCH/tools/workbench-layout.mjs validate --project . --genesis` printed `{"status":"valid",...}` | All controls written; placeholder grep over `*.md` and `*.json` returned no template placeholder | TK-001 |
| 2026-09-06 | TK-001 | Ticket closed | `node tour.mjs` printed 19 places under `Example Workbench (v3.0.0 portable workbench root, 2026-08-31) - room map`; `node tests/tour.test.mjs` reported `# pass 8`, `# fail 0` | `README.md`, `RUNBOOK.md`, `BLUEPRINT.md` updated for the two commands and the harness checkout | TK-002 remains ready |
| 2026-09-06 | spec | Projections rendered and checked from the v3.0.0 checkout | `node /PATH/TO/LLM_WORKBENCH/tools/spec-workbench.mjs render --path .` reported 1 spec, 1 active; `doctor --path .` printed `ok - spec workbench doctor passed` and exited 0 | Docs checked; no update needed: render rewrote only the marked regions of `BLUEPRINT.md` and `TASKBOARD.md` | none |

## Completion Result

Pending.

## Remaining Limitations Or Follow-Up Specs

- The printed map does not yet say which harness version made the room; that is
  TK-002, the one honest next step, and no further work is planned.

## Supersession

- Supersedes: none
- Superseded by: none
