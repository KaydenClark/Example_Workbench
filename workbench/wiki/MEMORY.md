# Example Workbench Memory

> Generated from LLM Workbench v3.0.0. This is the room brain: the
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
- [[TASKBOARD]] - active work projection (current slice, owner, next gate)
- [[RUNBOOK]] - install, run, test, and recovery commands
- `workbench/specs/` - stable capability records and proof; the one spec is
  `S-001-room-explains-itself`

This room is a standalone vault, so the bare link form is unambiguous here.
Inside a shared deployment vault, qualify these links with the room path (e.g.
`[[Projects/Example Workbench/AGENTS|AGENTS]]`) - every room has an `AGENTS.md`,
so the bare form is ambiguous there.

## Routing

| Question | Read first |
|---|---|

Add a row only when a durable note exists to route to. A young room may have an
empty table; that is fine. This room has no durable notes yet: the live
controls and `tour.mjs` answer every current question, and the table stays
empty until a note exists. Grow flat notes beside this router, and only nest a
dedicated `Archive/` folder.

## Up-Link

- Deployment wiki note: none. This room is one commit on the
  `version/07-v3.0.0` branch of `KaydenClark/Example_Workbench`, not a room
  inside a deployment vault, so there is no root wiki note to pair with.

The deployment root Wiki keeps a pointer note for this room that links here;
keep the pair resolvable in both directions if this room is ever placed inside
one.
