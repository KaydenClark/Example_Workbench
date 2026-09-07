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
| **Room** | One filled instance of the LLM Workbench control surfaces: the root controls, `MEMORY.md`, `specs/`, and whatever product they govern, at one harness generation. | Not the harness itself (`templates/` upstream is the blank product) and not a deployment, which may hold many rooms. |
| **Generation** | One LLM Workbench source commit whose templates a room was filled from; named by its version stamp and commit date. | Not a release: this room's generation is still stamped v2.3 although the contract grew after the v2.3 release. Do not call it v2.4. |
| **Tour** | This room's product: `tour.mjs`, which prints the room map, and `tests/tour.test.mjs`, which proves the map. | Not documentation about the tour; `README.md` and `BLUEPRINT.md` point at it and do not restate it. |
| **Place** | One entry of `PLACES` in `tour.mjs`: a `path` in the room, the truth it `owns`, and `why` that truth is kept apart from the others. | Not every file in the room; only control files and support locations are places. `tests/tour.test.mjs` is a place because it is one of the two commands. |
| **Room brain** | `MEMORY.md`, the wikilink router that starts every reader at one file and routes to the live controls and durable notes. | Not a copy of task state; it routes to `TASKBOARD.md` and specs and never duplicates them. Not the deployment-root brain (`MEMORY.root.md`), which this standalone room does not have. |
