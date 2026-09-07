# Example Workbench - Workbench Feedback

> Generated from LLM Workbench v3.1.1. Lives at
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
| 2026-09-06 | templates/GENESIS.md -> Phase 4 and templates/.claude/README.md | Phase 4 says to fill `.claude/settings.json` from the drawn scope, and the sibling `.claude/README.md` explains the mapping, but that README itself contains bracketed placeholder names in its prose. Copying it beside the filled settings file makes the no-placeholder sweep hit template guidance; it was copied with those two lines filled for this room, and nothing in Phase 4 says whether it is meant to travel with the settings file. | low - one judgement call, no wrong output | Say in Phase 4 that `.claude/README.md` is template-side guidance and stays behind, or ship it without literal placeholder tokens. | new |

Status values: `new` (just logged) -> `sent` (carried back to LLM Workbench) ->
`landed` (a harness change shipped) or `declined` (kept as-is, with a reason).

## What Belongs Here vs. TASKBOARD

- This project's own work, bugs, and tasks -> `TASKBOARD.md`.
- Problems with the *harness rules themselves* -> here.

If a harness problem is also blocking this project right now, log it here **and**
open a `TASKBOARD.md` task for the local workaround, linking the two.
