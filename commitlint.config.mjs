const commitlintConfig = {
  extends: ["@commitlint/config-conventional"],
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
