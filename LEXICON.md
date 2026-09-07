# Example Workbench - Lexicon

> Generated from LLM Workbench v3.0.0.

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
| **Room** | One repository with the Workbench installed in it: seven root controls and a lowercase `workbench/` support root declared by `workbench/manifest.json`. | A room is an installation, not the harness. `LLM_Workbench` is the harness; this repository is a room. Avoid "workbench" alone when you mean one installation. |
| **Support lane** | One of the five manifest-declared directories under `workbench/` at this generation: `specs`, `wiki`, `grilling`, `handoffs`, `feedback`. | A lane is a declared slot the tools resolve through the manifest, not a folder someone assumed. The layout validator refuses a manifest whose lanes differ. |
| **Tour** | The ordered list `PLACES` in `tour.mjs`: every control file and support location this room has, each with what it owns and why it is kept apart. | Data that happens to print. It is not a README section; `tests/tour.test.mjs` reads the same list the terminal does. |
| **Place** | One entry in the tour: a path, the truth it owns, and the reason that truth is not kept anywhere else. | A path with no "why" does not belong in the room. |
| **Drift** | The condition where the room's structure and the tour's description of it disagree: a named path missing, a prescribed control or declared lane undescribed. | A test failure here, not a documentation backlog item. |
| **Generation** | One release of the harness contract, kept as one filled room on a `version/NN-slug` branch of this repository. This room is the v3.0.0 generation. | A generation is a snapshot for comparison, not a room to keep upgrading; `main` is the live room. |
