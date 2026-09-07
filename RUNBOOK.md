# Example Workbench - Runbook

> Generated from LLM Workbench v3.0.0. See Upgrading The Harness
> below.

**Last reviewed:** 2026-09-06
**Runtime owner:** Kayden Clark (owner); any agent may run every command here.
**Environment:** local only

This file explains how to operate, verify, recover, and evaluate the project. It
should be boring, exact, and executable.

## Prerequisites

Required tools:

- Node.js 20 or newer (`node --version`). Nothing else.
- A checkout of `KaydenClark/LLM_Workbench` for the harness commands below
  (see Workbench Tooling At This Generation).

Required accounts/services:

- None. The room runs entirely offline.

Required local files:

- None. Everything the room needs is committed.

## Environment Configuration

None. This room reads no environment variables and holds no configuration
outside the files committed to it. There is no example file to copy:

```bash
node --version   # the only environment check; v20 or newer
```

Required variables:

| Variable | Purpose | Secret? | Example / Notes |
|---|---|---|---|
| none | The room reads no environment variables. | no | Nothing to set. |

Rules:

- Do not commit real `.env` files, tokens, local databases, logs, or private
  data.
- Keep secrets server-side or local-only.
- Prefer degraded states over fake data when an external source is unavailable.

## Install

```bash
node --version   # v20 or newer. The room has no dependencies.
```

Expected result:

- `node --version` prints v20 or newer. There is no install step to succeed or fail.

## Run Locally

```bash
node tour.mjs
```

Open:

- Nothing to open. The output is the product.

Expected result:

- The heading `Example Workbench (v3.0.0 portable workbench root, 2026-08-31) - room map`
  followed by every root control, the scope file, the manifest, every declared
  lane, the spec, the room brain, the feedback log, and the two product files.

## Test And Build

Fast check:

```bash
node tests/tour.test.mjs
```

Full verification:

```bash
node tests/tour.test.mjs
node --check tour.mjs
node /PATH/TO/LLM_WORKBENCH/tools/workbench-layout.mjs validate --project . --genesis
node /PATH/TO/LLM_WORKBENCH/tools/spec-workbench.mjs doctor --path .
```

Expected result:

- `tests/tour.test.mjs` reports `# pass 8` and `# fail 0`; `node --check`
  prints nothing; `validate --genesis` prints `{"status":"valid",...}`; and
  `doctor` prints `ok - spec workbench doctor passed` and exits 0.

### Workbench Tooling At This Generation

At v3.0.0 the spec tool and layout helper ship with the harness, not with the
room. `/PATH/TO/LLM_WORKBENCH` is a checkout of
`https://github.com/KaydenClark/LLM_Workbench` at commit
`d80d14c531c4bece9e2978d11e92e5a5d7bd77a5` (v3.0.0, 2026-08-31); check out
that commit before running any command that names the path, because later
harness versions move these tools into the room's own `workbench/tools/` lane
and change their arguments. Every command runs from inside this room; `--path .`
points `spec-workbench.mjs` at the room and `--project .` does the same for
`workbench-layout.mjs`. Without `--path` the spec tool reads the current
directory, which is the room when you run it from here.

```bash
node /PATH/TO/LLM_WORKBENCH/tools/spec-workbench.mjs next --path . --json
node /PATH/TO/LLM_WORKBENCH/tools/spec-workbench.mjs show S-001 --path .
node /PATH/TO/LLM_WORKBENCH/tools/spec-workbench.mjs claim S-001 --agent NAME --path .
node /PATH/TO/LLM_WORKBENCH/tools/spec-workbench.mjs close S-001 --proof "..." --docs "..." --remaining-gap "..." --path .
node /PATH/TO/LLM_WORKBENCH/tools/spec-workbench.mjs render --path .
node /PATH/TO/LLM_WORKBENCH/tools/spec-workbench.mjs doctor --path .
node /PATH/TO/LLM_WORKBENCH/tools/workbench-layout.mjs validate --project . --genesis
```

`render` rewrites only the marked catalog region of `BLUEPRINT.md` and the hot
region of `TASKBOARD.md`; `doctor` reports render drift, broken links, unstable
paths, stale claims, and done tickets without proof. The `init` command that
created `workbench/manifest.json` and the five lanes was run once at Genesis and
refuses to run again where a manifest exists.

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

For this template repo, the static evaluator checks control-surface coverage:

```bash
node tools/test-evaluate-workbench.mjs
node tools/evaluate-workbench.mjs --path . --include-controls
```

The runnable trial framework lives in `evals/`:

```bash
python3 evals/results/_make_selftest.py
python3 evals/score.py evals/results/_pipeline_selftest.jsonl --baseline c0_none
```

Real comparison runs may spend API budget. Size the run first and record the
model, conditions, task suite, trial count, and result path before making claims.

This room has no `tools/` or `evals/` of its own; those commands run in the
harness checkout, against this room, when the owner wants a score.

### Harness Feedback Loop

This project's `WORKBENCH_FEEDBACK.md` is the return channel to the upstream
harness. Lessons logged there feed harness changes, which must clear the same
bar as any other "better" claim: a proposed template change is `c3_candidate`
above, tested against the current docs on the same task suite before it ships.
Feedback flows out; validated improvements flow back in as a harness upgrade
(Upgrading The Harness, above). Taste alone never closes the loop; evidence does.

## Data Operations

None. The room has no seed data, migrations, imports, local databases, or
generated feeds; the template's seed, migration, and backup blocks are dropped
as the template allows. Its only persistent state is the files in the repository.

## Deployment Or Startup

None. There is nothing to deploy and no long-running process; the template's
start, stop, and log blocks are dropped as the template allows. The room is
read where it is cloned and run with `node tour.mjs`.

## Version-Control Procedures

Git authority and policy live in `AGENTS.md` -> Git Rules. Keep executable
commands and expected results here:

```bash
git status --short --branch
git switch -c claude/s001-<slug> integration
git diff --check && git diff integration...HEAD --stat
gh pr create --base integration --head claude/s001-<slug>
```

Expected result: a clean working tree, a branch based on `integration`, and a
PR whose diff contains only the slice it claims. This room itself is one commit
on `version/07-v3.0.0`; the repository already has `main` and `integration`.

## Upgrading The Harness

These control docs were generated from a specific LLM Workbench version, recorded
in the `Generated from LLM Workbench v3.0.0` stamp at the top of each
doc. That stamp lets you tell when the project is running an older harness than
the current one.

To upgrade:

1. Check the LLM Workbench repo's releases/changelog for what changed since
   `v3.0.0`.
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
| `every control this generation prescribes is present and described` fails | A prescribed control was removed, or a place was dropped from `PLACES` | `node tests/tour.test.mjs` | Restore the file or add the place to `PLACES` in `tour.mjs`, with what it owns and why |
| `every lane the manifest declares is a real directory and is described` fails | A lane in `workbench/manifest.json` has no directory or no place | `cat workbench/manifest.json` | Create the lane directory or describe it in `tour.mjs` |
| `doctor` reports `render-drift` | The catalog or hot board was hand-edited, or the spec changed after the last render | `node /PATH/TO/LLM_WORKBENCH/tools/spec-workbench.mjs doctor --path .` | Run `render --path .` and never edit inside the markers |
| `doctor` reports `broken-link` or `unstable-path` | The spec links to a path that moved, or its folder does not start `workbench/specs/S-001-` | `show S-001 --path .` | Fix the link; never move a spec folder |
| `validate` reports `invalid-lane` or `invalid-skill-policy` | `workbench/manifest.json` was hand-edited away from the v3.0.0 shape | `node /PATH/TO/LLM_WORKBENCH/tools/workbench-layout.mjs validate --project .` | Restore the five lanes and the closed 12-skill policy exactly as `init` wrote them |
| `error: Usage: spec-workbench.mjs ...` | The command name or an unknown option was passed | re-read Workbench Tooling At This Generation | Use only `next`, `show`, `claim`, `close`, `complete`, `render`, `doctor` with `--path .` |

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
