# `.claude/settings.json` - mechanical scope enforcement

`AGENTS.md` describes the edit scope in prose (honor system). This file makes the
boundary mechanical for Claude Code: the harness enforces it instead of trusting
the agent to remember. Other agents still read `AGENTS.md`; this is the belt to
that suspenders.

The rules were filled from the same scope written in `AGENTS.md` -> Edit Scope.
Each of the three permission buckets maps to one declarative scope idea:

| Scope idea (from `AGENTS.md`) | Permission bucket | Effect |
|---|---|---|
| **writable roots** (`tour.mjs`, `tests/`, `specs/`, the root controls, `HARNESS_FEEDBACK.md`) | `allow` | edits inside these paths run without a prompt |
| **forbidden paths** (secrets, credentials, `.env`, key files) | `deny` | hard-blocked - takes precedence over everything |
| **requires review** (`git push`, `rm -rf`, this `.claude/` directory itself) | `ask` | pauses for owner confirmation before running |

Notes:

- `deny` wins over `allow`, so the secret/credential rules hold even if a broad
  `allow` glob would otherwise match.
- This room has no build output directory and no schema or migrations
  directory, so the template rules for those were deleted rather than left
  unfilled, as the template note says to do.
- The allowed `Bash` rules are exactly the verification commands in
  `RUNBOOK.md` -> Test And Build; the spec tool runs from a harness checkout
  outside the room and is not pre-allowed.
- This file is optional. Delete it if the project does not use Claude Code; the
  prose scope in `AGENTS.md` remains the source of truth for every agent.
