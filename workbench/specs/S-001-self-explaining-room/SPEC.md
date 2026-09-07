# S-001 - Self-Explaining Room

> Generated from LLM Workbench v3.1.0. This path is stable; never move it
> between status folders.

**Spec ID:** S-001
**Status:** active
**Priority:** 2
**Owner:** Kayden Clark
**Updated:** 2026-09-06
**Catalog description:** A room that prints a test-checked map of every control file and support location it has, with what each owns and why it is separate.
**Blockers:** none
**Latest event:** TK-001 closed: the map prints and its test passes.
**Next gate:** TK-002 claimed and closed with proof.

## Outcome

Someone meeting LLM Workbench v3.1.0 for the first time can open this room,
run `node tour.mjs`, and come away knowing what every root control, the
manifest, every declared lane and collection, the spec, the room brain, the
feedback channel, and the tools receipt are for, and why each is kept apart
from the others. A second command, `node tests/tour.test.mjs`, proves that
answer is still true of the room they are looking at.

Founding prompt, preserved verbatim: "make the room explain itself".

## Why It Matters

The structure of a room is documented upstream in `templates/`, which is by
design generic and bracketed. A newcomer reading it sees the shape of the
answer but never a filled example, and nothing checks that the templates still
describe what the tools actually produce. This generation added a managed
runtime with a receipt, an ADR tool, registered diagnostics, the Governance
Core, and the full wiki set; that is a lot of new places to explain. A filled
room made with the real tooling closes the gap, and because its description is
asserted by a test it cannot quietly fall out of date.

## Current Verified State

Genesis produced this room from LLM Workbench v3.1.0 at commit
`4ce74f8de1da30a3bffd9286e32c3b63e417a08b`:

- `workbench-layout.mjs init --provenance genesis --version v3.1.0` wrote the
  schema 2 manifest declaring six lanes, seven collections, the `project`
  wiki profile, and the 12-skill policy, and seeded `SCHEMA.md`, `AGENTS.md`,
  and `design-concepts/README.md` into the wiki lane.
- `workbench-tools.mjs install` wrote eleven managed tools into
  `workbench/tools/` with a receipt naming release `v3.1.0`, the same commit,
  and a SHA-256 per file.
- `tour.mjs` enumerates twenty-eight places. `PLACES` is the only enumeration
  of the room's structure; the terminal output and the test read the same
  array.
- `tests/tour.test.mjs` passes nine cases; it was seen red once, before this
  spec file existed, on the case `every place the tour names exists in this
  room`.

The room does not yet read its own provenance or receipt back out for the
reader; the tour describes where they are, not what they say (TK-002).

## Desired Behavior

1. `node tour.mjs` prints the heading `Example Workbench (v3.1.0 managed
   runtime and governance core, 2026-09-04) - room map` followed by every
   place, each with `owns` and `why`, and lane and collection tags. No
   argument required.
2. `node tests/tour.test.mjs` fails whenever the room and the tour disagree:
   a named path missing, a root Markdown document or prescribed control
   undescribed, a manifest-declared lane or collection undescribed or
   mislabelled, a trivial `owns` or `why`, a Claude bridge that is not exactly
   `@AGENTS.md`, or a tools receipt naming a release or commit other than the
   manifest's.
3. One honest next step: the tour additionally prints what the manifest
   provenance and the tools receipt record (TK-002).

## Decisions And Contracts

- `PLACES` in `tour.mjs` is the single enumeration of the room's structure;
  prose elsewhere may explain one part but never lists them all.
- Every manifest-declared lane and collection must be described and labelled
  with its manifest key. This is asserted, not encouraged.
- A place must state a reason, not only a purpose: `why` carries why the truth
  is kept apart from every other truth.
- `workbench/tools/` is never hand-edited here; the room follows the same
  explicit-update rule it teaches.
- `.claude/settings.json` is copied and filled from the template as this
  generation shipped it: it allows edits on `tour.mjs`, `tests/`, and the root
  controls, and says nothing about the `workbench/` lanes, which is the gap
  v3.1.2 later closed as S-030. No remote or integration branch was created by Genesis
  because the repository already has both; this room is one commit on the
  `version/08-v3.1.0` branch.

## Non-Goals

- Becoming a template. `templates/` upstream stays generic and bracketed.
- Testing the upstream tools. The harness owns those suites; this room only
  checks its own description of itself.
- Being upgraded. This is the v3.1.0 generation and stays one.

## Dependencies And Blockers

- none

## Vertical Implementation Slices

Tickets are temporary tracer bullets within this stable capability record.

| Ticket | Slice | Status | Blockers | Proof |
|---|---|---|---|---|
| TK-001 | Print the annotated map and make drift a test failure | done | none | `node tour.mjs` prints 28 places; `node tests/tour.test.mjs` 9/9 pass, seen red once before the spec existed |
| TK-002 | Read the room's own provenance and receipt back out | ready | none | pending |

## Acceptance Criteria

- [x] `node tour.mjs` names every root control, the manifest, every
      manifest-declared lane and collection, the spec, the room brain, the
      feedback channel, the tools receipt, and the product, each with what it
      owns and why.
- [x] `node tests/tour.test.mjs` exits 1 when a named path is missing or a
      declared lane or collection is undescribed, and passes on this tree.
- [x] `workbench-layout.mjs validate --project . --genesis` reports the room
      valid, and `render` plus `doctor` pass on it.
- [ ] `node tour.mjs` prints the release, commit, and file count the manifest
      provenance and the tools receipt record (TK-002).

## Testing Seams

- `PLACES`, `PRESCRIBED`, `GENERATION`, and `render()` exported from `tour.mjs`,
  read by both the terminal and the test, so a claim cannot be true in one
  and false in the other.
- `workbench/manifest.json` lanes and collections, compared against `PLACES`.
- `workbench/tools/.workbench-tools.json`, compared against the manifest
  version and provenance commit.

## Verification Procedure

```bash
node tests/tour.test.mjs
node --check tour.mjs
node workbench/tools/workbench-layout.mjs validate --project .
node workbench/tools/spec-workbench.mjs render
node workbench/tools/spec-workbench.mjs doctor
node /PATH/TO/LLM_WORKBENCH/workbench/tools/workbench-layout.mjs validate --project . --genesis
```

## Documentation Impact

- `BLUEPRINT.md` product map, pillars, invariants, and non-goals filled from
  this spec's Outcome and Decisions.
- `LEXICON.md` Project Terms: `Room`, `Tour`, `Place`, `Drift`, `Generation`.
- `RUNBOOK.md`: install, run, test, and verification filled with the commands
  actually run; environment, data, and deployment recorded as not applicable
  with the reason.
- `workbench/wiki/MEMORY.md` routes to these controls and to this spec.

## Append-Only Evidence And Execution Log

| Date | Ticket | Event | Verification | Docs | Remaining gap |
|---|---|---|---|---|---|
| 2026-09-06 | TK-001 | Genesis ran from the v3.1.0 release checkout and the room's own explanation was made executable | `workbench-layout.mjs init --project . --provenance genesis --version v3.1.0` wrote the schema 2 manifest and seeded three wiki contract files; `workbench-tools.mjs install --project .` wrote eleven tools and `.workbench-tools.json` naming release v3.1.0 at `4ce74f8de1da30a3bffd9286e32c3b63e417a08b`; `validate --project .` returned `valid`; `node tests/tour.test.mjs` went red on `every place the tour names exists in this room` while this spec was missing, then 9/9 pass; `node tour.mjs` prints 28 places under the generation heading | Seven root controls filled with no bracketed placeholders; `BLUEPRINT.md`, `LEXICON.md`, `RUNBOOK.md`, `README.md` written from this spec; `MEMORY.md` router and `WORKBENCH_FEEDBACK.md` placed in their lanes; `GENESIS.md` not kept, per its Phase 7 | The tour says where the manifest provenance and the receipt are, not what they record; TK-002 owns that |

## Completion Result

Pending. TK-001 is done; TK-002 is the one open slice.

## Remaining Limitations Or Follow-Up Specs

- The room is a v3.1.0 generation and is never upgraded; a newer harness
  becomes a sibling generation on its own branch, not a change here.
- `validate --genesis` scores an actionable first packet, so it stays valid
  only while a ticket is `ready` and an acceptance box is unchecked; after
  TK-002 closes, the steady-state checks are `validate --project .`, `render`,
  and `doctor`.

## Supersession

- Supersedes: none
- Superseded by: none
