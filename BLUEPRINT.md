# Example Workbench - Blueprint

> Generated from LLM Workbench v3.0.0.

**Last reviewed:** 2026-09-06
**Status:** active
**Source root:** `https://github.com/KaydenClark/Example_Workbench`, branch `version/07-v3.0.0`

## Product Map

The Example Workbench at this generation is the smallest complete v3.0.0 room:
seven filled root controls, a lowercase `workbench/` support root declared by a
manifest with five lanes, a room brain, a feedback channel, and one stable
spec. Its product is an explanation of that shape. It serves a newcomer who
wants to see what every part of a room is for and why it is kept apart, and the
owner, who keeps one room per harness generation so the contract's progress can
be read side by side. The problem it solves is that the templates document a
shape nobody has checked; here the explanation runs, and a test fails when the
room drifts from it.

Founding prompt, preserved verbatim from the owner's brief: "make the room
explain itself".

Core promise:

> Run `node tour.mjs` and you will know what every control file and support
> location in a v3.0.0 room is for, and why. Run `node tests/tour.test.mjs`
> and you will know that answer is still true of this room.

## Goals And Pillars

- **Explanation that cannot rot:** every path the tour names must exist, and
  every control this generation prescribes and every lane the manifest
  declares must be explained, or the test goes red.
- **Faithful to its generation:** the room was made with the v3.0.0 tooling
  (`workbench-layout.mjs init` and `validate --genesis`, `spec-workbench.mjs
  render` and `doctor`) and its templates, not by imitating their output.
- **Small on purpose:** one product file, one test file, one spec. Nothing is
  added that the harness of this generation did not prescribe.

## Cross-Cutting Architecture And Invariants

| Layer / concern | Choice | Invariant / source |
|---|---|---|
| Runtime | Node.js 20+ | No dependencies. A room that needs an install step is not the first thing a newcomer should run. |
| Product surface | CLI (`node tour.mjs`) | One command, no arguments, output that fits a terminal. |
| Data/storage | none | The files in the room are the only state; nothing to seed, migrate, or back up. |
| Testing | `node:test` and `node:assert/strict` (built in) | Same runner the harness suites use; nothing to install. |
| Deployment/runtime | none | The room is read and run where it is cloned. |

Rules that span multiple capabilities:

- `PLACES` in `tour.mjs` is the only enumeration of the room's structure;
  every other file may explain one part but never lists them all.
- The room holds no secrets and acquires none. It exists to be read, copied,
  and compared with the rooms on its sibling version branches.
- Support paths are resolved through `workbench/manifest.json`; no file in the
  room assumes a lane path the manifest does not declare.

Source and tests remain implementation truth. Put capability-specific
requirements and decisions in its stable spec, not here.
Put accepted project-wide definitions in `LEXICON.md`; the Blueprint helps
participants recover the design concept but is not itself the design concept or
the project glossary.

## Non-Goals

- Not a template: `templates/` upstream stays generic and bracketed; this room
  is deliberately filled.
- Not a test harness for the upstream tools; the harness owns those suites.
- Not the current room. The repository's `main` is the live room on a later
  harness; this branch stays a v3.0.0 room so the generation can be read back.

## Spec Catalog

The generated catalog links every durable capability record, including completed
history. Human-authored product prose stays outside the markers.

<!-- spec-catalog:start -->
| Spec | Description | Status |
|---|---|---|
| [S-001 - Room Explains Itself](workbench/specs/S-001-room-explains-itself/SPEC.md) | A room that prints a test-checked map of every control file and support location it has, with what each owns and why it is kept apart. | active |
<!-- spec-catalog:end -->

## Cross-Cutting Health

- `node tests/tour.test.mjs` passes;
- `node /PATH/TO/LLM_WORKBENCH/tools/workbench-layout.mjs validate --project . --genesis` passes when relevant;
- the primary workflow succeeds end to end;
- secrets and private data stay out of committed output;
- spec doctor/render checks report no lifecycle, link, or projection drift.
