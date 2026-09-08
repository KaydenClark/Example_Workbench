# S-003 - v3.2.0 Upgrade And Project Validation

**Spec ID:** S-003
**Status:** active
**Priority:** 1
**Owner:** codex
**Stance:** Builder
**Updated:** 2026-09-08
**Catalog description:** Upgrade the reference room to v3.2.0 and prove a useful fresh project before reviewed integration.
**Blockers:** final-upstream-v3.2.0-candidate
**Latest event:** Refreshed remote state and preserved version-history replay on the exact v3.2.0 branch.
**Next gate:** Verify baseline and the clean pinned upstream release source.

## Outcome

The exact branch `v3.2.0` is independently reviewed and merged into `integration`,
and the resulting reference installation plus upstream template/Genesis route
produce a separate usable project. Retain the branch through owner acceptance.

## Why It Matters

The owner makes this the v3.2.0 readiness boundary. A branch label, green tour,
hand-copied tree or upstream suite cannot prove reusable project generation.

## Current Verified State

Remote integration bf8a2fa5d7b7403fda07e3c8573db1d8348fe3f4 and main
06ac42f913be8bc615d2821dee448843e567afcb were fetched 2026-09-08. Clean local
branches were fast-forwarded without dropping the new version-history work.
The candidate branch starts at integration. Manifest remains v3.1.2; 12 tour
tests pass and doctor exits 0 with 32 unknown-skill-generation observations.
No v3.2.0 upgrade has occurred. Upstream release owner is LLM_Workbench S-050.

## Desired Behavior

1. Consume the exact tested, clean v3.2.0 source: root, commit, manifest, tools,
   templates and skills all verified. Run supported explicit upgrade, preserve
   Example product/history/filled controls and legitimate divergence.
2. Confirm installed receipts and actual runtime/skill identities from this
   room's working directory. Reconcile control fidelity by explicit disposition.
3. Update the tour, lifecycle instructions and tests for the real new layout,
   notepads, frozen history/recovery, identities and skills. Keep version-history
   replay intact; historical versions remain historical.
4. From a fresh clone/clean checkout and isolated user home, run the documented
   template/Genesis instantiation route with the pinned release. Produce a
   separate small working project, fill its controls, run its own tests/tools,
   complete a useful bounded task and continue from a real saved objective note.
5. Independent instantiation gets a new Workbench identity and no Example live
   state; cloning Example as the same room retains identity. Runtime cannot
   depend on the developer checkout, personal skills catalog, private session
   store or Foundry. Distinguish generic inputs from Example-specific content.
6. Independently review immutable candidate, create PR from `v3.2.0` to
   `integration`, merge after PASS, verify live remote contains the reviewed SHA,
   and repeat affected acceptance against the actual merged result. Never merge
   integration into main here. Readiness does not start rollout to active rooms.

## Decisions And Contracts

Current owner authorization explicitly names both repositories and the exact
branch; it overrides the default prefix/base for this assignment. The fresh
integration base preserves the newer accepted replay work. AGENTS owns review
and safety. Upstream S-050 owns the complete release and cross-device gates;
this spec owns Example results and sends exact receipts to that owner.

## Non-Goals

Copy all upstream ADR history into Example, replace its product with templates,
erase legacy paths, change credentials, publish main, or upgrade other rooms.

## Dependencies And Blockers

Baseline can be checked now. Final explicit upgrade awaits tested upstream
v3.2.0. A missing private/Windows/host result remains upstream unverified;
Example mechanical success never waives that release gate.

## Vertical Implementation Slices

| Ticket | Slice | Status | Blockers | Proof |
|---|---|---|---|---|
| TK-001 | Preserve refreshed baseline and pin the tested v3.2.0 source | ready | none | pending |
| TK-002 | Upgrade managed installation and reconcile the tour and controls | ready | TK-001 | pending |
| TK-003 | Generate and customize a useful independent project with saved-note continuation | ready | TK-002 | pending |
| TK-004 | Review merge and read back actual Example integration | ready | TK-003 | pending |

### TK-001 - Source and baseline

**Stance:** Builder

Run full Example tests/layout/doctor and baseline guardrail. Record exact source
preflight and upstream required-suite/review evidence before closing this slice.
No dirty/uncommitted/symlinked source can count as the pinned release.

### TK-002 - Installed behavior

**Stance:** Builder

Use explicit upgrade with backup and rollback; reconcile product-specific controls
and real tour via red/green tests. Verify source/manifest/receipt/tool and core
skill identities, version match, control fidelity and all room checks.

### TK-003 - Useful fresh project

**Stance:** Builder

Use an isolated home and fresh pinned sources. Demonstrate a small concrete CLI
project generated through supported Genesis, not a hand-copied tree. Create and
run a useful function and regression test, save a finding/correction/next action,
and have a fresh context resume it. Prove new identity, no copied live state,
no runtime paths into developer source, and independently repeat from clone.
Name host/model/OS, command, output, exact commits and saved boundary. A single
trial proves this workflow only, not generalized model reliability.

### TK-004 - Integration proof

**Stance:** Builder

Separate-context review checks exact candidate and consequential claims. Repair
in scope, rerun affected/full checks, re-review changed candidate. PR and merge
only after PASS. Verify actual remote integration contains reviewed candidate
and test resulting checkout; preserve branch and send receipts to upstream S-050.

## Acceptance Criteria

- [ ] Clean exact upstream v3.2.0 source and complete preflight are recorded.
- [ ] Example preservation, installed identity, control fidelity, tour and full checks pass.
- [ ] Fresh independent project generation, useful task and actual note continuation pass.
- [ ] New-room versus same-room identity and no developer/personal-store dependencies are proven.
- [ ] Immutable Example candidate passes independent review and is remotely contained in integration.
- [ ] Actual merged result is read back and final receipts reach upstream S-050.

## Testing Seams

Explicit upgrade/rollback, tour CLI, installed layout/doctor/receipts, fresh
Genesis/customization, saved-note resume, Git PR/containment and clean clone.

## Verification Procedure

AGENTS/RUNBOOK full Example checks plus new regressions and concrete Genesis
rehearsal. Guardrail before/after uses unchanged criteria. Validate in Example
cwd. Upstream tests are supporting evidence, not installed-room acceptance.

## Documentation Impact

Seven root controls where relevant, tour, tests and this spec. Preserve
VERSION_HISTORY.md and S-002 historical result. Generic material stays upstream.

## Append-Only Evidence And Execution Log

| Date | Ticket | Event | Verification | Docs | Remaining gap |
|---|---|---|---|---|---|
| 2026-09-08 | spec | Refreshed Example before planning; exact branch created from integration | Clean main/integration fast-forwarded to fetched tips; 12 tour tests pass; doctor zero blockers and 32 informational findings | This spec records endpoint and preserved replay work | Final upstream candidate, upgrade and complete acceptance pending |

## Completion Result

Pending; no v3.2.0 readiness claim.

## Remaining Limitations Or Follow-Up Specs

Upstream S-050 is the release owner. Zero routine coordination hand-backs; no
additional rollout is assigned.

## Supersession

- Supersedes: none; S-001/002 history remains intact.
- Superseded by: none.
