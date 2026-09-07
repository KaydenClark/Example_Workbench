# Example Workbench (v0 GAME_PLAN)

> Historical example: LLM Workbench v0 GAME_PLAN, pre-release, 2026-06-18, source commit bfd06384a9dc18f4fcd0958202adb37e319e3602, dated 2026-06-18. Built by hand from templates on 2026-09-06. Branch version/00-v0-game-plan of KaydenClark/Example_Workbench.

```bash
node tour.mjs             # what every part of this room is for, and why
node tests/tour.test.mjs  # proof that the map still matches the room
```

This room is the first harness generation filled in for real. At that commit
the harness was six Markdown files and nothing else: no `templates/`
directory, no README, no tooling, no version stamp. Three `blank_project`
templates (AGENTS, BLUEPRINT, GAME_PLAN) become the three controls here; the
three `existing_project` twins are the adoption path for a project that
already has code and were not applicable to this greenfield room. There was no
README template, so this file is written by hand, and no Claude bridge
(`CLAUDE.md`) was prescribed yet. The product is the same as the root room's:
`tour.mjs` prints the annotated map of the room, and `tests/tour.test.mjs`
asserts every claim the map makes.

The room is the `version/00-v0-game-plan` branch of
`KaydenClark/Example_Workbench`, one commit in a history that replays every
harness generation; the repository's branch policy applies (`main` default,
`integration` staging, branch per task). Owner: Kayden Clark. Stack: Node.js
20+, no dependencies.
