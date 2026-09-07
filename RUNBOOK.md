# Example Workbench - Runbook

**Last reviewed:** 2026-09-06 ← update whenever any section content changes  
**Runtime owner:** Kayden Clark  
**Environment:** local

This file explains how to operate the project. It should be boring, exact, and executable.

## Prerequisites

Required tools:

- Node.js 20 or newer (`node --version`)
- Git, only to check out the repository

Required accounts/services:

- none

Required local files:

- none. The room is complete as checked out.

The templates this room was filled from came from LLM Workbench at commit `a2cdd4548d895461c3d27a6da34740d8c76ccdd5`. That generation shipped no tooling that runs against a room, so there is no render, validate, or doctor command to record here. To compare a control against its template, check out that commit of `/PATH/TO/LLM_WORKBENCH` and read the same-named file at its root.

## Environment Configuration

Create local config from the example:

```bash
# none. The room reads no environment variables and has no example config.
```

Required variables:

| Variable | Purpose | Secret? | Example / Notes |
|---|---|---|---|
| none | | | |

Rules:

- Do not commit real `.env` files, tokens, local databases, logs, or private data.
- Keep secrets server-side or local-only.
- Prefer degraded states over fake data when an external source is unavailable.

## Install

```bash
# nothing to install: zero dependencies, no package.json
node --version
```

Expected result:

- a version of `v20.0.0` or newer is printed.

## Run Locally

```bash
# from the repository root
node tour.mjs
```

Open:

- nothing to open; the map prints to the terminal.

Expected result:

- the first non-blank line is `Example Workbench (v1 ROADMAP, first public release, 2026-06-22) - room map`, followed by one block per file with `owns` and `why` fields.

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

- the test run reports all tests passing and zero failures; `node --check` prints nothing; the placeholder scan prints nothing. There is no build step.

## Data Operations

Not applicable and left in place as the template allows: the project has no seed data, migrations, imports, local databases, or generated feeds.

## Deployment Or Startup

Not applicable and left in place as the template allows: the project has no deployment, LaunchAgent, cron, scheduler, or service startup behavior.

## Troubleshooting

| Symptom | Likely cause | Check | Fix |
|---|---|---|---|
| `Cannot find module '.../tour.mjs'` | Command run from outside the repository root | `ls tour.mjs` succeeds | `cd` to the repository root and rerun |
| `SyntaxError: Cannot use import statement outside a module` or `node:test` not found | Node older than 20 | `node --version` | Install Node.js 20 or newer |
| Test fails with `the tour names X, which does not exist` | A file named in `PLACES` was moved or deleted | `ls` the named path | Restore the file or update `PLACES` in `tour.mjs` |
| Test fails with `X sits at the room root but the tour never explains it` | A `.md` file was added without a `PLACES` entry | `ls *.md` | Add an entry with real `owns` and `why` text |

## Recovery And Rollback

If a change fails:

1. `git checkout -- .` from the repository root to restore the room from the last commit on `version/01-v1-roadmap`.
2. `node tests/tour.test.mjs` from the room directory to confirm the restored state passes.
3. Append a row to `ROADMAP.md` Verification Log describing what was rolled back and why.

Do not delete data, reset databases, rewrite history, or rotate secrets unless the user explicitly approves that action.

## Operational Proof

If a command in this runbook changed durable project state, append a row to the `ROADMAP.md` Verification Log. For routine local runs that do not change state, a final response note is enough.
