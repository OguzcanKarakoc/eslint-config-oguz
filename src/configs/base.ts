import type { Linter } from "eslint"

export const base: Linter.Config = {
  rules: {
    "no-console": "warn",
    "no-debugger": "error"
  }
}
