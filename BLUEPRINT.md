# Example Workbench - Blueprint

> Generated from LLM Workbench v3.1.2.

**Last reviewed:** 2026-09-06
**Status:** active
**Source root:** the repository root (this room is the whole project)

## Product Map

The Example Workbench is the smallest complete room: a working LLM Workbench
installation whose product is an explanation of what a room is. It serves two
readers. Someone meeting the harness for the first time can run one command and
see every part of a room named, with what it owns and why it is kept apart from
everything else. Someone maintaining the harness gets a real target to test
genesis and upgrade against, instead of rehearsing on a repository that carries
actual work. The problem it solves is that a structure documented only in
templates is a claim nobody has checked; here the documentation is executable
and fails when the room drifts from it.

Core promise:

> Run `node tour.mjs` and you will know what every directory in a workbench is
> for, and why. Run `node tests/tour.test.mjs` and you will know the answer is
> still true.

## Goals And Pillars

- **Explanation that cannot rot:** every claim the room makes about its own
  layout is asserted by a test. Documentation that can go stale silently is not
  documentation, it is a rumour with formatting.
- **Smallest complete room:** the room stays as small as it can be while still
  being a genuine installation — real manifest, real lanes, real installed
  runtime, real spec. A simplified imitation would teach the wrong shape.
- **A safe rehearsal target:** genesis and upgrade get exercised here, on a room
  whose loss would cost nothing, before they are pointed at a room that matters.

## Cross-Cutting Architecture And Invariants

| Layer / concern | Choice | Invariant / source |
|---|---|---|
| Runtime | Node.js 20+ | No dependencies, ever. A room that needs an install step cannot be the first thing a newcomer runs. |
| Product surface | CLI (`node tour.mjs`) | One command, no arguments, output that fits a terminal. |
| Data/storage | none | The repository is the only state. Nothing to seed, migrate, or back up. |
| Testing | `node:test` (built in) | Matches the upstream harness suites, and adds nothing to install. |
| Deployment/runtime | none — the room is read and run in place | Nothing to deploy means nothing that can be stale in production. |

Rules that span multiple capabilities:

- **The tour is the single source of truth for what goes where.** Prose in any
  other file explains a part; only `tour.mjs` enumerates all of them, and only
  it is checked against the manifest.
- **Every lane and collection the manifest declares must be explained.** Adding
  one without describing it is a test failure, not a documentation debt.
- **The room holds no secrets and acquires none.** It exists to be copied,
  read, and thrown away, so nothing in it may ever be sensitive.
- **`workbench/tools/` changes only through an explicit update.** The room does
  not hand-edit its own managed runtime; that is what makes its receipt mean
  something.

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

- **Not a template.** `templates/` upstream stays generic and bracketed; this
  room is deliberately filled. Copying it wholesale gives you this room's
  content, not a blank one.
- **Not a tutorial for building software.** It explains the shape of a room,
  not how to design a product inside one.
- **Not a test harness for the upstream tools.** Those have their own suites.
  This room is a rehearsal target, not a replacement for them.

## Spec Catalog

The generated catalog links every durable capability record, including completed
history. Human-authored product prose stays outside the markers.

<!-- spec-catalog:start -->
| Spec | Description | Status |
|---|---|---|
| [S-001 - Self-Explaining Room](workbench/specs/S-001-self-explaining-room/SPEC.md) | A room that prints an accurate, test-checked account of what a workbench is and why each part is where it is. | active |
| [S-002 - Version History Replay](workbench/specs/S-002-version-history-replay/SPEC.md) | The repository's history replays every LLM Workbench generation as one commit and one branch each, so the contract's progression can be read, diffed, and backed out of. | complete |
| [S-003 - v3.2.0 Upgrade And Project Validation](workbench/specs/S-003-v3-2-0-upgrade-and-project-validation/SPEC.md) | Upgrade the reference room to v3.2.0 and prove a useful fresh project before reviewed integration. | active |
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
