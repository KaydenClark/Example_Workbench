# S-001 - Self-Explaining Room

> Generated from LLM Workbench v2.3. Copy this file to the stable
> path `specs/S-001-self-explaining-room/SPEC.md`; never move it between status folders.

**Spec ID:** S-001
**Status:** active
**Priority:** 1
**Owner:** Kayden Clark
**Updated:** 2026-09-06
**Catalog description:** Make the room explain itself: `tour.mjs` prints every place, what it owns, and why it is separate, and a test proves the map matches the directory.
**Blockers:** none
**Latest event:** TK-001 closed with proof; render and doctor green against this room.
**Next gate:** Complete TK-002, or leave it ready as the one honest next step.

## Outcome

A person who checks out this branch and runs `node tour.mjs` sees every control
file and support location the v2.3 harness prescribes, the truth each one
keeps, and why it is kept apart from the others, printed under the heading
`Example Workbench (v2.3 spec-centered progressive disclosure, 2026-07-16) - room map`.
`node tests/tour.test.mjs` proves that map still matches the directory.

## Why It Matters

The harness's `templates/` are generic and bracketed by design, so a reader sees
the shape of a room but never a filled one that a test keeps honest. This room
is the filled example for the generation that made specs the unit of work, and
the tour is how it explains that contract in its own words.

## Current Verified State

- `tour.mjs` exports `LABEL`, `ROOM_ROOT`, `PLACES` (14 places), and `render()`,
  and prints the map when run directly.
- `tests/tour.test.mjs` runs 10 cases under `node:test`: room root, every place
  exists, every root `.md` described, every prescribed control present and
  described, non-trivial `owns`/`why`, the Claude bridge is one line, the
  generated regions exist, `GENESIS.md` was removed, no placeholder leaked, and
  the heading prints with every place.
- The catalog in `BLUEPRINT.md` and the hot board in `TASKBOARD.md` are rendered
  by `spec-workbench.mjs render --path .` from a checkout of LLM Workbench at
  commit `08ab78e5a59a68d2b04028fe71a2be488d5ae10e`; `doctor --path .` passes.
- Gap: the map is printed prose only; there is no machine-readable output to diff
  one generation's map against another's (TK-002).

## Desired Behavior

- `node tour.mjs` prints the heading above followed by every place with an
  `owns` line and a `why` line, and exits 0.
- `node tests/tour.test.mjs` passes from inside the room directory and turns red
  when a place is removed, a root Markdown file is added without an entry, a
  prescribed control is missing, or a template placeholder leaks.
- Both commands need only Node.js 20+ and resolve the room root from
  `import.meta.url`, so they work wherever the repository is cloned.

## Decisions And Contracts

- The generation label is `v2.3 spec-centered progressive disclosure, 2026-07-16`
  and contains no parentheses; it is a constant in `tour.mjs` and asserted by the test.
- `PLACES` entries carry exactly `path`, `owns`, and `why`; `why` is written from
  the v2.3 template wording and README, not from a later generation.
- The spec tool is not copied into the room. It runs from a read-only checkout
  of LLM Workbench at the source commit, with `--path .`, as `RUNBOOK.md` records.
- This spec's path is stable. When the room changes generation it is a new
  branch, not an edit to this record.

## Non-Goals

- Upgrading this room in place to a later harness version.
- A second planning or proof store outside this spec and the rendered board.
- Any dependency, `package.json`, or network access.

## Dependencies And Blockers

- none

## Vertical Implementation Slices

Tickets are temporary tracer bullets within this stable capability record.

| Ticket | Slice | Status | Blockers | Proof |
|---|---|---|---|---|
| TK-001 | Print the room map from `tour.mjs` and prove it with `tests/tour.test.mjs` | done | none | `node tests/tour.test.mjs`: 10 tests, 10 pass, 0 fail, exit 0; `node tour.mjs` prints 14 places under the v2.3 heading |
| TK-002 | Add `--json` output to `tour.mjs` printing `PLACES` as JSON, so one generation's map can be diffed against another's mechanically | ready | TK-001 | pending |

## Acceptance Criteria

- [x] `node tour.mjs` prints the heading `Example Workbench (v2.3 spec-centered progressive disclosure, 2026-07-16) - room map` and every place with `owns` and `why`.
- [x] `node tests/tour.test.mjs` passes from inside the room and covers every claim listed under Current Verified State.
- [x] `spec-workbench.mjs render --path .` and `doctor --path .` are green against this room.
- [ ] `node tour.mjs --json` prints `PLACES` as JSON and a test case parses it (TK-002).

## Testing Seams

- `tour.mjs` exports (`LABEL`, `ROOM_ROOT`, `PLACES`, `render`): the test imports
  them directly instead of scraping stdout.
- The room directory itself: `fs.existsSync` and `fs.readdirSync` against
  `ROOM_ROOT`, so the test fails on a real missing or undescribed file.
- The generated regions in `BLUEPRINT.md` and `TASKBOARD.md`: the markers must
  exist for `render` and `doctor` to have a target.

## Verification Procedure

```bash
node tests/tour.test.mjs
node --check tour.mjs && node tests/tour.test.mjs && node /PATH/TO/LLM_WORKBENCH/tools/spec-workbench.mjs doctor --path .
```

## Documentation Impact

- `README.md` Getting Started names the two commands; `RUNBOOK.md` Run Locally,
  Test And Build, and Spec Lifecycle name the exact commands and expected
  results; `BLUEPRINT.md` catalog and `TASKBOARD.md` hot board are rendered.
- TK-002 will touch `README.md` Getting Started and `RUNBOOK.md` Run Locally.

## Append-Only Evidence And Execution Log

| Date | Ticket | Event | Verification | Docs | Remaining gap |
|---|---|---|---|---|---|
| 2026-09-06 | intake | Genesis ran: Phases 0-7 of `templates/GENESIS.md` from LLM Workbench commit `08ab78e5a59a68d2b04028fe71a2be488d5ae10e`, filling the v2.3 templates by hand | `grep -rnE '\[[[:upper:]][[:upper:][:digit:]_ -]+\]' . --include=*.md --include=*.json` returned no hits; `GENESIS.md` deleted at Phase 7 | `AGENTS.md`, `BLUEPRINT.md`, `LEXICON.md`, `TASKBOARD.md`, `RUNBOOK.md`, `README.md`, `HARNESS_FEEDBACK.md`, `CLAUDE.md`, `.claude/` written; `ADOPTION.md` and the team and research templates not applicable | TK-001 |
| 2026-09-06 | TK-001 red | Test written before the product | `node tests/tour.test.mjs` -> `ERR_MODULE_NOT_FOUND: Cannot find module .../tour.mjs` | none | implement `tour.mjs` |
| 2026-09-06 | TK-001 | Ticket closed | `node tests/tour.test.mjs`: 10 tests, 10 pass, 0 fail, exit 0; `node --check tour.mjs`: exit 0; `node tour.mjs` prints 14 places under `Example Workbench (v2.3 spec-centered progressive disclosure, 2026-07-16) - room map` | `README.md`, `RUNBOOK.md`, `BLUEPRINT.md` updated | TK-002 |
| 2026-09-06 | spec | Projections rendered and diagnosed from the harness checkout at the source commit | `node /PATH/TO/LLM_WORKBENCH/tools/spec-workbench.mjs render --path .` -> `{"specs":1,"active":1}`; `doctor --path .` -> `ok - spec workbench doctor passed`, exit 0 | `BLUEPRINT.md` catalog and `TASKBOARD.md` hot board regions rendered | TK-002 |
| 2026-09-06 | spec | Static evaluator run from the same harness checkout | `node /PATH/TO/LLM_WORKBENCH/tools/evaluate-workbench.mjs --path . --include-controls` -> 105/113 for this room against 0/113 and 2/113 for the two control candidates; the 8 missing points are team coordination (no team templates were copied, by design) and one safety-boundary rubric item | Docs checked; no update needed: `RUNBOOK.md` -> Workbench Evaluation Commands already points here for the score | TK-002 |

## Completion Result

Pending.

## Remaining Limitations Or Follow-Up Specs

- TK-002 (`--json` output) is the one open slice; it is worth doing when someone
  wants to diff this branch's map against another generation branch. No other
  work is planned for this room.

## Supersession

- Supersedes: none
- Superseded by: none
