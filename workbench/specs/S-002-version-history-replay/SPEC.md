# S-002 - Version History Replay

> Generated from LLM Workbench v3.1.2. This path is stable; never move it
> between status folders.

**Spec ID:** S-002
**Status:** complete
**Priority:** 3
**Owner:** Kayden Clark
**Stance:** Builder
**Updated:** 2026-09-07
**Catalog description:** The repository's history replays every LLM Workbench generation as one commit and one branch each, so the contract's progression can be read, diffed, and backed out of.
**Blockers:** none
**Latest event:** All eleven generation commits assembled on one linear history with a `version/` branch at each; the v3.1.2 room restored at the tip.
**Next gate:** None; the replay is complete. A new harness generation adds one commit and one branch.

## Outcome

Someone who wants to know how the LLM Workbench contract changed over time,
or to stand in an earlier generation of it, can check out one branch of this
repository per generation, run the same two commands in each, and diff any two
to see exactly which rules moved. `workbench/docs/VERSION_HISTORY.md` names
every generation, the LLM Workbench commit it came from, what changed and why.

## Why It Matters

The harness went from three files to a manifest-declared support root in
eleven weeks, and for most of that time it carried no version at all. v2.2
was never committed; v2.3 grew for six weeks without a bump; v3.0.0 and
v3.1.0 were completed but never released. Reading the upstream history alone,
it is hard to say what a room looked like at any given point, or where a rule
that now seems wrong first appeared. A filled room per generation, on one
linear history, makes both questions a `git checkout` and a `git diff`.

## Current Verified State

Eleven commits, each replacing the whole tree with one generation's room:

| Branch | Generation | Source commit |
|---|---|---|
| `version/00-v0-game-plan` | v0 GAME_PLAN | `bfd0638` |
| `version/01-v1-roadmap` | v1 ROADMAP | `a2cdd45` |
| `version/02-v1.1-anti-drift` | v1.1 | `8572dd1` |
| `version/03-v2.0-taskboard` | v2.0 | `80db4a1` |
| `version/04-v2.1` | v2.1 | `dd1ed32` |
| `version/05-v2.3` | v2.3 | `08ab78e` |
| `version/06-v2.3-late` | v2.3 late | `9e6c71b` |
| `version/07-v3.0.0` | v3.0.0 | `d80d14c` |
| `version/08-v3.1.0` | v3.1.0 | `4ce74f8` |
| `version/09-v3.1.1` | v3.1.1 | `09f0875` |
| `version/10-v3.1.2` | v3.1.2 | `18ffc0d` |

Every room runs `node tour.mjs` and passes `node tests/tour.test.mjs`. The
v2.3 and later rooms pass their generation's `doctor`; the v3.1.x rooms pass
`validate --genesis`. The full SHA of each source commit is in that room's
README provenance line.

## Desired Behavior

1. `git branch -r --list 'origin/version/*'` lists one branch per generation,
   in order.
2. Every branch is a self-contained room: the same product, filled on that
   generation's own templates, following that generation's own bootstrap
   procedure, and created with that generation's own tooling wherever tooling
   existed.
3. The branches sit on one linear first-parent history ending at the current
   room, so `git diff` between neighbours is the contract change.
4. `VERSION_HISTORY.md` explains each step and says how to back-track both
   this room and the harness itself.

## Decisions And Contracts

- **One commit per generation, one branch per commit.** Branches are the
  owner's chosen handle; the linear history is what makes diffs meaningful.
- **A generation is a commit that changed what a room must contain or how an
  agent must behave.** Version headers were confirmed where they existed;
  where the harness grew without a bump (v2.3 late) the generation is named by
  its content, and where a version never reached Git (v2.2) it gets no branch.
- **The product is held constant.** Every room's product is a self-describing
  tour so that the contract, not the product, is the signal in a diff.
- **Rooms are fresh fills, not in-place upgrades.** Each was built from its
  generation's templates on 2026-09-06 and 2026-09-07. A diff therefore also
  carries the difference between two fillings, which the history document
  says plainly.
- **The final tree is the v3.1.2 room plus this record.** Nothing about the
  room's own contract changed; the replay is documentation of the harness, not
  a change to it.

## Non-Goals

- Reproducing every upstream commit. Only contract-changing generations get a
  branch.
- Rehearsing the upgrade tooling between generations. The v3 upgrade route is
  documented by S-001 (`node tour.mjs --lifecycle`); this spec replays states,
  not transitions.
- Keeping older branches current. A generation branch is frozen; a new
  generation is a new commit and branch at the tip.

## Dependencies And Blockers

- none

## Vertical Implementation Slices

| Ticket | Slice | Status | Blockers | Proof |
|---|---|---|---|---|
| TK-001 | Identify the generations from the full upstream history and map each to a source commit | done | none | `VERSION_HISTORY.md` generation table; version headers confirmed by `git grep` per commit |
| TK-002 | Build one filled room per generation with that generation's templates and tooling | done | none | Every room: `node tour.mjs`, `node tests/tour.test.mjs`; v2.3+ `doctor`; v3.1.x `validate --genesis` |
| TK-003 | Assemble the linear history, the version branches, and the history document | done | none | `git log --first-parent --oneline`; `git branch --list 'version/*'`; this room's suite green at the tip |

## Acceptance Criteria

- [x] One `version/` branch per identified generation, on one linear history
      ending at the current room.
- [x] Every branch runs `node tour.mjs` and passes `node tests/tour.test.mjs`
      from its root.
- [x] `workbench/docs/VERSION_HISTORY.md` names each generation's source
      commit, date, contract change, and back-track command.
- [x] The tip tree passes this room's full verification (`tests/tour.test.mjs`,
      `validate`, `render`, `doctor`).

## Testing Seams

- Each room's `PLACES` and its test, run per branch.
- Each generation's own `doctor` and `validate`, run per branch.
- The tip's own suite, which must not notice the replay at all.

## Verification Procedure

```bash
for b in $(git branch --list 'version/*' --format='%(refname:short)'); do
  git checkout -q "$b" && node tour.mjs >/dev/null && node tests/tour.test.mjs
done
git checkout -q version/10-v3.1.2
node tests/tour.test.mjs
node workbench/tools/workbench-layout.mjs validate --project .
node workbench/tools/spec-workbench.mjs render
node workbench/tools/spec-workbench.mjs doctor
```

## Documentation Impact

- `workbench/docs/VERSION_HISTORY.md`: new, owns the per-generation account.
- `README.md`: one pointer to the history document and the branch list.
- `BLUEPRINT.md` and `TASKBOARD.md`: catalog and projection re-rendered.
- `workbench/wiki/MEMORY.md`: one routing row for "how did the harness get
  here".

## Append-Only Evidence And Execution Log

| Date | Ticket | Event | Verification | Docs | Remaining gap |
|---|---|---|---|---|---|
| 2026-09-06 | TK-001 | Generations identified from the unshallowed upstream history, all branches | 382 commits scanned; the templates tree hash changed at 90 commits, of which 11 changed what a room must contain or how an agent behaves; `Harness version` headers confirmed: v2.1 first at `12a5233` (07-01), v2.3 at `ec94022` (07-12), v3.0.0 at `6d5beef` (08-31), v3.1.0 at `dfd4c9e`, v3.1.1 at `bfae8c0` (09-04), v3.1.2 at `8d9f0e2` (09-05); v2.2 found only inside `ec94022` as a frozen Taskboard archive | `VERSION_HISTORY.md` drafted | Rooms not yet built |
| 2026-09-07 | TK-002 | Rooms built, one per generation, from a read-only worktree of each source commit | See the per-branch verification rows appended below by TK-003 | Each room's README carries its provenance line | Assembly |
| 2026-09-07 | TK-003 | Linear history assembled and branches created | Eleven commits on one first-parent line from `4f1dd4c`; every `version/` branch checked out in turn: `node tour.mjs` exit 0 and `node tests/tour.test.mjs` 0 failures on all eleven; that generation's `doctor` green on v2.3, v2.3 late, v3.0.0, v3.1.0, v3.1.1 and this tip; `validate --genesis` valid on v3.0.0, v3.1.0, v3.1.1; this tip: `tests/tour.test.mjs` 12/12, `validate --project .` valid, `render` and `doctor` exit 0 | `README.md`, `MEMORY.md`, catalog and projection updated | None |

## Completion Result

Eleven generation branches on one linear history, every room green on its own
commands, the history document at `workbench/docs/VERSION_HISTORY.md`, and the
v3.1.2 room unchanged at the tip apart from this record and its links.

## Remaining Limitations Or Follow-Up Specs

- The rooms were filled by different sessions from one brief, so a diff
  between neighbours carries some prose variance that is not contract change.
  Reading `VERSION_HISTORY.md` alongside the diff separates the two.
- The pre-v3 generations had no tooling to create a room, so those rooms are
  hand fills; they cannot prove that the templates of the day produced them,
  only that they follow them.
- A future generation is added by one more commit and branch at the tip; this
  spec does not automate that.

## Supersession

- none
