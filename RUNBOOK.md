# Example Workbench - Runbook

**Last reviewed:** 2026-09-06
**Runtime owner:** Kayden Clark
**Environment:** local

This file explains how to operate, verify, recover, and evaluate the project. It
should be boring, exact, and executable.

## Prerequisites

Required tools:

- Node.js 20 or later (the room was built and verified on Node 22; zero npm
  dependencies, nothing to install)
- git, and the `gh` CLI for pull requests

Required accounts/services:

- GitHub, only for `https://github.com/KaydenClark/Example_Workbench`; the
  room itself calls no service

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
git clone https://github.com/KaydenClark/Example_Workbench.git
cd Example_Workbench
git checkout version/03-v2.0-taskboard
```

Expected result:

- nothing to install. You are at the repository root and `node tour.mjs` runs
  directly.

## Run Locally

```bash
node tour.mjs
```

Open:

- the terminal output; there is no URL or service

Expected result:

- the heading `Example Workbench (v2.0 TASKBOARD, 2026-07-01) - room map`
  followed by eight places, each with an `owns` line and a `why` line, and
  exit code 0

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
```

Expected result:

- `node --check` exits 0 with no output;
- the test run reports `# fail 0` and exits 0 (8 tests at the last verified
  run, recorded in `TASKBOARD.md`);
- the grep prints nothing: no template placeholder is left in any control.

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

This room is a downstream project, not the template repository, so the v2.0
static evaluator runs from a checkout of LLM Workbench against this root.
Check out commit `80db4a10007b2fb4617abd1bd861389ba5317a21` (the merge of the
dogfood-taskboard pull request, 2026-07-01) so the rubric is the one this room
was filled against.

```bash
node /PATH/TO/LLM_WORKBENCH/tools/evaluate-workbench.mjs --path . --include-controls
```

Expected result: a Markdown score table in which this room scores 92/100 and
beats both control candidates. The eight missing points are the whole Team
coordination area, which requires `team templates/` files this single-agent
room deliberately does not carry (`BLUEPRINT.md` -> Design Decisions). Last
verified 2026-09-06, recorded in `TASKBOARD.md`.

The runnable trial framework (`evals/`, `python3 evals/score.py ...`) lives in
the harness repository, not here; this room has no task suite of its own and
runs no trials.

Real comparison runs may spend API budget. Size the run first and record the
model, conditions, task suite, trial count, and result path before making claims.

## Data Operations

This section applies only to projects with seed data, migrations, imports,
local databases, or generated feeds. This room has none, so the section was
dropped as the template allows.

## Deployment Or Startup

This section applies only to projects with deployment, LaunchAgent, cron,
scheduler, or service startup behavior. This room has none; it runs from the
repository root. The section was dropped as the template allows.

## Version Control

Conventions for commits and pull requests in this project.

- Branch from the default branch `main`; do not commit directly to it or to
  the staging branch `integration`. Branch names: one branch per task,
  `claude/short-description` or `codex/short-description`. This room is one
  commit on the version branch `version/03-v2.0-taskboard`; the repository
  already has its remote and its `integration` branch, so neither is created
  here.
- Commit messages: imperative subject <= 72 chars, the why in the body. One
  logical change per commit.
- Run `git status` before committing.
- Never commit secrets, `.env` files, local databases, logs, build output, or
  generated artifacts.
- Open a pull request when the task is complete and verified. The default
  target is `integration`; only the owner merges `integration` into `main`.
  The PR description states what changed, why, risks, and how it was verified.
- Do not rewrite published history or force-push shared branches unless the user
  explicitly approves.

## Troubleshooting

| Symptom | Likely cause | Check | Fix |
|---|---|---|---|
| `Cannot find module .../tour.mjs` | command run from outside the repository root | `ls tour.mjs` | `cd` to the root and rerun |
| test fails with `the tour names X, which does not exist` | a file was moved or renamed without updating `PLACES` | `ls` the named path | restore the file or update its `path` in `tour.mjs` |
| test fails with `... the tour never explains it` | a Markdown file was added at the root | `ls *.md` | add a `PLACES` entry with real `owns` and `why` text |
| test fails with `still holds template placeholders` | a bracketed template token was pasted in | the grep in Test And Build | replace the token with real content |
| evaluator prints `ENOENT ... scandir` | the checkout path or `--path` is wrong | `ls /PATH/TO/LLM_WORKBENCH/tools/evaluate-workbench.mjs` | fix the path; the tool takes `--path`, not a bare argument |

## Recovery And Rollback

If a change fails:

1. Identify the touched files and failing command.
2. Revert only the smallest change needed, preserving user work.
3. Rerun the failing verification command.
4. Update `TASKBOARD.md` with the result and remaining gap.

Do not delete data, reset databases, rewrite history, or rotate secrets unless
the user explicitly approves that action.

## Operational Proof

If a command in this runbook changed durable project state, append a row to the
`TASKBOARD.md` proof log. For routine local runs that do not change state, a
final response note is enough.
