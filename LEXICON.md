# Example Workbench - Lexicon

> Generated from LLM Workbench v2.3.

**Last reviewed:** 2026-09-06
**Status:** active

This is the canonical lookup table for terms whose meaning is shared across the
project. Read it when a request, spec, test, or skill uses project language that
could be ambiguous.

## Ownership Rules

- Add a term only after the parties agree on its meaning.
- Put project-wide definitions here; keep capability-specific terms in the
  owning spec until they become shared.
- Definitions belong here. Requirements and decisions remain in
  `BLUEPRINT.md` or the owning `SPEC.md`.
- Surface conflicts before changing an established definition.
- Link to detailed sources instead of copying them here.

## Workbench Terms

| Term | Definition | Distinction |
|---|---|---|
| **Design concept** | The shared understanding between the parties working on a project about what that project is. | It exists between participants. `BLUEPRINT.md` helps them reconstruct it but is not itself the design concept. |
| **Blueprint** | The compact project artifact that records product direction, principles, cross-cutting architecture, invariants, and non-goals. | It supports the design concept; it is not a PRD, work queue, glossary, or proof archive. |
| **Lexicon** | The canonical lookup table for definitions shared across the project. | It owns meanings, not requirements, implementation decisions, or work status. |
| **Spec** | A stable capability record containing scoped intent, requirements, decisions, implementation slices, acceptance, verification, evidence, and completion. | It combines the useful product and engineering roles often split between a PRD and technical spec. |
| **Ticket** | A temporary, one-context tracer-bullet slice inside a spec that produces independently verifiable progress. | It is execution structure, not durable capability history. |

## Project Terms

| Term | Definition | Distinction / aliases to avoid |
|---|---|---|
| **Room** | One repository governed by a filled set of LLM Workbench control documents. | Not the harness itself: the harness ships templates, a room is what they become once filled. Avoid "workspace" and "project" when the control documents are what is meant. |
| **Generation** | One version of the harness contract, identified by the LLM Workbench commit the room's templates were copied from. | Not a release number alone: two rooms can carry the same stamp and differ in contract. Each generation of this repository is one commit on a `version/` branch. |
| **Place** | One entry in `PLACES` in `tour.mjs`: a path in the room, the truth it owns, and why it is kept apart. | Not every file is a place; only control files and support locations the generation prescribes. Avoid "node" and "entry" in prose. |
| **Tour** | The output of `node tour.mjs`: the room map printed under the generation heading. | It is the demo artifact, not the specification; `tests/tour.test.mjs` is what makes its claims checkable. |
| **Control** | A root document the harness prescribes and an agent reads on entry: `AGENTS.md`, `BLUEPRINT.md`, `LEXICON.md`, `TASKBOARD.md`, `RUNBOOK.md`, `README.md`. | The Claude bridge, the permission file, the feedback log, and specs support the controls but are not counted among them. |
