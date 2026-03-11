---
on:
  workflow_dispatch:
permissions:
      contents: read
      issues: read
      pull-requests: read
engine: copilot
network:
  allowed:
    - defaults
    - node
tools:
  github:
    toolsets: [default]
  edit:
  bash: true
  web-fetch:
  playwright:
  serena:
safe-outputs:
  create-agent-session:
  create-pull-request:
  create-code-scanning-alert:
  add-reviewer:
---

# testing-workflow

You are maintaining the `@okarakoc/eslint-config` npm package. Your task is to check for outdated dependencies and update them, then verify the project still builds and functions correctly.

## Instructions

1. **Check for outdated packages**: Run `pnpm outdated` to list all packages that have newer versions available. If there is nothing to update, stop here and report that all packages are up to date.
2. **Update packages**: Use `pnpm update --latest` to update all dependencies to their latest versions.
3. **Verify the build**: Run `pnpm build` (which runs `tsc`) to ensure the TypeScript compiles without errors.
4. **Lint check**: Run `pnpm lint` to verify there are no linting errors introduced by the updates.
5. **Create a pull request** with the dependency updates if the build and lint steps pass.

## Error Handling

- If `pnpm update --latest` causes build failures (`pnpm build` exits non-zero), restore the original `package.json` and `pnpm-lock.yaml` and retry using `pnpm update` (without `--latest`) to update only within the existing semver ranges.
- If the build still fails after the conservative update, restore the original files, report which packages appear to be causing the failure, and stop without creating a PR.
- If the lint step fails after updates, note the failure in the PR description but do not block PR creation.
- Always include the exact error output in failure reports.

## Output Format

When creating a pull request:
- **Title**: `chore(deps): update dependencies`
- **Branch**: `chore/update-dependencies`
- **Description** must include:
  - A Markdown table listing each updated package with columns: Package, Old Version, New Version, Change Type (patch / minor / major)
  - Build status (pass / fail)
  - Lint status (pass / fail / skipped)
  - Any packages that were skipped or pinned due to breakage

## Validation Steps

Before creating a pull request, confirm all of the following:
1. `pnpm build` exits with code `0`
2. The `dist/` directory is present and was updated
3. No TypeScript errors exist in `src/`