# S-001 - Self-Explaining Room

> Generated from LLM Workbench v2.3. This file lives at the stable
> path `specs/S-001-self-explaining-room/SPEC.md`; never move it between status folders.

**Spec ID:** S-001
**Status:** active
**Priority:** 0
**Owner:** Kayden Clark
**Updated:** 2026-09-06
**Catalog description:** Make the room explain itself: a tour that prints every control and a test that proves the map matches the directory.
**Blockers:** none
**Latest event:** TK-001 closed with proof.
**Next gate:** Complete TK-002.

## Outcome

A person or agent arriving at this room cold runs `node tour.mjs` and gets every
control file and support location the room has at this generation, the truth
each one keeps, and why it is kept apart from the others. Running
`node tests/tour.test.mjs` proves that map matches the directory it sits in.

## Why It Matters

The harness documents a room's structure upstream in `templates/`, which is
bracketed by design: it shows the shape of the answer, never a filled example.
This room is the filled example for the late-v2.3 contract. The owner reads one
such room per generation to see how the contract progressed; the tour makes the
comparison readable without opening every control by hand.

## Current Verified State

- `tour.mjs` exports `GENERATION`, `ROOM_ROOT`, `PRESCRIBED` (the eleven
  controls this generation prescribes), `PLACES` (fourteen places), and
  `render()`, and prints the map when run directly.
- `tests/tour.test.mjs` holds seven `node:test` cases: root agreement, every
  path exists, every root Markdown file described, every prescribed control
  present and described, every `owns`/`why` non-trivial and distinct, the
  Claude bridge is exactly `@AGENTS.md`, and the rendered map carries the
  heading and every place.
- Gap at capture: the controls the map names did not yet exist, so three of the
  seven cases failed (see the red row in the evidence log).

## Desired Behavior

- `node tour.mjs`, run from the room root, prints the heading
  `Example Workbench (v2.3 late integration with room brain, 2026-08-27) - room map`
  followed by every place with an `owns` line and a `why` line.
- `node tests/tour.test.mjs`, run from the room root, exits 0 with zero
  failures, and fails by name when a place is missing, a root document or
  prescribed control is undescribed, or an entry is trivial.
- Both commands need Node.js 20+ and nothing else.

## Decisions And Contracts

- The heading label contains no parentheses so the printed heading has exactly
  one pair: `Example Workbench (<label>) - room map`.
- The test reads `PLACES` and `PRESCRIBED` from `tour.mjs` instead of carrying
  a list of its own, so the product and its proof cannot disagree about what the
  room contains.
- Zero dependencies and no `package.json`; adding one is a review-required
  change under `AGENTS.md` -> Edit Scope.
- Founding prompt, preserved verbatim: "The room's product is a self-describing
  tour, the same idea as the root room's `tour.mjs`, scaled to what that
  generation had".
- Genesis was followed from LLM Workbench commit
  `9e6c71b81f38d0696ac01834076a20d428207bde` and `GENESIS.md` was deleted at
  Phase 7 rather than archived, so the room root holds only the controls this
  generation prescribes.

## Non-Goals

- Reading the room's layout from a manifest; this generation has none.
- Upgrading the room to a later harness stamp.
- Any output format beyond the printed map and the one JSON slice below.

## Dependencies And Blockers

- none

## Vertical Implementation Slices

Tickets are temporary tracer bullets within this stable capability record.
The layers a slice must cross in this room, mapped from its own source per the
`tracer-bullet` skill: argument handling in `tour.mjs` -> the `PLACES` data ->
rendered terminal output -> a `node:test` case at the public seam. Each slice
states an observable outcome and pierces all four; none is a single-layer shard.

| Ticket | Slice | Status | Blockers | Proof |
|---|---|---|---|---|
| TK-001 | A reader runs `node tour.mjs` and gets every control with what it owns and why; `node tests/tour.test.mjs` proves each place exists and each root document and prescribed control is described | done | none | node tests/tour.test.mjs -> 7 tests, 7 pass, 0 fail, exit 0; node --check tour.mjs -> exit 0; node tour.mjs prints fourteen places under the generation heading |
| TK-002 | A reader runs `node tour.mjs --json` and gets the same map as JSON that a test parses back, so generation rooms on sibling branches can be diffed mechanically | ready | none | pending |

## Acceptance Criteria

- [x] `node tour.mjs` prints the generation heading and all fourteen places.
- [x] `node tests/tour.test.mjs` exits 0 with zero failures from the room root.
- [x] Every control this generation prescribes exists and is described.
- [x] No bracketed template placeholder remains in any `.md` or `.json` file.
- [ ] `node tour.mjs --json` prints `PLACES` as JSON and a test parses it (TK-002).

## Testing Seams

- `PLACES` and `PRESCRIBED` exported from `tour.mjs`, checked against the
  filesystem by `tests/tour.test.mjs`.
- `render()` exported from `tour.mjs`, checked for the heading and every place.

## Verification Procedure

```bash
node tests/tour.test.mjs
node --check tour.mjs && node tests/tour.test.mjs
node /PATH/TO/LLM_WORKBENCH/tools/spec-workbench.mjs doctor --path .
```

## Documentation Impact

- `README.md` Getting Started, `RUNBOOK.md` Run Locally and Test And Build, and
  `BLUEPRINT.md` Cross-Cutting Health name the two commands; `MEMORY.md` routes
  to them. TK-002 will need to add the `--json` flag to the same four places.

## Append-Only Evidence And Execution Log

| Date | Ticket | Event | Verification | Docs | Remaining gap |
|---|---|---|---|---|---|
| 2026-09-06 | GENESIS | Followed `templates/GENESIS.md` Phases 0-7 from LLM Workbench commit `9e6c71b81f38d0696ac01834076a20d428207bde`: filled `AGENTS.md`, `BLUEPRINT.md`, `LEXICON.md`, `TASKBOARD.md`, `RUNBOOK.md`, `README.md`, `WORKBENCH_FEEDBACK.md`, `CLAUDE.md`, `.claude/`, this spec, and `MEMORY.md` from `templates/Wiki/MEMORY.project.md`; deleted `GENESIS.md` at Phase 7 | the placeholder grep in `RUNBOOK.md` -> Test And Build printed nothing | all controls written | TK-001 |
| 2026-09-06 | TK-001 red | Ran the test before the controls existed | `node tests/tour.test.mjs` -> 7 tests, 4 pass, 3 fail: `AGENTS.md` and the other named controls missing, prescribed controls missing, `CLAUDE.md` missing | none | write the controls |
| 2026-09-06 | TK-001 green | Controls written; heading label corrected to carry no parentheses | `node tests/tour.test.mjs` -> 7 tests, 7 pass, 0 fail, exit 0; `node --check tour.mjs` -> exit 0; `node tour.mjs` prints fourteen places under the generation heading | `README.md`, `RUNBOOK.md`, `BLUEPRINT.md`, `MEMORY.md` written | close the ticket |
| 2026-09-06 | TK-001 | Ticket closed | node tests/tour.test.mjs -> 7 tests, 7 pass, 0 fail, exit 0; node --check tour.mjs -> exit 0; node tour.mjs prints fourteen places under the generation heading | README.md, RUNBOOK.md, BLUEPRINT.md, MEMORY.md name the two commands | TK-002 (JSON output) is the one open slice |
| 2026-09-06 | spec | Rendered and diagnosed with the generation's own tooling from LLM Workbench commit `9e6c71b81f38d0696ac01834076a20d428207bde` | `spec-workbench.mjs render --path .` -> 1 spec, 1 active; `doctor --path .` -> `ok - spec workbench doctor passed`; `next --json --path .` -> TK-002; `evaluate-workbench.mjs --path . --include-controls` -> 106.6/113, only Team coordination missing (no `team templates/` by design) | Docs checked; no update needed, the run changed only the rendered regions | TK-002 |

## Completion Result

Pending.

## Remaining Limitations Or Follow-Up Specs

- TK-002 (JSON output) is the one open slice; it is worth doing once more than
  one generation room exists to diff against, which is why it was not cut first.
- The room is frozen at v2.3. A later contract is a later version branch, not a
  superseding spec here.

## Supersession

- Supersedes: none
- Superseded by: none
