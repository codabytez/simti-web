import type { UserConfig } from "@commitlint/types";

const config: UserConfig = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "type-enum": [
      2,
      "always",
      [
        "feat", // new feature
        "fix", // bug fix
        "chore", // tooling, deps, config
        "docs", // documentation only
        "style", // formatting, no logic change
        "refactor", // code restructure, no feature/fix
        "perf", // performance improvement
        "test", // adding/updating tests
        "revert", // reverting a commit
        "ci", // CI/CD changes
      ],
    ],
    "subject-case": [2, "always", "lower-case"],
    "header-max-length": [2, "always", 100],
  },
};

export default config;
