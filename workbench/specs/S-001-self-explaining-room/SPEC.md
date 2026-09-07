# S-001 - Self-Explaining Room

> Generated from LLM Workbench v3.1.1. This path is stable; never move it
> between status folders.

**Spec ID:** S-001
**Status:** active
**Priority:** 2
**Owner:** Kayden Clark
**Stance:** Builder
**Updated:** 2026-09-06
**Catalog description:** A room that prints a test-checked map of every control file and support location it has, with what each owns and why it is separate.
**Blockers:** none
**Latest event:** TK-001 closed: the map prints and its test passes.
**Next gate:** TK-002 claimed and closed with a report in `workbench/feedback/`.

## Outcome

Someone who has never seen an LLM Workbench can open this room, run one
command, and come away knowing what every control file and support location in
a v3.1.1 room is for and why it is kept apart from the others, then run a
second command that proves the answer is still true of the room in front of
them.

## Why It Matters

The structure of a room is documented upstream in `templates/`, which is by
design generic and bracketed. A newcomer reading it sees the shape of the
answer but never a filled example, and nothing checks that the templates still
describe what the tools actually produce. A filled room closes both gaps: it is
a real installation, so it cannot describe a shape the tools do not produce,
and because its own description is asserted by a test it cannot quietly fall
out of date. This generation also introduced portable stances, the feedback
report format, and the branch completion rules; a room that names them in its
map is how a reader sees what changed between one harness generation and the
next.

## Current Verified State

Genesis produced this room from LLM Workbench v3.1.1 at commit
`09f0875edce730eebac56902fa561ec3301b0543`:

- `workbench-layout.mjs init --provenance genesis --version v3.1.1` wrote a
  schema 2 manifest declaring six lanes, seven collections, the `project` wiki
  profile, and the 16-skill policy that now includes `builder`, `auditor`,
  `reviewer`, and `reconciler`. It seeded `SCHEMA.md`, `AGENTS.md`, and
  `design-concepts/README.md` into the wiki lane.
- `workbench-tools.mjs install` wrote eleven managed runtime tools into
  `workbench/tools/` with a receipt naming release `v3.1.1`, the same commit,
  and a hash per file.
- `tour.mjs` enumerates twenty-seven places: the seven root controls, the
  manifest, every lane and collection, the first spec, the room brain, the two
  feedback-lane files, and the product. `PLACES` is the only enumeration of the
  room's structure; the terminal output and the test read the same array.
- `tests/tour.test.mjs` passes seven cases with `node tests/tour.test.mjs`. It
  was red before the first spec existed, failing on the spec path the tour
  names, and went green once this file was written.
- No separate-context review has run on TK-001. `AGENTS.md` requires one before
  a branch combines into `integration`; that is the gap TK-002 owns.

## Desired Behavior

1. `node tour.mjs` prints every place in the room under the heading
   `Example Workbench (v3.1.1 boundaries and portable stances, 2026-09-04) - room map`,
   each with what it owns and why it is separate. No argument required.
2. `node tests/tour.test.mjs` fails whenever the room and the tour disagree:
   a named path is missing, a root control or root Markdown file is
   undescribed, a manifest-declared lane or collection is undescribed, an entry
   lacks a real `owns` or `why`, the Claude bridge carries anything but
   `@AGENTS.md`, or the tools receipt disagrees with the manifest.
3. The tour is reviewed once in a separate context under the Reviewer stance,
   and the result is a report in the feedback lane shaped by
   `REPORT_FORMAT.md` (TK-002).

## Decisions And Contracts

- `PLACES` in `tour.mjs` is the single enumeration of the room's structure.
  Prose elsewhere may explain one part; nothing else lists all of them.
- Every root control and every manifest-declared lane and collection must be
  described. This is asserted, not encouraged.
- A place must state a reason, not only a purpose. The `why` field carries why
  the truth is kept apart from every other truth.
- Each ticket names its stance. The arriving agent takes the stance the ticket
  assigns; it does not choose one.
- The room holds no secrets and acquires none.
- `workbench/tools/` is never hand-edited here. The room follows the same
  explicit-update rule it teaches.
- Genesis created no remote and no branches. The repository
  `KaydenClark/Example_Workbench` already has its remote, `main`, and
  `integration`; this room is one commit on its `version/09-v3.1.1` branch.

## Non-Goals

- Becoming a template. `templates/` upstream stays generic and bracketed.
- Teaching how to design a product. It explains the shape of a room, not what
  to build inside one.
- Replacing the upstream tool suites. This room is a rehearsal target, not a
  test harness for `workbench-layout.mjs` and friends.

## Dependencies And Blockers

- none

## Vertical Implementation Slices

Tickets are temporary tracer bullets within this stable capability record.

| Ticket | Slice | Status | Blockers | Proof |
|---|---|---|---|---|
| TK-001 | Print the annotated map and make drift a test failure | done | none | `node tour.mjs` prints 27 places; `node tests/tour.test.mjs` 7/7 |
| TK-002 | Separate-context Reviewer check of the tour, reported in the feedback lane | ready | none | pending |

### TK-001 - Done

**Stance:** Builder

`tour.mjs` exports `PLACES` and `render()`; `tests/tour.test.mjs` reads the
same array and the manifest. The test was written first and failed on the
missing first spec path before this file existed.

### TK-002 - Assigned task

**Stance:** Reviewer

In a separate context, check the tour's twenty-seven claims against the v3.1.1
templates and the room, challenge any `why` that restates a purpose instead of
giving a reason, and write `REPORT-tour-review-<date>.md` in
`workbench/feedback/` using `REPORT_FORMAT.md`. No findings is a valid result.
The report repairs nothing; accepted follow-up lands in this spec.

## Acceptance Criteria

- [x] `node tour.mjs` names every root control, every manifest-declared lane
      and collection, the first spec, the room brain, the feedback-lane files,
      and the product, each with what it owns and why.
- [x] `node tests/tour.test.mjs` exits 1 when a named path is missing or a
      manifest-declared lane or collection is undescribed.
- [x] `workbench-layout.mjs validate --project . --genesis` reports the room
      valid and `spec-workbench.mjs doctor` exits 0.
- [ ] A separate-context Reviewer report on the tour exists in
      `workbench/feedback/` (TK-002).

## Testing Seams

- `PLACES` exported from `tour.mjs`, read by both the renderer and the test, so
  a claim cannot be true in one and false in the other.
- `workbench/manifest.json` lanes and collections, compared against `PLACES`.
- `workbench/tools/.workbench-tools.json`, compared against the manifest
  version and source commit.

## Verification Procedure

```bash
node --check tour.mjs
node tests/tour.test.mjs
node workbench/tools/spec-workbench.mjs render
node workbench/tools/spec-workbench.mjs doctor
node workbench/tools/workbench-layout.mjs validate --project .
node /PATH/TO/LLM_WORKBENCH/workbench/tools/workbench-layout.mjs validate --project . --genesis
```

## Documentation Impact

- `BLUEPRINT.md` product map, pillars, invariants, and non-goals: filled from
  this spec's Outcome and Decisions.
- `LEXICON.md` Project Terms: `Room`, `Tour`, `Place`, `Drift` added.
- `RUNBOOK.md`: install, run, test, verify, and closeout filled with commands
  actually run; environment, data, and deployment recorded as not applicable
  with the reason.
- `workbench/wiki/MEMORY.md`: routes to these controls and to the stance terms.
- `GENESIS.md` was not kept at the root; Phase 7 says delete or archive it, and
  `README.md` records that it ran and was deleted.

## Append-Only Evidence And Execution Log

| Date | Ticket | Event | Verification | Docs | Remaining gap |
|---|---|---|---|---|---|
| 2026-09-06 | TK-001 | Genesis ran and the room's own explanation was made executable | `workbench-layout.mjs init --provenance genesis --version v3.1.1` wrote a schema 2 manifest from release checkout `09f0875`; `workbench-tools.mjs install` wrote eleven managed tools plus a receipt naming the same release and commit; `node tour.mjs` prints 27 places under the generation heading; `node tests/tour.test.mjs` passes 7/7 after first failing 6/7 on the missing spec path; `render`, `doctor`, and `validate --project . --genesis` from the release checkout all green | Seven root controls filled with no bracketed placeholders; `BLUEPRINT.md`, `LEXICON.md`, `RUNBOOK.md` written from this spec; room brain, `WORKBENCH_FEEDBACK.md`, and `REPORT_FORMAT.md` seeded | No separate-context review has run on the tour; TK-002 owns that |

## Completion Result

Pending. TK-001 is closed; the capability completes when TK-002's Reviewer
report exists in the feedback lane and the last acceptance box is checked.

## Remaining Limitations Or Follow-Up Specs

- The room's provenance pins one commit of the harness. When the harness
  releases again, this room stays a v3.1.1 room; that is correct, not stale.
- One room cannot prove portability. Nothing here establishes that genesis
  produces the same result on another platform or from another agent.

## Supersession

- Supersedes: none
- Superseded by: none
