---
type: memory
status: active
sensitivity: normal
knowledge_role: canonical
provenance:
  - Genesis or Adoption of this room
source_paths:
  - workbench/wiki
last_verified: 2026-09-08
---

# Example Workbench Memory

> Generated from LLM Workbench v3.2.0. This is the room brain: the
> canonical, human-editable memory router for this project, kept at
> `workbench/wiki/MEMORY.md`. Start here and follow the smallest relevant
> link instead of browsing folders or searching.

This router holds durable room memory only: context, decision-history
pointers, and routing. It never duplicates live task state; it routes to it.

## Source Precedence

1. Verified runtime and this room's live controls: `AGENTS.md`, `BLUEPRINT.md`,
   the assigned stable spec, `TASKBOARD.md`, and `RUNBOOK.md`.
2. Maintained notes routed from this file.
3. `archive/` and generated material.

When sources disagree, verify the higher-authority source and repair the stale
note (`AGENTS.md` -> State Resolution). The wiki is a map, not a Governance
Plane: it routes to Canon, Grounding, and verified Actuality and authorizes
nothing.

## Leaving The Wiki

| Go to | For |
|---|---|
| [AGENTS.md](../../AGENTS.md) | Authority, scope, safety, and the work loop |
| [BLUEPRINT.md](../../BLUEPRINT.md) | Product map, architecture, and the spec catalog |
| [LEXICON.md](../../LEXICON.md) | Shared terms, the Governance Core, and design-concept routing |
| [TASKBOARD.md](../../TASKBOARD.md) | Current execution state |
| `workbench/specs/` | Stable capability records, acceptance, evidence, and proof |
| [RUNBOOK.md](../../RUNBOOK.md) | Exact operating and verification commands |
| [SCHEMA.md](SCHEMA.md) | Wiki CRUD, metadata, sensitivity, and freshness rules |
| [design-concepts/](design-concepts/README.md) | Owner-directed articles explaining durable design models |
| [guidebooks/](guidebooks/) | Ordered procedures that outgrew the Runbook |

## Routing

| Question | Read first |
|---|---|
| What is a workbench, and what goes in each place? | `node tour.mjs`, then [S-001](../specs/S-001-self-explaining-room/SPEC.md) |
| Where did this room come from? | `provenance` in [manifest.json](../manifest.json) - genesis from LLM Workbench v3.1.2 at `18ffc0d` |
| How do I know the explanation is still true? | `node tests/tour.test.mjs` - drift is a test failure, not a backlog item |
| How did the harness get here, and how do I stand in an earlier generation? | [VERSION_HISTORY.md](../docs/VERSION_HISTORY.md), then `git checkout version/NN-...`; recorded by [S-002](../specs/S-002-version-history-replay/SPEC.md) |

This room is young and deliberately small; it has no flat notes yet. The rows
above route to live controls and to the room's own executable description,
which is where its durable knowledge actually lives.

Add a row only when a durable note exists to route to. A young room may have an
empty table; that is fine. Grow flat notes beside this router and inside the
declared collections; only `archive/` may nest.

## Up-Link

Standalone room; no deployment wiki.
