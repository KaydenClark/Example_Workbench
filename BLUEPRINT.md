# Example Workbench - Blueprint

> Generated from LLM Workbench v3.1.1.

**Last reviewed:** 2026-09-06
**Status:** active
**Source root:** the repository root (this room is the whole project)

## Product Map

The Example Workbench at this generation is the smallest complete v3.1.1 room:
seven filled root controls entered through the reduced route AGENTS -> RUNBOOK
-> LEXICON, a schema 2 support root declared by a manifest, eleven managed
runtime tools installed with a receipt, a room brain, and one stable spec whose
tickets name a portable stance. Its product is an explanation of that shape. It
serves a newcomer who wants to see what every control file and support location
in a room is for and why it is kept apart, and the owner of the repository, who
keeps one room per harness generation so the contract's progress can be read
side by side. The problem it solves is that the templates document a shape
nobody has checked; here the explanation runs, and a test fails when the room
drifts from it.

Core promise:

> Run `node tour.mjs` and you will know what every control file and support
> location in a v3.1.1 room is for, and why. Run `node tests/tour.test.mjs`
> and you will know that answer is still true of this room.

## Goals And Pillars

- **Explanation that cannot rot:** every path the tour names must exist, and
  every root control, lane, and collection the room prescribes must be
  explained, or the test goes red.
- **Faithful to its generation:** the room was made with the v3.1.1 tooling
  (`workbench-layout.mjs init`, `workbench-tools.mjs install`) and its own
  installed copies of `spec-workbench.mjs`, not by imitating their output.
- **Small on purpose:** one product file, one test file, one spec. Nothing is
  added that the harness of this generation did not prescribe.

## Cross-Cutting Architecture And Invariants

| Layer / concern | Choice | Invariant / source |
|---|---|---|
| Runtime | Node.js 20+ | No dependencies. A room that needs an install step is not the first thing a newcomer should run. |
| Product surface | CLI (`node tour.mjs`) | One command, no arguments, output that fits a terminal. |
| Data/storage | none | The files in the room are the only state; nothing to seed, migrate, or back up. |
| Testing | `node:test` and `node:assert/strict` (built in) | Same runner the harness suites use; nothing to install. |
| Deployment/runtime | none | The room is read and run where it sits. |

Rules that span multiple capabilities:

- `PLACES` in `tour.mjs` is the only enumeration of the room's structure;
  every other file may explain one part but never lists them all.
- The room holds no secrets and acquires none. It exists to be read, copied,
  and compared with the rooms of neighbouring generations.
- `workbench/tools/` changes only through the explicit Workbench update, so the
  receipt in that lane keeps meaning something.

Source and tests say what is implemented; this file and the assigned spec say
what is accepted (`AGENTS.md` -> State Resolution). Put capability-specific
requirements and decisions in its stable spec, not here. Consequential
architectural decisions with real alternatives get a record in
`workbench/docs/adr/`; the rule they establish still lives in the owning
control, because the Workbench Contract is the set of claims those controls
and the assigned spec carry, not a file.
Put accepted project-wide definitions in `LEXICON.md`; the Blueprint helps
participants recover the design concept but is not itself the design concept or
the project glossary.

## Non-Goals

- Not a template: `templates/` upstream stays generic and bracketed; this room
  is deliberately filled.
- Not a test harness for the upstream tools; the harness owns those suites.
- Not the current room. The repository's `main` carries the live room; this
  one stays a v3.1.1 room so the generation can be read back.

## Spec Catalog

The generated catalog links every durable capability record, including completed
history. Human-authored product prose stays outside the markers.

<!-- spec-catalog:start -->
| Spec | Description | Status |
|---|---|---|
| [S-001 - Self-Explaining Room](workbench/specs/S-001-self-explaining-room/SPEC.md) | A room that prints a test-checked map of every control file and support location it has, with what each owns and why it is separate. | active |
<!-- spec-catalog:end -->

## Cross-Cutting Health

- `node tests/tour.test.mjs` passes;
- `node workbench/tools/workbench-layout.mjs validate --project .` passes when relevant;
- the primary workflow succeeds end to end;
- secrets and private data stay out of committed output;
- spec doctor/render checks report no lifecycle, link, or projection drift.

## Workbench Entry And Delivery Boundaries

The seven-control Contract enters through AGENTS -> RUNBOOK -> LEXICON, then
assigned work and task-relevant owners. This Blueprint loads for architecture
and cross-cutting direction. SPEC and TASK assign portable stances; stances
change method without transferring authority or spawning agents. Independent
review is required before branches combine at integration. Required steps need
immediate delivery value; uncertain practices remain optional and reviewable.
A setup-only Round One proof reports in chat before feedback-report testing.
