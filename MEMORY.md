# Example Workbench Memory

> Generated from LLM Workbench v2.3. This is the room brain: the
> canonical, human-editable memory for this room. Start here and follow the
> smallest relevant link instead of browsing folders or searching.

This brain holds durable room memory only - context, decisions history
pointers, and routing. It never duplicates live task state; it routes to it.

## Authority Order

1. Verified runtime and this room's live controls: `AGENTS.md`, `BLUEPRINT.md`,
   stable specs, `TASKBOARD.md`, and `RUNBOOK.md`.
2. Maintained notes routed from this file.
3. Archived or generated material.

When sources disagree, verify the higher-authority source and update the stale
note.

## Live Controls

- [[AGENTS]] - how agents work in this room
- [[BLUEPRINT]] - what this room is: product map, architecture, non-goals
- [[LEXICON]] - accepted meanings of Room, Generation, Tour, Place, Room brain
- [[TASKBOARD]] - active work projection (current slice, owner, next gate)
- [[RUNBOOK]] - install, run, test, and recovery commands
- `specs/` - stable capability records and proof; `specs/S-001-self-explaining-room/SPEC.md` is the one this room has

This room is a standalone vault, not one room inside a shared deployment vault,
so the bare link form above is unambiguous here. Inside a shared deployment
vault the links would be qualified with the room path (e.g.
`[[Projects/Example Workbench/AGENTS|AGENTS]]`), because every room has an
`AGENTS.md`.

## Routing

| Question | Read first |
|---|---|

The table is empty on purpose: this room is young and has no durable note
beyond its live controls. The question a reader most often brings, why each
control is kept apart from the others, is answered by the product itself: run
`node tour.mjs`. Add a row only when a durable note exists to route to. A young
room may have an empty table; that is fine. Grow flat notes beside this router,
and only nest a dedicated `Archive/` folder.

## Up-Link

- Deployment wiki note: none. This room is not nested inside a deployment
  vault, so there is no deployment root Wiki and no pointer note to link to.

The deployment root Wiki keeps a pointer note for this room that links here;
keep the pair resolvable in both directions. If this room is ever placed under a
deployment, record that note here and make it link back.
