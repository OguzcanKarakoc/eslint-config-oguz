import { base } from "./configs/base.js"
import { typescript } from "./configs/typescript.js"
import { reactConfig } from "./configs/react.js"
import { vueConfig } from "./configs/vue.js"
import { nextConfig } from "./configs/next.js"
import { hasDependency } from "./utils/detect.js"

import type { Linter } from "eslint"

export function createConfig(): Linter.Config[] {
  const configs: Linter.Config[] = [base, ...typescript]
  const hasReact = hasDependency("react")
  const hasVue = hasDependency("vue")
  const hasNext = hasDependency("next")
  
  if (hasNext) {
    configs.push(...nextConfig)
  }

  if (hasReact && !hasNext) {
    configs.push(...reactConfig)
  }

  if (hasVue) {
    configs.push(vueConfig)
  }

  return configs
}

export default createConfig() as Linter.Config[]

