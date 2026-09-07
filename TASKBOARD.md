# Example Workbench - Taskboard

> Generated from LLM Workbench v2.1. See `RUNBOOK.md` ->
> Upgrading The Harness.

**Current focus:** The room explains itself: `node tour.mjs` prints the v2.1 room map and `node tests/tour.test.mjs` proves it matches the directory.  
**Owner:** Kayden Clark  
**Last updated:** 2026-09-06

This is the live work queue and proof ledger. Agents use it to decide what to
work on next. Keep strategy and long-term direction in `BLUEPRINT.md`; keep
commands and verification procedures in `RUNBOOK.md`.

## Executive Brief

Five lines for the owner who never reads code. Refresh it at the end of each work
session so a glance answers "where does this project stand?"

- **Shipping now:** `node tour.mjs` prints every control this v2.1 room has, what it owns, and why it is separate.
- **Health:** green - both commands pass and no placeholder remains in any control.
- **Decision needed:** none
- **Blocked on:** nothing
- **Next milestone:** none scheduled; T-002 (machine-readable map output) is the one open item, worth doing when someone wants to diff this branch's map against the other generation branches.

## Pending Decisions

Decisions only the owner should make. Agents surface tradeoffs here as product
choices - options, a recommendation, and the cost of choosing - and do not decide
them alone. Keep code-level detail out of this queue.

No decision is open. The table stays so the next agent adds a row here rather
than inventing another place.

| ID | Decision | Options | Recommendation | Cost / impact | Owner | Status |
|---|---|---|---|---|---|---|

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

A `claimed` or `in-progress` task that has gone stale (no update past one
working day) may be reclaimed per the reclaim rule in `AGENTS.md` -> Long
Session Control.

## Ready

| ID | Priority | Task | Source / why now | Touches | Proof required | Docs impact | Owner | Status | Last update |
|---|---:|---|---|---|---|---|---|---|---|
| T-002 | 1 | Add a `--json` flag to `tour.mjs` that prints `PLACES` as JSON, so the generation branches of this repository can be diffed mechanically instead of by eye | `BLUEPRINT.md` -> Build Order step 3; useful because every generation is a branch of the same repository | `tour.mjs`, `tests/tour.test.mjs` | `node tests/tour.test.mjs` with a new case that parses the JSON output; `node tour.mjs --json` | `README.md` Getting Started, `RUNBOOK.md` Run Locally, `BLUEPRINT.md` Commands | unassigned | ready | 2026-09-06 |

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
| T-001 | Make the room explain itself: `tour.mjs` prints the v2.1 room map and `tests/tour.test.mjs` proves it | 2026-09-06 | pass | 2026-09-06 / T-001 |

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
verification evidence. Use actual results, not stale claims. Milestone tasks
must fill the Demo column with a <1-minute demo artifact (screenshot, recording,
preview URL, or one-command demo); non-milestone rows may use `n/a`.

**Archival policy.** The proof log is append-only, but it should not grow without
bound. When it passes ~30 rows, move the oldest rows (keep the most recent ~30
here) into `TASKBOARD_ARCHIVE.md`, preserving them verbatim under a dated
heading. `TASKBOARD_ARCHIVE.md` is append-only too - archiving relocates history,
it never rewrites or deletes it. The `Done` table may be trimmed the same way,
leaving a pointer to the archive.

| Date | Task ID | Agent | Proof | Demo | Result | Docs | Remaining gap |
|---|---|---|---|---|---|---|---|
| 2026-09-06 | GENESIS | Claude | Followed `templates/GENESIS.md` Phases 0-7 from source commit `dd1ed326a1d55e1f2303aa233cc4d1bf6a0a4270`: filled the four control docs plus `README.md`, `HARNESS_FEEDBACK.md`, `CLAUDE.md`, `.claude/`; deleted `GENESIS.md` at Phase 7; the placeholder grep from `RUNBOOK.md` -> Test And Build returned no hits | `node tour.mjs` | pass | all seven controls written | none; T-002 is the one ready task |
| 2026-09-06 | T-001 | Claude | `node tests/tour.test.mjs` -> 9 tests, 9 pass, 0 fail, exit 0; `node --check tour.mjs` -> exit 0; `node /PATH/TO/LLM_WORKBENCH/tools/evaluate-workbench.mjs --path . --include-controls` at source commit `dd1ed326a1d55e1f2303aa233cc4d1bf6a0a4270` -> 105/113, only Team coordination missing (team templates not copied), controls 0/113 and 2/113 | `node tour.mjs` prints eleven places under `Example Workbench (v2.1, 2026-07-06) - room map` | pass | `README.md`, `BLUEPRINT.md`, `RUNBOOK.md` updated | none |
