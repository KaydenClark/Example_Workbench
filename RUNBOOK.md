# Example Workbench - Runbook

> Generated from LLM Workbench v3.1.0. See Upgrading The Harness
> below.

**Last reviewed:** 2026-09-06
**Runtime owner:** Kayden Clark (owner); any agent may run every command here
**Environment:** local only

This file explains how to operate, verify, recover, and evaluate the project. It
should be boring, exact, and executable.

## Prerequisites

Required tools:

- Node.js 20 or newer (`node --version`)
- git, only to clone the repository; nothing here calls it

Required accounts/services:

- None. The room runs entirely offline.

Required local files:

- None. Everything the room needs is committed.

## Environment Configuration

None. The room reads no environment variables and has no `.env`, so there is
nothing to copy and the variable table below is empty on purpose.

| Variable | Purpose | Secret? | Example / Notes |
|---|---|---|---|
| none | The room is configured only by the files committed to it. | no | - |

Rules:

- Do not commit real `.env` files, tokens, local databases, logs, or private
  data.
- Keep secrets server-side or local-only.
- Prefer degraded states over fake data when an external source is unavailable.

## Install

```bash
node --version
```

Expected result:

- `v20` or newer prints. There is no dependency to install and no lockfile.

## Run Locally

```bash
node tour.mjs
```

Open:

- Nothing to open. The terminal output is the product.

Expected result:

- The heading `Example Workbench (v3.1.0 managed runtime and governance core, 2026-09-04) - room map`, then every root control, the manifest, every declared lane and collection, the spec, the room brain, the feedback channel, the tools receipt, and the two product files, each with `owns` and `why`.

## Test And Build

Fast check:

```bash
node tests/tour.test.mjs
```

Full verification:

```bash
node tests/tour.test.mjs
node --check tour.mjs
node workbench/tools/workbench-layout.mjs validate --project .
node workbench/tools/spec-workbench.mjs render
node workbench/tools/spec-workbench.mjs doctor
node /PATH/TO/LLM_WORKBENCH/workbench/tools/workbench-layout.mjs validate --project . --genesis
```

`/PATH/TO/LLM_WORKBENCH` is a checkout of `KaydenClark/LLM_Workbench` at
release v3.1.0, commit `4ce74f8de1da30a3bffd9286e32c3b63e417a08b`; the room's
own installed copy accepts `--genesis` too, and both were run.

Expected result:

- `tests/tour.test.mjs` reports every case passing and exits 0;
- `validate` prints `{"status":"valid",...}` from both the room's copy and the
  release checkout, and the `--genesis` run stays valid while one ticket is
  `ready` and one acceptance box is unchecked;
- `render` reports the two generated regions unchanged;
- `doctor` prints `ok - no blocking finding` and exits 0.

### Test Coverage Policy

Treat tests as the project specification, not as a comfort signal. The suite
should be strong enough that if someone accidentally deletes a meaningful line,
branch, route, data contract, workflow step, validation rule, or bug fix, at
least one test or documented manual check fails.

Coverage rules:

- Prefer red/green TDD: write or update the failing test first, confirm the
  expected failure, then implement the smallest fix.
- Run every relevant existing test before judging the suite.
- Keep tests that prove behavior a user, API consumer, operator, or future
  maintainer depends on.
- Improve tests that assert the wrong level, hide real failures, rely on stale
  fixtures, overuse snapshots, or pass without checking meaningful behavior.
- Remove tests that are stale, duplicated without adding a boundary, or pure
  bloat.
- If behavior cannot be tested in the current harness, record the exact reason
  and use the strongest concrete manual check available.

## Workbench Lifecycle, Diagnostics, And Decision Records

The project runs its own installed runtime tools from the manifest-declared
tools lane:

```bash
node workbench/tools/spec-workbench.mjs next --json
node workbench/tools/spec-workbench.mjs show S-001
node workbench/tools/spec-workbench.mjs claim S-001 --agent NAME
node workbench/tools/spec-workbench.mjs close S-001 --proof "..." --docs "..." --remaining-gap "..."
node workbench/tools/spec-workbench.mjs render
node workbench/tools/spec-workbench.mjs doctor
node workbench/tools/adr.mjs new --title "Decision title"
node workbench/tools/adr.mjs validate
node workbench/tools/adr.mjs register
```

`doctor` prints every registered finding with its severity and blocking
effect and exits non-zero only for `all` or `selection` findings; a
`selected-slice` finding is excluded by `next` and refused by `claim`, and an
`attention` finding stays visible without blocking. Decision records live in
`workbench/docs/adr/`; an accepted record names the control that carries its
rule in `canonicalized_in`, and `register` derives `REGISTER.md`.

## Evaluation And Benchmarking

Use this section to prove whether the workbench or project process is improving.
The goal is evidence, not taste.

### Benchmark-Driven Improvement

Before changing agent rules, control docs, evaluation criteria, or the working
process, capture the available guardrail or benchmark baseline. Put the intended
score movement or outcome hypothesis in the owning spec, then record the
before/after score and remaining recommendations after the change.

Use 100/100 as a deliberately hard north star, not the release gate. Regression
checks are the minimum ship gate. Never weaken a criterion to manufacture
progress, and do not treat a static coverage score as outcome evidence. If this
project has no executable benchmark yet, add one or state that the change cannot
yet be called better.

### Claims To Test

The harness or process is only worth calling better when it can support at least
one of these claims:

1. Better than no project instructions.
2. Better than a representative generic instruction file.
3. Better than the prior version on the same task suite.

### Evaluation Design

Use controlled conditions:

| Condition | What the agent gets | Purpose |
|---|---|---|
| `c0_none` | no project instructions | baseline |
| `c1_generic` | a generic `AGENTS.md` / `CLAUDE.md` style file | common alternative |
| `c2_current` | current project or template docs | current candidate |
| `c3_candidate` | proposed branch or changed docs | improvement test |

Score task outcomes, not how good the docs feel. Useful dimensions:

| Dimension | What it measures |
|---|---|
| Correctness | hidden or independent acceptance check passes |
| Scope adherence | changed files stay inside the task allowlist |
| Verification honesty | final claims match independently rerun checks |
| Docs upkeep | stale docs were updated or explicitly marked unchanged |

Run multiple trials per condition when using stochastic agents. Report effect
size and confidence interval when possible. Do not claim broad proof from one
run.

### Workbench Evaluation Commands

This room has no executable benchmark of its own; `tests/tour.test.mjs` is a
regression gate, not an outcome score. The static evaluator and the trial
framework live in the harness checkout, not in the room:

```bash
node /PATH/TO/LLM_WORKBENCH/tools/evaluate-workbench.mjs --path . --include-controls
```

Real comparison runs may spend API budget. Size the run first and record the
model, conditions, task suite, trial count, and result path before making claims.

### Harness Feedback Loop

This project's `WORKBENCH_FEEDBACK.md` is the return channel to the upstream
harness. Lessons logged there feed harness changes, which must clear the same
bar as any other "better" claim: a proposed template change is `c3_candidate`
above, tested against the current docs on the same task suite before it ships.
Feedback flows out; validated improvements flow back in as a harness upgrade
(Upgrading The Harness, above). Taste alone never closes the loop; evidence does.

## Data Operations

Not applicable. The room has no seed data, migrations, imports, local
databases, or generated feeds, so the template's seed, migration, and
backup commands are omitted here as the template allows.

## Deployment Or Startup

Not applicable. There is nothing to deploy and no long-running process; the
room is read where it sits and run with `node tour.mjs`, so the template's
start, stop, and log commands are omitted here as the template allows.

## Version-Control Procedures

Git authority and policy live in `AGENTS.md` -> Git Rules. Keep executable
commands and expected results here:

```bash
git status --short --branch
git switch -c claude/s001-<slug> main
git diff --check && git diff main...HEAD --stat
gh pr create --base integration --head claude/s001-<slug>
```

Expected result: a clean working tree, a task branch cut from `main`, and a PR
into `integration` whose diff contains only the slice it claims. This branch
itself is a historical generation and receives no task branches.

## Upgrading The Harness

These control docs were generated from a specific LLM Workbench version, recorded
in the `Generated from LLM Workbench v3.1.0` stamp at the top of each
doc. That stamp lets you tell when the project is running an older harness than
the current one.

To upgrade:

1. Check the LLM Workbench repo's releases/changelog for what changed since
   `v3.1.0`.
2. Re-copy only the changed template sections; keep this project's filled-in
   specifics. Never let bracketed placeholders leak back into filled docs.
3. Update each doc's version stamp to the new version.
4. Re-run the full verification suite and record the upgrade in its owning spec.

The runtime tools in `workbench/tools/` are Workbench-managed: their receipt
(`.workbench-tools.json`) records the exact source release, commit, and file
hashes. Verify them with `node /PATH/TO/LLM_WORKBENCH/tools/workbench-tools.mjs verify --project .`
and replace them only through `update --explicit-update`, which backs up the
previous files and records a rollback path. Never hand-edit a managed tool.

Treat a harness upgrade like any other change: smallest correct diff, verified,
with proof. If a downstream lesson should flow *back* to the harness, capture it
per the project's `WORKBENCH_FEEDBACK` convention.

## Troubleshooting

| Symptom | Likely cause | Check | Fix |
|---|---|---|---|
| `every lane the manifest declares is described` or the collection case fails | A lane or collection was added to `workbench/manifest.json` and never described | `node tests/tour.test.mjs` | Add the place to `PLACES` in `tour.mjs` with what it owns and why |
| `every Markdown document at the room root is described` fails | A new `.md` file was put at the root | `ls *.md` | Describe it in `PLACES`, or move it into a support lane; the root keeps seven controls |
| `validate --genesis` returns `unfilled-control` or `version-mismatch` | A control lost its `Generated from LLM Workbench v3.1.0` stamp or a placeholder leaked back | `grep -rnE '\[[A-Z][A-Z0-9_ -]+\]' --include=*.md .` | Restore the stamp or fill the placeholder |
| `doctor` reports `tools-receipt-drift` or `tools-receipt-missing` | A managed tool was hand-edited or the receipt was removed | `node /PATH/TO/LLM_WORKBENCH/tools/workbench-tools.mjs verify --project .` | Restore through `update --explicit-update` or `rollback`; never hand-edit the lane |

## Recovery And Rollback

If a change fails:

1. Identify the touched files and failing command.
2. Revert only the smallest change needed, preserving user work.
3. Rerun the failing verification command.
4. Update the owning spec with the result and remaining gap, then render.

Do not delete data, reset databases, rewrite history, or rotate secrets unless
the user explicitly approves that action.

## Operational Proof

If a command changed durable project state, append evidence to the owning spec.
For routine read-only runs, a final response note is enough.
