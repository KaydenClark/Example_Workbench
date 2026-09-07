# Example Workbench - Workbench Feedback

> Generated from LLM Workbench v3.1.0. Lives at
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
| 2026-09-06 | GENESIS.md -> What A Finished Bootstrap Must Prove; `workbench-layout.mjs validate --genesis` | The readiness gate reports one failing control per run (`RUNBOOK.md must be an ordinary file`) and stops, so a bootstrap that is missing several controls learns about them one gate run at a time. | low - four extra runs during this Genesis, no wrong result | Report every missing or unfilled root control in one `validate --genesis` result, the way the first-spec check already lists stray `entries` | new |
| 2026-09-06 | README.md template -> How This Project Is Run | The template says the Genesis protocol "is preserved in `GENESIS.md`", while `GENESIS.md` Phase 7 says to delete or archive that file after handoff. A room that follows Phase 7 has to rewrite the README sentence by hand. | low | Word the README paragraph for both outcomes, for example "was run once at start; keep or archive it per Phase 7" | new |

Status values: `new` (just logged) -> `sent` (carried back to LLM Workbench) ->
`landed` (a harness change shipped) or `declined` (kept as-is, with a reason).

## What Belongs Here vs. TASKBOARD

- This project's own work, bugs, and tasks -> `TASKBOARD.md`.
- Problems with the *harness rules themselves* -> here.

If a harness problem is also blocking this project right now, log it here **and**
open a `TASKBOARD.md` task for the local workaround, linking the two.
