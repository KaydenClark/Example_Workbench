# Example Workbench - Runbook

> Generated from LLM Workbench v2.3. See Upgrading The Harness
> below.

**Last reviewed:** 2026-09-06
**Runtime owner:** Kayden Clark
**Environment:** local

This file explains how to operate, verify, recover, and evaluate the project. It
should be boring, exact, and executable.

## Prerequisites

Required tools:

- Node.js 20 or later (the room was built and verified on Node 22; zero npm
  dependencies, nothing to install)
- git, and the `gh` CLI for pull requests in this repository
- a read-only checkout of `KaydenClark/LLM_Workbench` at commit
  `08ab78e5a59a68d2b04028fe71a2be488d5ae10e`, only for the spec tool and the
  evaluator (see Spec Lifecycle and Workbench Evaluation Commands below)

Required accounts/services:

- GitHub, only for pushing branches and opening pull requests; the room itself
  needs no account

Required local files:

- none. Every file the room needs is committed.

## Environment Configuration

There is no environment configuration and no `.env`; nothing to copy and no
variables to set. The rules still apply:

- Do not commit real `.env` files, tokens, local databases, logs, or private
  data.
- Keep secrets server-side or local-only.
- Prefer degraded states over fake data when an external source is unavailable.

## Install

```bash
git checkout version/05-v2.3
```

Expected result:

- nothing to install. You are inside the room and `node tour.mjs` runs directly.

## Run Locally

```bash
node tour.mjs
```

Open:

- the terminal output; there is no URL or service

Expected result:

- the heading `Example Workbench (v2.3 spec-centered progressive disclosure, 2026-07-16) - room map`
  followed by fourteen places, each with an `owns` line and a `why` line

## Test And Build

Fast check:

```bash
node tests/tour.test.mjs
```

Full verification:

```bash
node --check tour.mjs
node tests/tour.test.mjs
grep -rnE '\[[[:upper:]][[:upper:][:digit:]_ -]+\]' . --include=*.md --include=*.json
node /PATH/TO/LLM_WORKBENCH/tools/spec-workbench.mjs doctor --path .
```

Expected result:

- `node --check` exits 0 with no output;
- the test run reports `# fail 0` and exits 0 (10 tests at the last verified
  run, recorded in the spec evidence log);
- the grep prints nothing: no template placeholder is left in any control;
- doctor prints `ok - spec workbench doctor passed` and exits 0.

### Spec Lifecycle And Retrieval

The spec tool is not copied into this room. Run it from a checkout of LLM
Workbench at commit `08ab78e5a59a68d2b04028fe71a2be488d5ae10e` (the v2.3
promotion to `main`), from inside this room, with `--path .` naming the room
root. `/PATH/TO/LLM_WORKBENCH` is that checkout.

```bash
node /PATH/TO/LLM_WORKBENCH/tools/spec-workbench.mjs next --path . --json
node /PATH/TO/LLM_WORKBENCH/tools/spec-workbench.mjs show S-001 --path .
node /PATH/TO/LLM_WORKBENCH/tools/spec-workbench.mjs claim S-001 --path . --agent NAME
node /PATH/TO/LLM_WORKBENCH/tools/spec-workbench.mjs close S-001 --path . \
  --proof "named verification" \
  --docs "docs updated, or Docs checked; no update needed plus reason" \
  --remaining-gap "gap or none"
node /PATH/TO/LLM_WORKBENCH/tools/spec-workbench.mjs complete S-001 --path .
node /PATH/TO/LLM_WORKBENCH/tools/spec-workbench.mjs render --path .
node /PATH/TO/LLM_WORKBENCH/tools/spec-workbench.mjs doctor --path .
```

`next` returns one eligible ready ticket (TK-002 at the last verified run).
`show` loads one stable work packet. `render` rewrites only the marked catalog
region in `BLUEPRINT.md` and the hot region in `TASKBOARD.md`; the last run
printed `{"specs":1,"active":1}`. `doctor` reports duplicate IDs, invalid or
contradictory states, stale claims, missing evidence, broken links, and
generated-region drift; the last run passed. `complete` requires every slice
done, acceptance boxes checked, a completion result, and evidence present, so
it refuses S-001 while TK-002 is open.

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

This room is a downstream project, not the template repository, so the v2.3
static evaluator runs from the same LLM Workbench checkout as the spec tool
(commit `08ab78e5a59a68d2b04028fe71a2be488d5ae10e`), against this directory:

```bash
node /PATH/TO/LLM_WORKBENCH/tools/evaluate-workbench.mjs --path . --include-controls
```

Expected result: a Markdown score table for this room and the two control
candidates; the score at the last verified run is recorded in the spec evidence
log. The runnable trial framework (`evals/`, `python3 evals/score.py ...`)
lives in the harness repository, not here; this room has no task suite of its
own and runs no trials.

Real comparison runs may spend API budget. Size the run first and record the
model, conditions, task suite, trial count, and result path before making claims.

### Harness Feedback Loop

This project's `HARNESS_FEEDBACK.md` is the return channel to the upstream
harness. Lessons logged there feed harness changes, which must clear the same
bar as any other "better" claim: a proposed template change is `c3_candidate`
above, tested against the current docs on the same task suite before it ships.
Feedback flows out; validated improvements flow back in as a harness upgrade
(Upgrading The Harness, above). Taste alone never closes the loop; evidence does.

## Data Operations

This section applies only to projects with seed data, migrations, imports,
local databases, or generated feeds. This room has none, so the section was
dropped as the template allows.

## Deployment Or Startup

This section applies only to projects with deployment, LaunchAgent, cron,
scheduler, or service startup behavior. This room has none; it runs from the
checkout. The section was dropped as the template allows.

## Version-Control Procedures

Git authority and policy live in `AGENTS.md` -> Git Rules. Keep executable
commands and expected results here:

```bash
git status --short --branch
git switch -c claude/short-description main
git diff --stat integration...HEAD
gh pr create --base integration --fill
```

Expected result: a clean tree on the task branch, a diff that touches only this
room's files, and a pull request into `integration`. Only the owner merges
`integration` into `main`. This room is one commit on `version/05-v2.3`; the
repository's remote, `main`, and `integration` already exist and none was
created for it.

## Upgrading The Harness

These control docs were generated from a specific LLM Workbench version, recorded
in the `Generated from LLM Workbench v2.3` stamp at the top of each
doc. That stamp lets you tell when the project is running an older harness than
the current one.

This room is deliberately behind. It exists to show the v2.3 contract, so do
not run the steps below on it; later generations are later `version/` branches
of this repository, and the current contract is on `main`. The procedure is
kept here because it is part of what v2.3 prescribed.

To upgrade:

1. Check the LLM Workbench repo's releases/changelog for what changed since
   `v2.3`.
2. Re-copy only the changed template sections; keep this project's filled-in
   specifics. Never let bracketed placeholders leak back into filled docs.
3. Update each doc's version stamp to the new version.
4. Re-run the full verification suite and record the upgrade in its owning spec.

Treat a harness upgrade like any other change: smallest correct diff, verified,
with proof. If a downstream lesson should flow *back* to the harness, capture it
per the project's `HARNESS_FEEDBACK` convention.

## Troubleshooting

| Symptom | Likely cause | Check | Fix |
|---|---|---|---|
| `Cannot find module .../tour.mjs` | command run from outside the room | `pwd` is the repository root on `version/05-v2.3` | `cd` to the repository root and rerun |
| test fails with `the tour names X, which does not exist` | a file was moved or renamed without updating `PLACES` | `ls` the named path | restore the file or update its `path` in `tour.mjs` |
| test fails with `... sits at the root but the tour never explains it` | a Markdown file was added at the root | `ls *.md` | add a `PLACES` entry with real `owns` and `why` text |
| test fails with `placeholder leaked` | a bracketed template token was pasted in | the grep in Test And Build | replace the token with real content |
| `error: Cannot find module .../markdown-table.mjs` | `spec-workbench.mjs` was copied alone | `ls /PATH/TO/LLM_WORKBENCH/tools/markdown-table.mjs` | run the tool from the checkout, do not copy it |
| doctor prints `render-drift` | a spec field changed after the last render | `git diff BLUEPRINT.md TASKBOARD.md` | run `render --path .` and rerun doctor |
| doctor prints `broken-link` | a relative link in the spec points outside the room or at a missing file | open the named link | fix the link; links resolve from the spec's own folder |

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
