# `.claude/settings.json` - mechanical scope enforcement

`AGENTS.md` describes the edit scope in prose (honor system). This file makes the
boundary mechanical for Claude Code: the harness enforces it instead of trusting
the agent to remember. Other agents still read `AGENTS.md`; this is the belt to
that suspenders.

The placeholders were filled from the same scope drawn in `AGENTS.md` -> Edit
Scope. Paths are relative to the room root, which is the working directory when
the room is opened. Each of the three permission buckets maps to one declarative
scope idea:

| Scope idea (from `AGENTS.md`) | Permission bucket | Effect |
|---|---|---|
| **writable roots** (`tour.mjs`, `tests/`, `specs/`, the root controls, `MEMORY.md`, `WORKBENCH_FEEDBACK.md`) | `allow` | edits inside these paths run without a prompt |
| **forbidden paths** (secrets, credentials, build output) | `deny` | hard-blocked - takes precedence over everything |
| **requires review** (`git push`, destructive commands, this permission file itself) | `ask` | pauses for owner confirmation before running |

Notes:

- `deny` wins over `allow`, so the secret/credential rules hold even if a broad
  `allow` glob would otherwise match.
- The template's build-output deny rule and schema/migrations ask rule were
  deleted rather than left unfilled: this room has no build output and no
  schema. The template says to delete a placeholder rule that does not apply.
- `Edit(./.claude/**)` sits in `ask` because `AGENTS.md` names changes to this
  file as review-required.
- This file is optional. Delete it if the project does not use Claude Code; the
  prose scope in `AGENTS.md` remains the source of truth for every agent.
