# Example Workbench - Blueprint

> Generated from LLM Workbench v2.3.

**Last reviewed:** 2026-09-06
**Status:** active
**Source root:** the repository root of `KaydenClark/Example_Workbench` on branch `version/05-v2.3`, wherever it is cloned

## Product Map

Example Workbench is the smallest complete LLM Workbench room: a filled set of
control documents whose product is an explanation of what a room is. It serves
anyone meeting the harness for the first time and anyone who wants to read how
the contract progressed from one generation to the next, by checking out this
branch and running one command. The problem it solves is that the harness's own
`templates/` are generic and bracketed by design, so a reader sees the shape of
the answer but never a filled example that a test keeps honest.

Core promise:

> `node tour.mjs` prints every control file and support location in this room,
> what truth each one keeps, and why it is kept apart from the others, and
> `node tests/tour.test.mjs` proves that map still matches the directory.

The founding prompt, preserved verbatim as Genesis Phase 1 asks: "The room's
product is a self-describing tour: `tour.mjs` exports `PLACES = [{ path, owns,
why }, ...]` naming every control file and support location the room has at
this generation, and prints them under the heading `Example Workbench
(<generation label>) - room map`. `tests/tour.test.mjs` asserts every `PLACES`
path exists, every `.md` file at the room root is described, and every
`owns`/`why` is non-trivial."

## Goals And Pillars

- **Self-explanation:** every place in the room says what it owns and why it is
  separate, in the generation's own words.
- **Honesty by test:** every claim the tour makes about the layout is asserted
  by a test, so the map cannot quietly drift from the directory.
- **Fidelity to v2.3:** the controls are filled from the v2.3 templates without
  rewriting them, so the room shows this generation's contract, not a later one.

## Cross-Cutting Architecture And Invariants

| Layer / concern | Choice | Invariant / source |
|---|---|---|
| Runtime | Node.js 20 or later, ESM | zero dependencies and no `package.json`; `tour.mjs` and its test run directly with `node` |
| Product surface | CLI: `node tour.mjs` prints the room map to stdout | heading is exactly `Example Workbench (v2.3 spec-centered progressive disclosure, 2026-07-16) - room map`; `LABEL` in `tour.mjs` |
| Data/storage | none; `PLACES` is a constant array in `tour.mjs` | no state is read or written at run time |
| Testing | `node:test` with `node:assert/strict` in `tests/tour.test.mjs` | every `PLACES` path exists; every root `.md` and every prescribed control is described; no placeholder leaks |
| Deployment/runtime | none; runs from a checkout of the branch | the room must work wherever the repository is cloned, so paths resolve from `import.meta.url` |

Rules that span multiple capabilities:

- Every entry in `PLACES` names a path that exists, and every Markdown file at
  the room root has an entry; adding one without the other turns the test red.
- The room stores no secrets, credentials, tokens, or private data and must
  acquire none; nothing here needs an account or a network.
- The root controls are filled from the v2.3 templates and keep the templates'
  sections and order; capability detail lives in `specs/`, and the catalog and
  hot board regions are rendered by the spec tool, never edited by hand.

Source and tests remain implementation truth. Put capability-specific
requirements and decisions in its stable spec, not here.
Put accepted project-wide definitions in `LEXICON.md`; the Blueprint helps
participants recover the design concept but is not itself the design concept or
the project glossary.

## Non-Goals

- Being a place to do project work: this branch is a frozen historical example,
  and later generations live on later `version/` branches.
- Copying the harness tool into the room: `spec-workbench.mjs` runs from a
  checkout of LLM Workbench at the source commit, as `RUNBOOK.md` records.
- Multi-agent coordination, research folders, or adoption of an existing
  project: the optional templates for those were not copied.

## Spec Catalog

The generated catalog links every durable capability record, including completed
history. Human-authored product prose stays outside the markers.

<!-- spec-catalog:start -->
| Spec | Description | Status |
|---|---|---|
| [S-001 - Self-Explaining Room](specs/S-001-self-explaining-room/SPEC.md) | Make the room explain itself: `tour.mjs` prints every place, what it owns, and why it is separate, and a test proves the map matches the directory. | active |
<!-- spec-catalog:end -->

## Cross-Cutting Health

- `node tests/tour.test.mjs` passes;
- `node --check tour.mjs` passes when relevant;
- the primary workflow succeeds end to end;
- secrets and private data stay out of committed output;
- spec doctor/render checks report no lifecycle, link, or projection drift.
