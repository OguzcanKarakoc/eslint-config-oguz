import { base } from "./configs/base.js"
import { typescript } from "./configs/typescript.js"
import { reactConfig } from "./configs/react.js"
import { vueConfig } from "./configs/vue.js"
import { hasDependency } from "./utils/detect.js"

import type { Linter } from "eslint"

export function createConfig(): Linter.Config[] {
  const configs: Linter.Config[] = [base, ...typescript]

  if (hasDependency("react")) {
    configs.push(...reactConfig)
  }

  if (hasDependency("vue")) {
    configs.push(vueConfig)
  }

  return configs
}

export default createConfig() as Linter.Config[]

