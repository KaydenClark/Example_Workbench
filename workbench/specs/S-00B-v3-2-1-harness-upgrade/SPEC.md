# S-00B - v3.2.1 Harness Upgrade

**Spec ID:** S-00B
**Status:** active
**Priority:** 1
**Owner:** codex
**Stance:** Builder
**Updated:** 2026-09-10
**Catalog description:** Upgrade Workbench_Template from v3.2.0 to the exact reviewed v3.2.1 source through the public managed update route, preserving the existing room and proving the installed result.
**Blockers:** none
**Latest event:** TK-001 claimed by codex.
**Next gate:** Close TK-001 with verification and documentation proof.

## Outcome

Upgrade Workbench_Template from v3.2.0 to the exact reviewed v3.2.1 source through the public managed update route, preserving the existing room and proving the installed result.

## Why It Matters

The owner uses the example Workbench Template to test updating an existing
Workbench. Source-template tests and a newly generated project do not prove that
this installed reference was updated.

## Current Verified State

Target integration 4010003 passes all 19 tour tests, syntax, layout validation and doctor (historical provenance attention only). Source integration 385218a supplies v3.2.1 and sixteen runtime tools.

## Desired Behavior

1. Installed runtime receipt and every managed file match pinned v3.2.1 source 385218a; control stamps and manifest agree.

2. Room identity, historical genesis/layout provenance, completed specs, ADR and product tour bytes survive; all intentional document changes have an owning decision.

3. Full room suite, installed project-evidence CLI smoke, layout, doctor and source byte comparison pass; recovery limits and complete file inventory are recorded.

4. Independent review and remote integration containment pass, followed by full verification from a fresh remote clone.

## Decisions And Contracts

- The target is https://github.com/KaydenClark/Workbench_Template, formerly
  Example_Workbench. Repository identity must be resolved live; a local folder
  name or upstream template directory is not the acceptance target.
- This owner request authorizes this named update and the release gate, including
  reviewed integration. Main promotion remains owner-only in both repositories.
- Use the already-v3 update route: additive layout check, explicit managed tool
  update with backup, and minimal control/seed reconciliation. Preserve personal
  skills; this assignment does not replace the global core bundle.
- The source remains v3.2.1: the release gate is producer policy and this change
  does not change the stamped core bundle or runtime bytes.

## Non-Goals

Other rooms, personal skill updates, rewriting completed proof, main publication,
new release automation, and claims of repeated agent reliability.

## Dependencies And Blockers

None within the named assignment. Unavailable native environments are separate
capability limits, not a reason to skip the Template update.

## Vertical Implementation Slices

| Ticket | Slice | Status | Blockers | Proof |
|---|---|---|---|---|
| TK-001 | Deliver the named upgrade and its acceptance record | in-progress | none | pending |

### TK-001 - Deliver the named upgrade and its acceptance record

**Stance:** Builder

Preserve the baseline inventory, exercise the public update, verify actual
installed behavior and preservation, reconcile owned documentation, and obtain
independent review before integration.

## Acceptance Criteria

- [ ] Installed runtime receipt and every managed file match pinned v3.2.1 source 385218a; control stamps and manifest agree.
- [ ] Room identity, historical genesis/layout provenance, completed specs, ADR and product tour bytes survive; all intentional document changes have an owning decision.
- [ ] Full room suite, installed project-evidence CLI smoke, layout, doctor and source byte comparison pass; recovery limits and complete file inventory are recorded.
- [ ] Independent review and remote integration containment pass, followed by full verification from a fresh remote clone.

## Testing Seams

Installed receipt hashes and public CLI, root control contract, full documented
suites, preservation inventory, and remote reviewed-commit containment.

## Verification Procedure

Run the full local AGENTS/RUNBOOK suite, source byte verification and guardrail
comparison. The Template also exercises the installed project-evidence command
and full tests in a fresh remote clone. Preserve all command failures and limits.

## Upgrade Proof And Deliberate Differences

[Preservation inventory](preservation.json) accounts for every tracked baseline
file and all sixteen installed runtime hashes against source385218a.
[Control fidelity](control-fidelity.json) retains every line occurrence:
AGENTS has zero dropped or changed template lines. Project-specific scope,
verification commands and the optional tour remain. Source root release policy
is producer-only; the Template Runbook records its role without imposing another
repository dependency on projects copied from it. No generic control template
changed between the installed v3.2.0 repair and source385218a, so root control
changes are version stamps, current repository identity and upgrade instructions.
The Blueprint, tour.mjs, original completed specs, ADR and VERSION_HISTORY stay
byte-identical. No controls require retirement or folding into a different owner.

Recovery was exercised before the final installation. The managed rollback
restored the replaced layout module byte-for-byte and restored the old receipt
with rollback metadata; it left newly added project-evidence.mjs. It is component
recovery, not a complete old-room restore. The rehearsal's own new file/receipt
were returned to the pinned baseline before the final update. Whole-room recovery
uses the preserved original Git commit4010003; the final backup is named in the
managed receipt. Neither temporary backup availability nor a receipt implies
cross-device recovery.

Observed friction: an already-current schema2 layout migration returned current
without changing workbenchVersion; the explicit version reconciliation is now
stated in the Runbook. A missing caller-supplied backup directory refused update
before writes; creating it permitted the final update. Seed refresh retained the
room-owned report format rather than overwriting it. The historical handoff
example and historical provenance remain deliberately unchanged. Doctor passes
with attention for preserved provenance, retained seeds and installed personal
v3.2.0 skills outside their declared room compatibility; this assignment does not
claim that those global skills were updated or validated for v3.2.1.

Baseline and after guardrail are58.3/100 (unchanged). Remaining recommendations
are producer-oriented static/version surfaces and benchmark ledger, held-out
coverage, repeated real outcomes, control/prior comparisons, recency and
uncertainty. No criteria were changed and no reliability improvement is claimed.

## Documentation Impact

Version-bearing root controls, current Wiki stamps, managed seed records and this spec. Historical specs, ADRs and version-history records remain unchanged; the Blueprint remains a destination without a version stamp.

## Append-Only Evidence And Execution Log

| Date | Ticket | Event | Verification | Docs | Remaining gap |
|---|---|---|---|---|---|
| 2026-09-10 | spec | Owner explicitly assigned the v3.2.1 Template upgrade and recurring release condition | Live GitHub identity, both integration tips and green 19-test Template baseline verified; isolated worktrees preserve unrelated work | This new owner preserves completed prior upgrade evidence | Update, verification and reviewed integration pending |

| 2026-09-10 | TK-001 | Installed pinned v3.2.1 through managed update after a component recovery rehearsal | Added CLI regression failed on missing project-evidence; after update21/21 tests pass, syntax/layout and exact16 receipt/source hashes pass; all existing product/history bytes preserved | Current stamps, repository name and upgrade procedure reconciled; complete preservation and fidelity inventories attached | Independent review, integration containment and fresh remote clone pending |

## Completion Result

Pending.

## Remaining Limitations Or Follow-Up Specs

Main remains owner-only; optional cross-device transport and global skills are
outside this update. Guardrail scores do not establish agent reliability.

## Supersession

- Supersedes: none; follows the completed v3.2.0 Template update.
- Superseded by: none.
