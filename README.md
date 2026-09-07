> Historical example: LLM Workbench v2.0 TASKBOARD, 2026-07-01, source commit 80db4a10007b2fb4617abd1bd861389ba5317a21, dated 2026-07-01. Built by hand from templates on 2026-09-06. Branch version/03-v2.0-taskboard of KaydenClark/Example_Workbench.

# Example Workbench

```bash
node tour.mjs               # the room map: what each control owns, and why it is kept apart
node tests/tour.test.mjs    # proof that the map still matches the room
```

Both commands run from the repository root and need only Node.js 20+.

This room is the LLM Workbench v2.0 contract filled for the smallest possible
product: a tour that explains the room it lives in. The generation shipped four
copy-ready templates, `AGENTS.md`, `BLUEPRINT.md`, `TASKBOARD.md`, and
`RUNBOOK.md`, and this room fills all four, preserving each template's sections,
order, and wording. `ROADMAP.md` is gone at this generation: stable direction
sits in `BLUEPRINT.md`, executable next work in `TASKBOARD.md`, and its proof
log is the ledger of what was actually verified. There was no README template
yet, so this file is written by hand. The optional `team templates/` and
`research templates/` were not copied; they are for multi-agent runs and
research folders, and this room has neither. The control docs are
plain Markdown so they work with Codex, Claude, or any other agent that reads
repository instructions; for Claude Code, the one-line `CLAUDE.md` containing
`@AGENTS.md` is already in place, so the rules load without running `/init`.
MIT, the same license as the LLM Workbench templates this room was filled from.
