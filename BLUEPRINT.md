# Example Workbench - Blueprint

> Generated from LLM Workbench v2.3.

**Last reviewed:** 2026-09-06
**Status:** active
**Source root:** `the repository root of KaydenClark/Example_Workbench, branch version/06-v2.3-late` (recorded relative to the clone rather than as an absolute path, so this file carries no machine-specific home path)

## Product Map

A self-describing tour of an LLM Workbench room at the late-v2.3 contract, the
one that added the room brain. `tour.mjs` names every control file and support
location the room has at this generation, the truth each one keeps, and why it
is kept apart from the others; `tests/tour.test.mjs` proves that map matches
the directory. It serves the owner of `KaydenClark/Example_Workbench`, who reads
one generation room per branch to see how the harness contract progressed, and
anyone meeting this contract cold who wants a filled example instead of a
bracketed template.

Core promise:

> Run `node tour.mjs` and you get every control this room has, what truth it
> keeps, and why it is kept apart; run `node tests/tour.test.mjs` and you get
> proof that the map still matches the directory it sits in.

## Goals And Pillars

- **The map is the product:** every control the generation prescribes appears in
  `PLACES` with a real `owns` and a real `why`, written from the generation's
  own template wording.
- **The map cannot lie:** a test asserts every named path exists, every root
  document and prescribed control is described, and no entry is trivial.
- **Frozen at v2.3:** the room shows what this generation looked like; later
  generations are other version branches of the same repository, never an
  in-place upgrade of this one.

## Cross-Cutting Architecture And Invariants

| Layer / concern | Choice | Invariant / source |
|---|---|---|
| Runtime | Node.js 20+, ESM | zero dependencies and no `package.json`; `tour.mjs` locates the room from `import.meta.url`, so the clone path does not matter |
| Product surface | CLI: `node tour.mjs` prints the map to stdout | the heading is `Example Workbench (v2.3 late integration with room brain, 2026-08-27) - room map`; `tour.mjs` -> `render()` |
| Data/storage | none; the map is the `PLACES` constant exported by `tour.mjs` | one entry per place with `path`, `owns`, `why`; `PRESCRIBED` lists the controls the generation requires |
| Testing | `node:test` + `node:assert/strict` in `tests/tour.test.mjs` | reads `PLACES` from the product instead of carrying a list of its own |
| Deployment/runtime | none; run from inside the room directory | both commands run from the room root and touch nothing outside it |

Rules that span multiple capabilities:

- Every `path` in `PLACES` exists relative to the room root, and every Markdown
  file at the room root has an entry.
- Privacy and safety boundary: no secret, credential, token, absolute home
  path, or personal data of any kind lives in this room; there is nothing to
  protect because nothing is stored, and nothing may be added.
- `README.md`, this file, and `MEMORY.md` point at the tour rather than
  restating its `why` text, so the explanation has one address.

Source and tests remain implementation truth. Put capability-specific
requirements and decisions in its stable spec, not here.
Put accepted project-wide definitions in `LEXICON.md`; the Blueprint helps
participants recover the design concept but is not itself the design concept or
the project glossary.

## Non-Goals

- Reproducing the current root room's layout (`workbench/`, a manifest, managed
  tool lanes); those arrived in later generations and live on later branches.
- Being upgraded in place to a later harness version; that would destroy the
  thing this room documents.
- Hosting real project work beyond the one capability in the catalog below.

## Spec Catalog

The generated catalog links every durable capability record, including completed
history. Human-authored product prose stays outside the markers.

<!-- spec-catalog:start -->
| Spec | Description | Status |
|---|---|---|
| [S-001 - Self-Explaining Room](specs/S-001-self-explaining-room/SPEC.md) | Make the room explain itself: a tour that prints every control and a test that proves the map matches the directory. | active |
<!-- spec-catalog:end -->

## Cross-Cutting Health

- `node tests/tour.test.mjs` passes;
- `node --check tour.mjs` passes when relevant;
- the primary workflow succeeds end to end: `node tour.mjs` prints the map under
  the generation heading with every place present;
- secrets and private data stay out of committed output;
- spec doctor/render checks report no lifecycle, link, or projection drift.
