# Example Workbench - Blueprint

> Generated from LLM Workbench v3.2.0.

**Last reviewed:** 2026-09-08
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

## Objective Continuity

Meaningful objective work preserves working context in local JSON notepads.
The current view and ordered work record support continuation and scoped
handoffs; shared schema/tooling must preserve sources and corrections without
making notes authoritative. Save important context while work proceeds so it
can support continuation after token exhaustion or Stop; computer-crash,
device-loss, and cross-machine recovery are outside this guarantee. Reconcile
important material into durable owners before trimming it from a retained note
or deleting a fully reconciled record; preserve unfinished context.
Record implemented support and remaining gaps in the assigned capability spec;
accepting this direction does not prove automatic capture or recovery.

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

### Core Navigation Contract

**Traverse, don't search** is a core Workbench feature. The Context Map connects
shared meanings, controls, assigned specs, Wiki context, and referenced
source/evidence through existing owners. Enter through
[Lexicon Task Routing](LEXICON.md#task-routing); new durable context must be
reachable from its relevant entry route and link back to its sources.
[AGENTS.md](AGENTS.md#traverse-dont-search) owns the behavior and bounded search
fallback. Ordinary portable links provide this structure; a visual graph or
retrieval index is a source-derived view, not a second truth store. Foundry,
Obsidian, and a recall service are not prerequisites. Link coverage and any
automated traversal capability require their own verification.

### Entry And Delivery

The seven-control Contract enters through AGENTS -> RUNBOOK -> LEXICON, then
assigned work and task-relevant owners. This Blueprint loads for architecture
and cross-cutting direction. SPEC and TASK assign portable stances; stances
change method without transferring authority or spawning agents. Independent
review is required before branches combine at integration. Required steps need
immediate delivery value; uncertain practices remain optional and reviewable.
A setup-only Round One proof reports in chat before feedback-report testing.


## Accepted Continuity And Distribution Direction

The Workbench's continuity promise spans maintained controls, specs, Wiki,
source, verified achieved state and objective notes. A fresh capable agent must
recover authorized work from those owners; notes preserve unfinished reasoning.
A real useful continuation demonstrates that workflow. Only repeated controlled,
held-out, condition-blind trials with uncertainty support improved agent-outcome
claims; static checks and a single demonstration do not. Preserve criteria and
failed results. Interface acceptance applies to the product's actual interface.

The portable runtime stays Node/JavaScript; Python retains evaluation and existing
append-only checks. Both languages deserialize JSON; no intrinsic Python JSON
penalty is asserted. Skills compose reusable independent behavior within inherited
scope. Mention, routing, invocation and authorization are distinct; a helper
cannot enlarge its caller's authority. Read-only names the target, while permitted
local working capture remains within the assignment.

Core skills are exclusively upstream-owned and sufficient without a personal
catalog, including reconciled save/promote/notepad. Optional personal/shared
skills and room-local source remain distinct ownership scopes. One selected
global core release carries a tested room compatibility range. The global
.agents/skills root holds managed ignored/excluded core installation alongside
optional personal source; Claude discovery adapts the same source. One source
per skill and one discovery entry per application; no third .codex/skills catalog.
Normal setup preserves existing names; explicit replacement backs up differences.
Room-local promotion into a personal catalog remains owner-directed.

Optional private workbench_sessions Git transport is the accepted cross-device
direction. Stable Workbench identity survives clone/worktree/rename; independent
instantiation receives a new identity, separate from artifact IDs. Selected live
notes/grilling/handoffs map under workbenches/<WBID>/sessions/; schemas/templates
and promoted knowledge stay in project Git. Live records remain ignored there,
non-authoritative, and privacy bounded. Fetch before resume; meaningful saves
and device switching require explicit push/remote acknowledgment, with offline
pending status and last confirmed revision. Serialize sync, preserve conflicts,
and never silently overwrite or force push. Git history retention is accepted;
transport does not move unpushed code or running processes. Local use is independent.
Actual Mac/Windows Claude/Codex round-trip proof is required for that claim.

Promotion writes selected, privacy/validity-checked material directly to its named
durable owner, verifies read-back and faithful reconciliation, then permits scoped
source cleanup. Preserve unfinished/correction/transfer dependencies. Existing
checkpoints remain frozen history; new copy creation is retired. Operational
recovery uses the ignored `sessions/recovery/` collection; legacy rollback remains usable. No new permanent
handoff store substitutes for checkpoints. Capability checks cannot replace
semantic judgment or authorization.

Genesis, adoption and explicit upgrade have different allowed effects and
preservation contracts. Verify all consumed source lanes before mutation.
Separate release, historical adoption, installed manifest, tool/skill bytes,
executing runtime and downstream acceptance identities. Verify the actual remote
ref and object; inaccessible remote state remains unknown. Control divergence is
visible and deliberate against a matched template generation; fidelity stays a
report. A recorded unavailable baseline is distinct from measured red and never
waives release acceptance; use the existing closed baseline policy.

Supported-host claims require a small agreed operational floor checked in the
actual configured environment. Agree requirements before choosing schema,
diagnostics or tests. Missing capabilities affect dependent work only; unavailable
checks stay unverified. Capability, actual enforcement and model reliability need
separate evidence. New native enforcement hooks are outside core; discovery and
evaluation adapters are distinct. Enforcement needs a running mechanism with
supporting evidence, whether host-owned or Workbench-owned.
