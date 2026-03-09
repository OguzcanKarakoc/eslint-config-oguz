import { base } from "./base.js"
import type { Linter } from "eslint"

export const reactConfig: Linter.Config[] = [
  base,
  {
    rules: {
      "react/react-in-jsx-scope": "off"
    }
  }
]
