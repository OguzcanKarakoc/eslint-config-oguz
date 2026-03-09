import base from "./configs/base.js"
import nextConfig from "./configs/next.js"
import reactConfig from "./configs/react.js"
import { createTailwindcssConfig, type TailwindcssOptions } from "./configs/tailwindcss.js"
import vueConfig from "./configs/vue.js"
import { hasDependency } from "./utils/detect.js"

import type { Linter } from "eslint"

export interface ConfigOptions {
  tailwindcss?: TailwindcssOptions;
}

export default function createConfig(options: ConfigOptions = {}): Linter.Config[] {
  const configs: Linter.Config[] = base,
    hasReact = hasDependency("react"),
    hasNuxt = hasDependency("nuxt"),
    hasVue = hasDependency("vue"),
    hasNext = hasDependency("next"),
    hasTailwindcss = hasDependency("tailwindcss")
  
  if (hasNext) {
    configs.push(...nextConfig)
  }

  if (hasReact && !hasNext) {
    configs.push(...reactConfig)
  }

  if (hasNuxt) {
    // Configs.push(...nuxtConfig)
  }

  if (hasVue && !hasNuxt) {
    configs.push(...vueConfig)
  }

  if (hasTailwindcss) {
    configs.push(...createTailwindcssConfig(options.tailwindcss))
  }

  return configs
}
