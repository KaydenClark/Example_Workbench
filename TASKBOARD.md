# Example Workbench - Hot Taskboard

> Generated from LLM Workbench v3.1.2.

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
| [S-001](workbench/specs/S-001-self-explaining-room/SPEC.md) | TK-002: Explain the room's lifecycle: how it was created and how it reaches a newer harness version (ready) | Kayden Clark | none | Genesis ran; the tour and its drift tests are green. | TK-002 - explain how a room comes to exist and how it changes version. |
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
