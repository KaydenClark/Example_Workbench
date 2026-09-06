# S-001 - Self-Explaining Room

> Generated from LLM Workbench v3.1.2. This path is stable; never move it
> between status folders.

**Spec ID:** S-001
**Status:** active
**Priority:** 2
**Owner:** Kayden Clark
**Stance:** Builder
**Updated:** 2026-09-06
**Catalog description:** A room that prints an accurate, test-checked account of what a workbench is and why each part is where it is.
**Blockers:** none
**Latest event:** TK-002 closed; the room now reads its own lifecycle out of the manifest and receipt.
**Next gate:** TK-003 is blocked on owner direction; no unblocked slice remains.

## Outcome

Someone who has never seen an LLM Workbench can clone this room, run one
command, and come away knowing what every part of a room is for and why it is
kept apart from the others - and can then run a second command that proves the
answer is still true of the room they are looking at.

## Why It Matters

The structure of a room is documented upstream in `templates/`, which is by
design generic and bracketed. A newcomer reading it sees the shape of the
answer but never a filled example, and nothing checks that the templates still
describe what the tools actually produce.

A filled room closes both gaps at once. It is a real installation, so it cannot
describe a shape the tools do not produce; and because its own description is
asserted by tests, it cannot quietly fall out of date the way a `STRUCTURE.md`
would. It also gives the harness a rehearsal target: genesis and upgrade can be
exercised here, on a room whose loss costs nothing, instead of on a room that
carries real work.

## Current Verified State

Genesis produced this room from LLM Workbench v3.1.2 at commit
`18ffc0d295722e8437a13399b3a1b67369248314`:

- `workbench-layout.mjs init --provenance genesis` wrote a schema 2 manifest
  declaring six lanes, seven collections, the `project` wiki profile, the
  sixteen-skill policy, and `git.defaultBranch` / `git.integrationBranch`.
- `workbench-tools.mjs install` wrote eleven managed runtime tools into
  `workbench/tools/` with a receipt naming release `v3.1.2`, the same commit,
  and a hash per file.
- `tour.mjs` enumerates twenty-three places across three zones. `PLACES` is the
  only enumeration of the room's structure; the terminal output and the tests
  read the same array.
- `tests/tour.test.mjs` passes nine cases. Two of them were confirmed to fail
  on real drift rather than only to pass on a good tree: adding an undeclared
  file to the tools lane, and adding a lane to the manifest without describing
  it, each exit 1 and name the offending path.

`node tour.mjs --lifecycle` then closed that gap: it reads `provenance` and the
tools receipt out of the room and prints how the room came to exist, followed
by the five-step route to a newer harness version. Twelve cases now pass.

Gap: the room has no remote, so it can be copied but not cloned, and nothing
proves it survives the machine it sits on. TK-003 owns that and is blocked on
owner direction.

## Desired Behavior

1. `node tour.mjs` prints every place in the room, grouped by zone, each with
   what it owns and why it is separate. No argument required.
2. `node tour.mjs --json` emits the same data for machine consumers.
3. `node tests/tour.test.mjs` fails whenever the room and the tour disagree -
   specifically when a described path is missing, when a manifest-declared lane
   or collection is undescribed, when a lane or collection is mislabelled, when
   the root-controls zone is not exactly the seven controls, when the Claude
   bridge carries anything but `@AGENTS.md`, when the tools receipt disagrees
   with the manifest, or when the tools lane holds a file the receipt does not
   account for.
4. The room additionally explains its own lifecycle: how it was created, and
   what the route to a newer harness version is (TK-002).

## Decisions And Contracts

- **`PLACES` in `tour.mjs` is the single enumeration of the room's structure.**
  Prose elsewhere may explain one part; nothing else lists all of them. A second
  list would be a second thing to keep true.
- **Every manifest-declared lane and collection must be described.** This is
  asserted, not encouraged. Adding a lane without a `why` is a red test.
- **A place must state a reason, not only a purpose.** The `why` field carries
  why the truth is kept apart from every other truth; a place that cannot answer
  that does not belong in the room.
- **The room holds no secrets and acquires none.** It exists to be copied, read,
  and discarded.
- **`workbench/tools/` is never hand-edited here.** The room follows the same
  explicit-update rule it teaches.

## Non-Goals

- Becoming a template. `templates/` upstream stays generic and bracketed; this
  room is deliberately filled and is not a substitute for it.
- Teaching how to design a product. It explains the shape of a room, not what to
  build inside one.
- Replacing the upstream tool suites. This room is a rehearsal target, not a
  test harness for `workbench-layout.mjs` and friends.

## Dependencies And Blockers

- none

## Vertical Implementation Slices

Tickets are temporary tracer bullets within this stable capability record.

| Ticket | Slice | Status | Blockers | Proof |
|---|---|---|---|---|
| TK-001 | Print the annotated map and make drift a test failure | done | none | `node tests/tour.test.mjs` 9/9; two drift cases confirmed red at exit 1 |
| TK-002 | Explain the room's lifecycle: how it was created and how it reaches a newer harness version | done | none | `node tour.mjs --lifecycle`; `node tests/tour.test.mjs` 12/12 |
| TK-003 | Publish the room so it can be cloned rather than copied | blocked | owner direction on whether a remote repository is created | pending |

### TK-002 - Done

**Stance:** Builder

`lifecycle()` reads `provenance.lifecycle`, `provenance.source`,
`workbenchVersion`, and the tools receipt out of the room; nothing in the
account is written by hand except `ROUTE`, and a case asserts every `.mjs` the
route names is installed in this room's lane. `--lifecycle` renders it.

The route is stated carefully because the obvious guess is wrong:
`workbench-upgrade.mjs upgrade` is the one-time v2 to v3 migration and refuses
an existing support root. For a room already on v3 the route is
`workbench-tools.mjs update --explicit-update`, then `record-source`, then a
hand stamp of `workbenchVersion`, then a hand re-stamp of the documents that
name a version. The last two steps are hand edits because no command performs
them - established by rehearsal, not assumption (see the evidence log).

### TK-003 - Blocked

**Stance:** Builder

Creating a remote repository is an owner decision and an outward-facing act.
Blocked until the owner says whether this room is published, and where.

## Acceptance Criteria

- [x] `node tour.mjs` names every root control, every manifest-declared lane and
      collection, and the product, each with what it owns and why.
- [x] `node tests/tour.test.mjs` exits 1 when a manifest-declared lane is not
      described, and exits 1 when the tools lane holds an unmanaged file.
- [x] `workbench-layout.mjs validate --project .` reports the room current.
- [x] A reader can learn from the room itself how it was created and how it
      would reach a newer harness version (TK-002).
- [ ] The room is reachable by clone rather than by copy (TK-003).

## Testing Seams

- `PLACES` exported from `tour.mjs`, read by both the renderer and the tests, so
  a claim cannot be true in one and false in the other.
- `workbench/manifest.json` lanes and collections, compared against `PLACES`.
- `workbench/tools/.workbench-tools.json`, compared against the manifest version
  and against the actual contents of the tools lane.
- `lifecycle()` and `ROUTE` exported from `tour.mjs`: the first is checked field
  by field against the manifest and receipt it claims to read, the second
  against the tools actually installed in this room.

## Verification Procedure

```bash
node --check tour.mjs
node tour.mjs --lifecycle
node tests/tour.test.mjs
node workbench/tools/workbench-layout.mjs validate --project .
node workbench/tools/spec-workbench.mjs render
node workbench/tools/spec-workbench.mjs doctor
```

## Documentation Impact

- `BLUEPRINT.md` product map, pillars, invariants, and non-goals: filled from
  this spec's Outcome and Decisions.
- `LEXICON.md` Project Terms: `Room`, `Tour`, `Place`, `Zone`, `Drift` added.
- `RUNBOOK.md`: install/run/test/verify filled with commands actually run;
  environment, data, and deployment sections recorded as not applicable with
  the reason rather than left bracketed.
- `workbench/wiki/MEMORY.md`: routes to these controls.

## Append-Only Evidence And Execution Log

| Date | Ticket | Event | Verification | Docs | Remaining gap |
|---|---|---|---|---|---|
| 2026-09-06 | TK-001 | Genesis ran and the room's own explanation was made executable | `workbench-layout.mjs init --provenance genesis --version v3.1.2` wrote a schema 2 manifest from release checkout `18ffc0d`; `workbench-tools.mjs install` wrote eleven managed tools plus a receipt naming the same release and commit; `node tests/tour.test.mjs` passes 9/9; drift confirmed red twice at exit 1 - an unmanaged `room-helper.mjs` in the tools lane failed "the tools lane holds only what the receipt accounts for", and an added `scratch` lane failed "every lane the manifest declares is explained" with the message naming the lane; both restored green | Seven root controls filled with no bracketed placeholders; `BLUEPRINT.md`, `LEXICON.md`, `RUNBOOK.md` written from this spec; room brain seeded | The tour explains where every part is, not how the room came to exist or how it changes version - TK-002 owns that |

| 2026-09-06 | TK-002 | The room now reads its own lifecycle out of the manifest and receipt | `node tour.mjs --lifecycle` prints lifecycle `genesis`, source release `v3.1.2` at `18ffc0d295722e8437a13399b3a1b67369248314`, stamp `v3.1.2`, and a receipt attesting 11 managed files; `node tests/tour.test.mjs` passes 12/12. Three new cases: the lifecycle account is compared field by field against the manifest and receipt it claims to read; the recorded commit is asserted to be a full 40-character SHA and not the placeholders `unrecorded` or `unknown`; every `.mjs` the route names is asserted present in this room's tools lane, and `workbench-tools.mjs` asserted absent, since it is a release tool rather than a room tool. The five-step route was established by rehearsing the v3.1.1 to v3.1.2 upgrade on a disposable copy of a real v3.1.1 room, not by reading the docs: `update --explicit-update` rewrote 8 of 11 tools and the receipt; `record-source --version v3.1.2` set `provenance.source` but left `workbenchVersion` at v3.1.1, which `doctor` then reported as `unverified-provenance` (attention); stamping `workbenchVersion` by hand cleared it; `seed-documents` wrote nothing and the four seeded wiki documents kept their v3.1.1 stamps as `stale-stamp` (attention), and the six root controls kept theirs unreported | Spec TK-002 closed; `RUNBOOK.md` and `README.md` name `--lifecycle` | The room still has no remote - TK-003, blocked on owner direction |
| 2026-09-06 | TK-002 | Recorded what the genesis readiness gate does after Genesis is over | `workbench-layout.mjs validate --project . --genesis` returned `{"status":"valid"}` at the Genesis commit `b19c1e9`, with every readiness box satisfied. Re-run after TK-002 closed, it returns `invalid` with reason `at least one ticket must be ready with blockers none` - because TK-002 is `done` and TK-003 is `blocked`. That is the gate behaving correctly: `GENESIS.md` says "Read this once, run it once", and the gate scores an actionable *first* packet, not a room mid-life. The steady-state checks are the right ones after bootstrap: `validate --project .` reports `valid`, `doctor` exits 0 with no blocking finding, `next --json` returns `null` because the only open ticket is blocked | Logged in `workbench/feedback/WORKBENCH_FEEDBACK.md` as a harness legibility observation, since nothing in the gate's output says it is one-time | None. The gate is correct; only its one-time nature is undocumented in its own failure message |

## Completion Result

Pending. TK-003 is the only remaining slice and is blocked on owner direction;
no unblocked work remains in this spec.

## Remaining Limitations Or Follow-Up Specs

- **The room has no remote.** It exists on one machine, so it can be copied but
  not cloned, and nothing proves it survives the loss of that machine. TK-003
  owns this and is blocked on owner direction.
- **The tour describes structure, not lifecycle.** TK-002 owns this.
- **One room cannot prove portability.** This room was created on macOS by
  Claude. Nothing here establishes that genesis produces the same result on
  another platform or from another agent; the upstream portability suites own
  that claim, not this room.

## Supersession

- Supersedes: none
- Superseded by: none
