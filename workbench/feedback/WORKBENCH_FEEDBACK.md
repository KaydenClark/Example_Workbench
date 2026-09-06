# Example Workbench - Workbench Feedback

> Generated from LLM Workbench v3.1.2. Lives at
> `workbench/feedback/WORKBENCH_FEEDBACK.md`; see `RUNBOOK.md` -> Upgrading
> The Harness.

This is the return channel from this project back to the LLM Workbench harness.
When the control docs themselves (`AGENTS.md`, `BLUEPRINT.md`, `LEXICON.md`,
`TASKBOARD.md`, `RUNBOOK.md`, `GENESIS.md`) are unclear, wrong, missing guidance, or actively
slow the work down, record it here instead of silently working around it. The
owner carries these lessons back to LLM Workbench, where a change is validated
against `evals/` before it ships as "better".

This log is append-only. Do not edit or delete prior rows; add a new one.

## How To Log

Add a row whenever the harness (not this project's own code or docs) caused
friction or could be improved. Keep it concrete: name the doc and section, say
what happened, and propose a change if you have one.

| Date | Doc / section | What happened | Impact | Proposed change | Status |
|---|---|---|---|---|---|
| 2026-09-06 | templates/GENESIS.md -> Phase 6 | Genesis names `templates/wiki/MEMORY.project.md` as the room brain source but the readiness gate checks `workbench/wiki/MEMORY.md`; the rename is only implied by the sentence "copy ... to `workbench/wiki/MEMORY.md`". It is correct, just easy to miss when skimming the phase for commands. | low - cost one re-read, no wrong output | Consider showing the copy as a literal `cp` line beside the two `node` commands already shown in that phase. | new |
| 2026-09-06 | workbench-layout.mjs -> validate --genesis | Re-running the readiness gate after the first ticket closed returns `invalid` with `at least one ticket must be ready with blockers none`. The gate is correct - it scores an actionable first packet and `GENESIS.md` says run it once - but its failure message reads like a room defect, and an agent arriving later is likely to "fix" a healthy room to satisfy it. | medium - invites a wrong repair to a correct room | Have the gate say it is a one-time bootstrap check when it fails this predicate, and name `validate --project PATH` plus `doctor` as the steady-state checks. | new |

Status values: `new` (just logged) -> `sent` (carried back to LLM Workbench) ->
`landed` (a harness change shipped) or `declined` (kept as-is, with a reason).

## What Belongs Here vs. TASKBOARD

- This project's own work, bugs, and tasks -> `TASKBOARD.md`.
- Problems with the *harness rules themselves* -> here.

If a harness problem is also blocking this project right now, log it here **and**
open a `TASKBOARD.md` task for the local workaround, linking the two.
