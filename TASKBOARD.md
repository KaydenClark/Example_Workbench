# Example Workbench - Taskboard

**Current focus:** The room explains itself: `node tour.mjs` prints the v2.0 room map and `node tests/tour.test.mjs` proves it matches the repository.  
**Owner:** Kayden Clark  
**Last updated:** 2026-09-06

This is the live work queue and proof ledger. Agents use it to decide what to
work on next. Keep strategy and long-term direction in `BLUEPRINT.md`; keep
commands and verification procedures in `RUNBOOK.md`.

## How To Use This Board

1. Read `BLUEPRINT.md` for context.
2. Pick the highest-priority `ready` task that is in scope and unclaimed.
3. Move it to `claimed` or `in-progress` before editing.
4. Do the smallest correct change.
5. Run the task's required proof and the relevant `RUNBOOK.md` checks.
6. Move the task to `done`, `blocked`, `deferred`, or `needs-review`.
7. Append one proof row with the actual result.

Do not rewrite existing proof rows. Append only.

## Status Values

| Status | Meaning |
|---|---|
| `ready` | Clear enough for the next agent to start. |
| `claimed` | An agent has picked it but has not edited yet. |
| `in-progress` | Work is underway. |
| `gated` | Implementation is done and waiting on verification, review, or merge. |
| `needs-review` | Needs human or manager review before more work. |
| `blocked` | Cannot proceed until the blocker is resolved. |
| `deferred` | Valid work, intentionally not next. |
| `done` | Proof exists and docs impact is resolved. |

## Ready

| ID | Priority | Task | Source / why now | Touches | Proof required | Docs impact | Owner | Status | Last update |
|---|---:|---|---|---|---|---|---|---|---|
| T-002 | 1 | Add a `--json` flag to `tour.mjs` that prints `PLACES` as JSON, so the room maps on different `version/` branches can be diffed mechanically instead of by eye | `BLUEPRINT.md` -> Build Order step 3; useful now that more than one generation branch exists | `tour.mjs`, `tests/tour.test.mjs` | `node tests/tour.test.mjs` with a new case that parses the JSON output; `node tour.mjs --json` | `README.md` commands, `RUNBOOK.md` Run Locally, `BLUEPRINT.md` Commands | unassigned | ready | 2026-09-06 |

## In Progress

Nothing is in progress.

| ID | Priority | Task | Owner | Started | Touches | Current note | Proof required | Status |
|---|---:|---|---|---|---|---|---|---|

## Blocked

Use this lane for roadblocks, slowdowns, and risks that affect current or
near-term work. If a blocker becomes a stable architectural risk, summarize it
in `BLUEPRINT.md`.

Nothing is blocked.

| ID | Task / area | Blocked on | Evidence | Next action | Owner | Status |
|---|---|---|---|---|---|---|

## Deferred

Valid work that should not be started yet.

Nothing is deferred.

| ID | Task | Deferred until | Why it matters | Revisit trigger |
|---|---|---|---|---|

## Done

Completed task summary. Detailed evidence belongs in the proof log below.

| ID | Task | Completed | Result | Proof row |
|---|---|---|---|---|
| T-001 | Make the room explain itself: `tour.mjs` prints the v2.0 room map and `tests/tour.test.mjs` proves it | 2026-09-06 | pass | 2026-09-06 / T-001 |

## Documentation Check

Documentation is part of done. Before marking a task complete, check:

| If the task changed... | Update or confirm |
|---|---|
| Product purpose, workflows, routes, data model, architecture, invariants, privacy/safety boundaries | `BLUEPRINT.md` |
| Task queue, blockers, deferred work, proof of completed work | `TASKBOARD.md` |
| Setup, install, run, test, build, deploy, recovery, environment, operations, evaluation procedure | `RUNBOOK.md` |
| User-facing setup, usage, demo, handoff, public instructions | `README.md` |
| Agent rules, scope, authority, verification policy | `AGENTS.md` |

If no docs need edits, record `Docs checked; no update needed` in the final
response and in the proof row's `Docs` field.

## Proof Log

Append a row when a task changes durable project state or produces durable
verification evidence. Use actual results, not stale claims.

| Date | Task ID | Agent | Proof | Result | Docs | Remaining gap |
|---|---|---|---|---|---|---|
| 2026-09-06 | T-001 | Claude | `node tour.mjs` -> prints eight places under `Example Workbench (v2.0 TASKBOARD, 2026-07-01) - room map`, exit 0; `node tests/tour.test.mjs` -> 8 tests, 8 pass, 0 fail, exit 0; `node --check tour.mjs` -> exit 0; placeholder grep from `RUNBOOK.md` -> no hits; `node /PATH/TO/LLM_WORKBENCH/tools/evaluate-workbench.mjs --path . --include-controls` at commit `80db4a1` -> 92/100 (Team coordination 0/8 by decision) vs controls 0 and 2 | pass | `AGENTS.md`, `BLUEPRINT.md`, `TASKBOARD.md`, `RUNBOOK.md` filled from `templates/`; `README.md` and `CLAUDE.md` written | none; T-002 is the one ready task |
