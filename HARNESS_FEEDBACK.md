# Example Workbench - Harness Feedback

> Generated from LLM Workbench v2.1. See `RUNBOOK.md` ->
> Upgrading The Harness.

This is the return channel from this project back to the LLM Workbench harness.
When the control docs themselves (`AGENTS.md`, `BLUEPRINT.md`, `TASKBOARD.md`,
`RUNBOOK.md`, `GENESIS.md`) are unclear, wrong, missing guidance, or actively
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
| 2026-09-06 | GENESIS.md -> Phase 7 vs README.md template -> How This Project Is Run | Phase 7 says to delete `GENESIS.md` or move it to an archive note at handoff, while the README template says the protocol "is preserved in `GENESIS.md`". The two disagree about whether the file survives. This room deleted it and rewrote the README paragraph to say so. | low | Make the README paragraph conditional ("if it was kept") or have Phase 7 name the archive location the README should link to | new |
| 2026-09-06 | .claude/README.md | The mapping table quotes the placeholder tokens from `settings.json` in its prose, so a filled room that greps for leaked placeholders gets false hits from a file that was never meant to be filled. This room rewrote the prose to name the real paths. | low | Say in the note that its bracketed tokens are quotations, or write the table without them | new |

Status values: `new` (just logged) -> `sent` (carried back to LLM Workbench) ->
`landed` (a harness change shipped) or `declined` (kept as-is, with a reason).

## What Belongs Here vs. TASKBOARD

- This project's own work, bugs, and tasks -> `TASKBOARD.md`.
- Problems with the *harness rules themselves* -> here.

If a harness problem is also blocking this project right now, log it here **and**
open a `TASKBOARD.md` task for the local workaround, linking the two.
