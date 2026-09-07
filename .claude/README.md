# `.claude/settings.json` - mechanical scope enforcement

`AGENTS.md` describes the edit scope in prose (honor system). This file makes the
boundary mechanical for Claude Code: the harness enforces it instead of trusting
the agent to remember. Other agents still read `AGENTS.md`; this is the belt to
that suspenders.

The placeholders were filled from the same scope drawn in `AGENTS.md` -> Edit
Scope. Paths are relative to the repository root, which is the working
directory when the room is opened. Each of the three permission buckets maps to
one declarative scope idea:

| Scope idea (from `AGENTS.md`) | Permission bucket | Effect |
|---|---|---|
| **writable roots** (`tour.mjs`, `tests/`, the docs to keep current) | `allow` | edits inside these paths run without a prompt |
| **forbidden paths** (secrets, credentials, build output) | `deny` | hard-blocked - takes precedence over everything |
| **requires review** (schema/migrations, `git push`, destructive commands) | `ask` | pauses for owner confirmation before running |

Notes:

- `deny` wins over `allow`, so the secret/credential rules hold even if a broad
  `allow` glob would otherwise match.
- If a scope covers several directories, expand the single placeholder rule into
  one rule per directory (e.g. `Edit(./src/**)`, `Edit(./lib/**)`). Here the
  source is one file, so the rule is `Edit(./tour.mjs)` rather than a glob.
- Delete any placeholder rule that does not apply to this project rather than
  leaving it unfilled. The build-output and schema/migrations rules were deleted
  for that reason: this room has no build output and no schema.
- This file is optional. Delete it if the project does not use Claude Code; the
  prose scope in `AGENTS.md` remains the source of truth for every agent.
