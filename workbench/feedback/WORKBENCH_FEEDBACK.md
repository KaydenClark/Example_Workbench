# Example Workbench - Workbench Feedback

> Generated from LLM Workbench v3.0.0. See `RUNBOOK.md` ->
> Upgrading The Harness.

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
| 2026-09-06 | templates/README.md -> How This Project Is Run; templates/AGENTS.md -> Edit Scope; templates/Wiki/README.md -> Instantiation | The v3.0.0 templates still link `MEMORY.md` and `WORKBENCH_FEEDBACK.md` at the room root and name `specs/`, while GENESIS Phase 6 and `workbench-layout.mjs init` put them in the manifest-declared `workbench/` lanes. Genesis had to choose; it chose the lanes. | low - a few minutes deciding which of two harness sources wins | Point the README, AGENTS, and Wiki templates at `workbench/specs/`, `workbench/wiki/MEMORY.md`, and `workbench/feedback/WORKBENCH_FEEDBACK.md` so the copy-ready templates match the layout `init` creates | new |

Status values: `new` (just logged) -> `sent` (carried back to LLM Workbench) ->
`landed` (a harness change shipped) or `declined` (kept as-is, with a reason).

## What Belongs Here vs. TASKBOARD

- This project's own work, bugs, and tasks -> `TASKBOARD.md`.
- Problems with the *harness rules themselves* -> here.

If a harness problem is also blocking this project right now, log it here **and**
open a `TASKBOARD.md` task for the local workaround, linking the two.
