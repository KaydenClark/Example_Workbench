---
status: accepted
date: 2026-09-09
canonicalized_in:
  - AGENTS.md
  - RUNBOOK.md
  - workbench/specs/S-00A-workbench-template-reformation/SPEC.md
---

# Template ownership and continuity

## Decision

The named reference becomes a copyable Workbench Template. Its optional tour
explains the manifest; the manifest owns paths. Active accepted ADR decisions
are architectural Canon without enlarging instruction authority. Specs retain
scoped delivery, and Blueprint describes the desired product without status,
version, proof or a generated catalog. This replaces the prior not-a-template
role and the requirement to duplicate every binding ADR decision into a control.

The following accepted cross-cutting commitments are relocated verbatim from
the prior Blueprint. Their presence records design, not successful environment
verification or current implementation claims:

The Workbench's continuity promise spans maintained controls, specs, Wiki,
source, verified achieved state and objective notes. A fresh capable agent must
recover authorized work from those owners; notes preserve unfinished reasoning.
A real useful continuation demonstrates that workflow. Only repeated controlled,
held-out, condition-blind trials with uncertainty support improved agent-outcome
claims; static checks and a single demonstration do not. Preserve criteria and
failed results. Interface acceptance applies to the product's actual interface.

The portable runtime stays Node/JavaScript; Python retains evaluation and existing
append-only checks. Both languages deserialize JSON; no intrinsic Python JSON
penalty is asserted. Skills compose reusable independent behavior within inherited
scope. Mention, routing, invocation and authorization are distinct; a helper
cannot enlarge its caller's authority. Read-only names the target, while permitted
local working capture remains within the assignment.

Core skills are exclusively upstream-owned and sufficient without a personal
catalog, including reconciled save/promote/notepad. Optional personal/shared
skills and room-local source remain distinct ownership scopes. One selected
global core release carries a tested room compatibility range. The global
.agents/skills root holds managed ignored/excluded core installation alongside
optional personal source; Claude discovery adapts the same source. One source
per skill and one discovery entry per application; no third .codex/skills catalog.
Normal setup preserves existing names; explicit replacement backs up differences.
Room-local promotion into a personal catalog remains owner-directed.

Optional private workbench_sessions Git transport is the accepted cross-device
direction. Stable Workbench identity survives clone/worktree/rename; independent
instantiation receives a new identity, separate from artifact IDs. Selected live
notes/grilling/handoffs map under workbenches/<WBID>/sessions/; schemas/templates
and promoted knowledge stay in project Git. Live records remain ignored there,
non-authoritative, and privacy bounded. Fetch before resume; meaningful saves
and device switching require explicit push/remote acknowledgment, with offline
pending status and last confirmed revision. Serialize sync, preserve conflicts,
and never silently overwrite or force push. Git history retention is accepted;
transport does not move unpushed code or running processes. Local use is independent.
Actual Mac/Windows Claude/Codex round-trip proof is required for that claim.

Promotion writes selected, privacy/validity-checked material directly to its named
durable owner, verifies read-back and faithful reconciliation, then permits scoped
source cleanup. Preserve unfinished/correction/transfer dependencies. Existing
checkpoints remain frozen history; new copy creation is retired. Operational
recovery uses the ignored `sessions/recovery/` collection; legacy rollback remains usable. No new permanent
handoff store substitutes for checkpoints. Capability checks cannot replace
semantic judgment or authorization.

Genesis, adoption and explicit upgrade have different allowed effects and
preservation contracts. Verify all consumed source lanes before mutation.
Separate release, historical adoption, installed manifest, tool/skill bytes,
executing runtime and downstream acceptance identities. Verify the actual remote
ref and object; inaccessible remote state remains unknown. Control divergence is
visible and deliberate against a matched template generation; fidelity stays a
report. A recorded unavailable baseline is distinct from measured red and never
waives release acceptance; use the existing closed baseline policy.

Supported-host claims require a small agreed operational floor checked in the
actual configured environment. Agree requirements before choosing schema,
diagnostics or tests. Missing capabilities affect dependent work only; unavailable
checks stay unverified. Capability, actual enforcement and model reliability need
separate evidence. New native enforcement hooks are outside core; discovery and
evaluation adapters are distinct. Enforcement needs a running mechanism with
supporting evidence, whether host-owned or Workbench-owned.

## Alternatives and consequences

Keeping the fictional Example product would contradict the selected reusable
Template role. Copying a fresh unpersonalized project would discard installed
history and exceed the assigned update. Preserve the existing room identity,
version replay, completed specs and ignored live records while reconciling the
named installed reference. Scope remains this room; main is owner-controlled.

## Source

Prior accepted statements: git show 1cf050f:BLUEPRINT.md, B-030 through B-036 in
the lossless disposition inventory linked by the assigned spec. Upstream source
64397ad carries the corresponding accepted v3.2 decisions; this local record
preserves their already-selected room commitments through the Blueprint move.
