# Example Workbench

> Historical example: LLM Workbench v1 ROADMAP, first public release, 2026-06-22, source commit a2cdd4548d895461c3d27a6da34740d8c76ccdd5, dated 2026-06-22. Built by hand from templates on 2026-09-06. Branch version/01-v1-roadmap of KaydenClark/Example_Workbench.

A filled room built from the first public release of LLM Workbench, when the
harness was five Markdown templates at the repository root and nothing else:
no manifest, no support root, no tools, no specs, no Genesis protocol. The
room's product is a self-describing tour, the same idea as the current room on
`main` scaled down to what v1 had. It exists so the owner can see what a filled
v1 room looked like and back-track to that generation.

```bash
node tour.mjs             # what every part of a v1 room is for, and why
node tests/tour.test.mjs  # proof that the map still matches this room
```

Both commands run from the repository root. Node.js 20 or newer is the only
requirement; there is nothing to install.

## How This Project Is Run

Five control documents govern the room, filled from the v1 templates with
their sections, order, and wording preserved:

- [`AGENTS.md`](AGENTS.md) - agent behavior, authority order, read/edit scope,
  TDD rules, documentation ownership, and proof-of-done requirements.
- [`BLUEPRINT.md`](BLUEPRINT.md) - stable project identity, architecture,
  invariants, and safety boundaries.
- [`ROADMAP.md`](ROADMAP.md) - current state, next work, blockers, backlog, and
  the verification log.
- [`RUNBOOK.md`](RUNBOOK.md) - setup, run, test, troubleshooting, and recovery
  commands.
- [`VISUAL_DESIGN.md`](VISUAL_DESIGN.md) - the v1 default palette and icon
  rules, adapted in place for a product that prints plain text.

The v1 workbench README told a user to copy the templates, replace the
bracketed placeholders, keep `ROADMAP.md` current, treat documentation as part
of the task, and leave proof in the final response and the verification log.
That is what was done here. The v1 `team templates/` (manager, subagent,
taskboard) are optional multi-agent material and were not applicable to this
single-agent room, so they were not copied.

## Provenance Notes

- v1 templates carried no `Generated from LLM Workbench` version stamp, so no
  stamp appears in any control here.
- v1 shipped no tooling that runs against a room, so no render or doctor
  command was run. `tests/tour.test.mjs` is the only automated check.
- This room is one commit on the `version/01-v1-roadmap` branch of
  `https://github.com/KaydenClark/Example_Workbench`. The repository already
  has its default branch `main`, its staging branch `integration`, and a
  branch per task; nothing here creates a remote or a branch. Later harness
  generations live on later `version/NN-slug` branches, and the current room
  lives on `main`.

## License

Same license as the LLM Workbench harness it was filled from. No `LICENSE`
file is copied into the room.
