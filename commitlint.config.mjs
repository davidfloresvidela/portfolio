const commitlintConfig = {
  extends: ["@commitlint/config-conventional"],
  // Squash-merged release PRs land on main titled "Release vX.Y.Z (#N)".
  // Those commits reach dev's history whenever main is merged back, so
  // without this they fail the PR commit check forever.
  ignores: [(message) => /^Release v\d+\.\d+\.\d+/.test(message)],
  rules: {
    // Adds "content" (data/copy-only changes) to the default type list —
    // documented as a valid type in .cursor/rules but missing here, which
    // blocked the first "content:" commit from landing.
    "type-enum": [
      2,
      "always",
      [
        "build",
        "chore",
        "ci",
        "content",
        "docs",
        "feat",
        "fix",
        "perf",
        "refactor",
        "revert",
        "style",
        "test",
      ],
    ],
  },
};

export default commitlintConfig;
