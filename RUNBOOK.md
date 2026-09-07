# Example Workbench (v1.1 anti-drift) - Runbook

**Last reviewed:** 2026-09-06 <- update whenever any section content changes  
**Runtime owner:** Kayden Clark  
**Environment:** local

This file explains how to operate the project. It should be boring, exact, and executable.

## Prerequisites

Required tools:

- Node.js 20 or newer (`node --version`); the room was verified on v22.22.2
- git, for the branch and PR workflow in Version Control below; the tour itself never calls it

Required accounts/services:

- none

Required local files:

- none; every command below reads only files inside the repository root

## Environment Configuration

Create local config from the example:

```bash
# nothing to copy: this room has no .env, no example file, and reads no environment variables
```

Required variables:

| Variable | Purpose | Secret? | Example / Notes |
|---|---|---|---|
| none | the tour and its test take no configuration | no | leave the environment as it is |

Rules:

- Do not commit real `.env` files, tokens, local databases, logs, or private data.
- Keep secrets server-side or local-only.
- Prefer degraded states over fake data when an external source is unavailable.

## Install

```bash
# nothing to install: zero dependencies, no package.json
git clone https://github.com/KaydenClark/Example_Workbench
cd Example_Workbench
git checkout version/02-v1.1-anti-drift
```

Expected result:

- `node --version` reports 20 or newer, `git branch --show-current` prints `version/02-v1.1-anti-drift`, and the working directory is the repository root.

## Run Locally

```bash
node tour.mjs
```

Open:

- the terminal output; there is no URL or service endpoint

Expected result:

- the first non-blank line is `Example Workbench (v1.1 anti-drift and version control, 2026-06-25) - room map`, followed by one block per place with `owns` and `why` lines, and a closing hint to run the test.

## Test And Build

Fast check:

```bash
node tests/tour.test.mjs
```

Full verification:

```bash
node tests/tour.test.mjs
node --check tour.mjs
grep -rnE '\[[[:upper:]][[:upper:][:digit:]_ -]+\]' . --include=*.md --include=*.json
```

Expected result:

- the test run reports every test passing and `fail 0`; `node --check` prints nothing; the placeholder grep prints nothing and exits 1 (no match is the pass condition).

## Data Operations

Use this section only if the project has seed data, migrations, imports, local databases, or generated feeds. Not applicable: this room has no data, so the seed, migration, and backup commands were deleted from this copy.

## Deployment Or Startup

Use this section only if the project has deployment, LaunchAgent, cron, scheduler, or service startup behavior. Not applicable: the tour runs on demand and nothing is started, scheduled, or deployed, so the start, stop, and log commands were deleted from this copy.

## Version Control

Conventions for commits and pull requests in this project.

The repository is `https://github.com/KaydenClark/Example_Workbench`. Its default branch is `main`, its staging branch is `integration`, and each historical harness generation is one commit on a `version/NN-slug` branch; this room is `version/02-v1.1-anti-drift`. The remote and both long-lived branches already exist, so no agent creates them.

- Branch from the default branch; do not commit directly to it. Branch names: `claude/<short-description>` or `codex/<short-description>`, one branch per task, created from `main`; pull requests target `integration`, and only the owner merges `integration` into `main`. A `version/NN-slug` branch is a frozen record, not a working branch: a fix to this room is a new commit on `version/02-v1.1-anti-drift`, never a rebase of it and never a merge into `main`.
- Commit messages: imperative subject of at most 72 characters, the "why" in the body, ending with the agent's `Co-Authored-By` trailer. One logical change per commit.
- Run `git status` before committing. Never commit secrets, `.env` files, local databases, logs, build output, or generated artifacts.
- Open a pull request when the task is complete and verified. The PR description states what changed, why, and how it was verified, mirror the `ROADMAP.md` Verification Log row.
- Do not rewrite published history or force-push shared branches unless the user explicitly approves.

## Troubleshooting

| Symptom | Likely cause | Check | Fix |
|---|---|---|---|
| `SyntaxError: Cannot use import statement` | Node older than 20, or the file was renamed away from `.mjs` | `node --version`; `ls tour.mjs` | Install Node 20+ or restore the `.mjs` extension |
| `Cannot find module '.../tour.mjs'` | Command run from outside the repository root | `pwd`; `ls tour.mjs` | `cd` to the repository root and rerun |
| A test fails with `the tour names X, which does not exist` | A control was renamed or removed without updating `PLACES` | `ls` the repository root and compare with `PLACES` in `tour.mjs` | Restore the file or remove its entry in the same change |
| A test fails with `... is not described by the tour` | A new `.md` file was added at the root without a `PLACES` entry | `ls *.md` | Add an entry with a real `owns` and `why`, or move the file out of the root |
| The placeholder grep prints a line | A bracketed upper-case template placeholder was left in a control | Open the file at the reported line | Replace it with real content |

## Recovery And Rollback

If a change fails:

1. `git checkout -- .` from the repository root to restore the room to the last committed state on `version/02-v1.1-anti-drift`, or `git stash` if the change should be kept for inspection.
2. Run `node tests/tour.test.mjs` from the repository root and confirm it passes again.
3. Append a Verification Log row to `ROADMAP.md` naming the failed change, and stop after a second identical failure as `AGENTS.md` -> When To Ask, Proceed, Or Stop requires.

Do not delete data, reset databases, rewrite history, or rotate secrets unless the user explicitly approves that action.

## Operational Proof

If a command in this runbook changed durable project state, append a row to the `ROADMAP.md` Verification Log. For routine local runs that do not change state, a final response note is enough.
