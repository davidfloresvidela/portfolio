# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.

# Branch and commit flow

Never commit or merge directly into `main` — it only receives merges from
`dev` at tagged releases. All work happens on a branch named
`type/kebab-case-scope` (`feature`, `fix`, `chore`, `content`, `docs`,
`test`, `perf`, `refactor`) created from `dev`, and merges back to `dev`
via PR. Commit messages must follow Conventional Commits — this is
enforced by a `commit-msg` hook (commitlint) and again in CI, so a
malformed message will hard-fail, not just warn. Before considering a
branch done: `npm run lint`, `npm run typecheck`, `npm run format:check`
and `npm run build` must all pass — the same checks CI runs on every PR.
