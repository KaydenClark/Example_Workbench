# Example Workbench - Hot Taskboard

> Generated from LLM Workbench v3.2.0.

**Current focus:** A newcomer can learn what a workbench is by running one command, and the room proves its own account is still true.
**Owner:** Kayden Clark (executive); assigned agent (execution)
**Last updated:** 2026-09-06

This is an active execution projection, not a requirements store or proof
archive. Use `node workbench/tools/spec-workbench.mjs next --json` to select work and load only its linked spec.
Commands live in `RUNBOOK.md`.

## Active Specs

<!-- hot-specs:start -->
| Spec | Current slice | Owner | Blocker | Latest meaningful event | Next gate |
|---|---|---|---|---|---|
| [S-003](workbench/specs/S-003-v3-2-0-upgrade-and-project-validation/SPEC.md) | TK-004: Review merge and read back actual Example integration (in-progress) | codex | TK-003 | TK-004 reconciled the final reviewed upstream 16c8278 source and its configured-host contract. | Push and independently review the repaired immutable candidate before integration. |
| [S-001](workbench/specs/S-001-self-explaining-room/SPEC.md) | Acceptance / owner gate | Kayden Clark | none | TK-003 unblocked by owner direction and closed; the room is published and clonable. | None; every slice is closed and the capability is published. |
<!-- hot-specs:end -->

Completed specs disappear from this projection immediately. Their requirements,
decisions, acceptance, proof, completion, and supersession remain in the stable
spec linked from `BLUEPRINT.md`.

## Owner Decisions

Only decisions blocking an active spec appear here. Put options,
recommendation, cost/impact, owner, and next gate in one concise row; move the
resolved result into the owning spec.

| Spec | Decision | Options | Recommendation | Cost / impact | Owner | Next gate |
|---|---|---|---|---|---|---|
| [S-001](workbench/specs/S-001-self-explaining-room/SPEC.md) | Does this room get a remote of its own? | A: publish as its own repository, so it can be cloned and used as a stable rehearsal target / B: keep it local, copied by hand when needed | A - a room that exists on one machine cannot demonstrate that a room survives the machine, and cloning is how anyone else would ever get it | A costs one new repository and its upkeep; B costs nothing now and leaves TK-003 blocked indefinitely | Kayden Clark | Owner says publish or not; TK-003 unblocks either way |
