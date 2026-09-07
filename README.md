# Example Workbench (v1.1 anti-drift)

> Historical example: LLM Workbench v1.1 anti-drift and version control, 2026-06-25, source commit 8572dd17f8ee97603225be6cdff924c0d767521b, dated 2026-06-25. Built by hand from templates on 2026-09-06. Branch version/02-v1.1-anti-drift of KaydenClark/Example_Workbench.

A filled copy of the LLM Workbench templates as they stood after PR #1
"Harness upgrades: anti-drift, version control, multi-agent write safety"
(commit fb406e1, merged as 8572dd1). The product is a self-describing tour:
one command prints what every file in this room is for and why it is kept
apart from the others, and one command proves that explanation still matches
the room. The room is one commit on the `version/02-v1.1-anti-drift` branch
of `KaydenClark/Example_Workbench`; the v3.1.2 room lives on `main`, and each
earlier harness generation has a `version/NN-slug` branch of its own, so the
owner can check them out and read the generations side by side.

```bash
node tour.mjs               # the room map: what each file owns, and why
node tests/tour.test.mjs    # proof that the map still matches the room
```

Both commands run from the repository root and need only Node.js 20+.

## What This Contains

The v1.1 harness shipped five copy-ready templates and this room fills all of
them, preserving each template's sections, order, and wording:

- `AGENTS.md` - agent behavior, authority order, read/edit scope, TDD rules,
  documentation ownership, and proof-of-done requirements. New at this
  generation: the "Staying On Track" anti-drift protocol, the "When To Ask,
  Proceed, Or Stop" rule, and the re-read-before-append rule for the shared
  Verification Log.
- `BLUEPRINT.md` - stable project identity, architecture, invariants, and
  safety boundaries.
- `ROADMAP.md` - current state, next work, blockers, backlog, and verification
  log. New at this generation: Next Tasks are checkboxes, the live progress
  ledger an agent re-reads after a context summary.
- `RUNBOOK.md` - setup, run, test, build, troubleshooting, and recovery
  commands. New at this generation: a Version Control section with branch,
  commit, and PR conventions and the never-commit list, filled here with this
  repository's real branch policy (`main`, `integration`, branch per task,
  `version/NN-slug` for historical rooms).
- `VISUAL_DESIGN.md` - shared visual standards for UI work, including palette
  and icon guidance. New at this generation: an Accessibility section. The
  product here is terminal text, so the reference is marked dormant in place.
- `CLAUDE.md` - the one-line `@AGENTS.md` import the v1.1 README asks for, so
  Claude Code loads the same rules as every other agent.

Not copied, because they are for other situations: `team templates/` (manager,
subagent, and taskboard files for a 1-manager, 1-3-subagent run; this room is
single-agent, so the manager/subagent clauses in `AGENTS.md` are kept verbatim
and marked not applicable). This generation had no `GENESIS.md`, `ADOPTION.md`,
research templates, version stamp, or room tooling; the templates were filled
by hand following the upstream README's "How To Use It" steps.

## How To Use It

1. Copy the relevant templates into the target project.
2. Replace bracketed placeholders with project-specific paths, commands, and
   rules.
3. Keep `ROADMAP.md` current as work changes state.
4. Treat documentation as part of the task owner's work; no task is done while
   the docs still describe the old state.
5. Require every completed agent task to leave proof in the final response and
   in the verification log.

This room is the result of those five steps applied to itself. Read
`ROADMAP.md` for the live state and the verification log, and `RUNBOOK.md` for
the exact commands that gate "done".

The templates are intentionally plain Markdown so they work with Codex, Claude,
or any other agent that reads repository instructions.

Note for Claude Code: it reads `CLAUDE.md`, not `AGENTS.md`, by default. This
room ships the one-line `CLAUDE.md` containing `@AGENTS.md` (an import) so
these rules load automatically.

## License

MIT, the same license as the LLM Workbench templates this room was filled from.
