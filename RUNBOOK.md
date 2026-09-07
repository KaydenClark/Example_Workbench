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
- git, and the `gh` CLI for pull requests in `KaydenClark/Example_Workbench`

Required accounts/services:

- GitHub, only for the repository itself; the room needs no account to run

Required local files:

- none. Every file the room needs is committed.

## Environment Configuration

There is no environment configuration and no `.env`; nothing to copy and no
variables to set, so the copy command and variable table from the template were
dropped. The rules still apply:

- Do not commit real `.env` files, tokens, local databases, logs, or private
  data.
- Keep secrets server-side or local-only.
- Prefer degraded states over fake data when an external source is unavailable.

## Install

```bash
git clone https://github.com/KaydenClark/Example_Workbench.git
cd Example_Workbench
git switch version/06-v2.3-late
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

- the heading
  `Example Workbench (v2.3 late integration with room brain, 2026-08-27) - room map`
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
grep -rnE '\[[A-Z][A-Z0-9_ -]+\]' . --include=*.md --include=*.json | grep -vE '\[\[|\]\('
node /PATH/TO/LLM_WORKBENCH/tools/spec-workbench.mjs doctor --path .
```

Expected result:

- `node --check` exits 0 with no output;
- the test run reports `# fail 0` and exits 0 (7 tests at the last verified
  run, recorded in `specs/S-001-self-explaining-room/SPEC.md`);
- the grep prints nothing: `[[wikilinks]]` in `MEMORY.md` and Markdown links
  are filtered out by the second `grep`, and no template placeholder is left in
  any control;
- doctor prints `ok - spec workbench doctor passed`.

### Spec Lifecycle And Retrieval

This room does not carry `spec-workbench.mjs`; the generation's README offers
copying it as optional and this room keeps its product to two files. Run the
tool from a checkout of LLM Workbench with `--path .` from the room root. Check
out commit `9e6c71b81f38d0696ac01834076a20d428207bde` (2026-08-27, the late
v2.3 contract this room was filled against) so the lifecycle rules and rendered
regions are the ones this room was verified with.

```bash
node /PATH/TO/LLM_WORKBENCH/tools/spec-workbench.mjs next --json --path .
node /PATH/TO/LLM_WORKBENCH/tools/spec-workbench.mjs show S-001 --path .
node /PATH/TO/LLM_WORKBENCH/tools/spec-workbench.mjs claim S-001 --agent NAME --path .
node /PATH/TO/LLM_WORKBENCH/tools/spec-workbench.mjs close S-001 \
  --proof "NAMED VERIFICATION" \
  --docs "DOCS UPDATED, or Docs checked; no update needed plus the reason" \
  --remaining-gap "GAP, or none" --path .
node /PATH/TO/LLM_WORKBENCH/tools/spec-workbench.mjs complete S-001 --path .
node /PATH/TO/LLM_WORKBENCH/tools/spec-workbench.mjs render --path .
node /PATH/TO/LLM_WORKBENCH/tools/spec-workbench.mjs doctor --path .
```

`next` returns one eligible ready ticket. `show` loads one stable work packet.
`render` updates only the marked Blueprint catalog and hot Taskboard regions.
`complete` requires every slice done, acceptance boxes checked, completion result
recorded, and evidence present; render then removes the spec from the hot board.
`--path` is accepted by every command although the usage line does not list it.

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

This room is a downstream project, not the template repository, so the static
evaluator runs from the same LLM Workbench checkout as the spec tool (commit
`9e6c71b81f38d0696ac01834076a20d428207bde`, see Spec Lifecycle And Retrieval)
against this directory:

```bash
node /PATH/TO/LLM_WORKBENCH/tools/evaluate-workbench.mjs --path . --include-controls
```

Expected result: a Markdown score table in which this room scores 106.6/113,
missing only the Team coordination area (`team templates/` was deliberately not
copied, see `README.md`), and beats both control candidates (last verified
2026-09-06, recorded in `specs/S-001-self-explaining-room/SPEC.md`).

The runnable trial framework (`evals/`, `python3 evals/score.py ...`) lives in
the harness repository, not here; this room has no task suite of its own and
runs no trials.

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

This section applies only to projects with seed data, migrations, imports,
local databases, or generated feeds. This room has none, so the section was
dropped as the template allows.

## Deployment Or Startup

This section applies only to projects with deployment, LaunchAgent, cron,
scheduler, or service startup behavior. This room has none; it runs from the
directory. The section was dropped as the template allows.

## Version-Control Procedures

Git authority and policy live in `AGENTS.md` -> Git Rules. Keep executable
commands and expected results here. This room is one commit on the branch
`version/06-v2.3-late` of `KaydenClark/Example_Workbench`; the repository's
`main` and `integration` already exist, and task work branches from `main`:

```bash
git status --short --branch
git switch -c claude/short-description main
git diff --stat main...HEAD
gh pr create --base integration --fill
```

Expected result: a clean tree on a task branch, a diff that touches only files
inside this room's edit scope, and a reviewable PR whose target is
`integration`; only the owner merges `integration` into `main`.

## Upgrading The Harness

These control docs were generated from a specific LLM Workbench version, recorded
in the `Generated from LLM Workbench v2.3` stamp at the top of each
doc. That stamp lets you tell when the project is running an older harness than
the current one.

This room is deliberately behind. It exists to show the late-v2.3 contract, so
do not run the steps below on it; a later generation is a later version branch
of the same repository. The procedure is kept here because it is part of what
v2.3 prescribed.

To upgrade:

1. Check the LLM Workbench repo's releases/changelog for what changed since
   `v2.3`.
2. Re-copy only the changed template sections; keep this project's filled-in
   specifics. Never let bracketed placeholders leak back into filled docs.
3. Update each doc's version stamp to the new version.
4. Re-run the full verification suite and record the upgrade in its owning spec.

Treat a harness upgrade like any other change: smallest correct diff, verified,
with proof. If a downstream lesson should flow *back* to the harness, capture it
per the project's `WORKBENCH_FEEDBACK` convention.

## Troubleshooting

| Symptom | Likely cause | Check | Fix |
|---|---|---|---|
| `Cannot find module .../tour.mjs` | command run from outside the room | `ls tour.mjs` | `cd` to the room root and rerun |
| test fails with `the tour names X, which does not exist` | a file was moved or renamed without updating `PLACES` | `ls` the named path | restore the file or update its `path` in `tour.mjs` |
| test fails with `... but the tour never explains it` | a Markdown file was added at the root | `ls *.md` | add a `PLACES` entry with real `owns` and `why` text |
| test fails with `prescribed control ... is missing` | a control this generation requires was deleted | `PRESCRIBED` in `tour.mjs` | restore the control from the generation's template |
| the placeholder grep prints a line | a bracketed template token was pasted in | read the printed line | replace the token with real content |
| doctor prints `render-drift` | a spec field changed after the last render | `render --path .` then `git diff` | commit the rendered regions; never hand-edit them |
| doctor or render prints `ENOENT ... specs` | `--path` is missing or points elsewhere | `pwd` is the room root | add `--path .` to the command |

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
