import { defineConfig } from "eslint/config"
import eslintPluginBetterTailwindcss from "eslint-plugin-better-tailwindcss";

export interface TailwindcssOptions {
  /** Path to the CSS entry file for Tailwind v4 (e.g. `src/global.css`) */
  entryPoint?: string;
  /** Path to the Tailwind config file for Tailwind v3 (e.g. `tailwind.config.js`) */
  tailwindConfig?: string;
}

export function createTailwindcssConfig(options: TailwindcssOptions = {}) {
  return defineConfig([
    {
      extends: [
        eslintPluginBetterTailwindcss.configs.recommended
      ],
      settings: {
        "better-tailwindcss": {
          ...(options.entryPoint ? { entryPoint: options.entryPoint } : {}),
          ...(options.tailwindConfig ? { tailwindConfig: options.tailwindConfig } : {}),
        }
      }
    }
  ])
}

export default createTailwindcssConfig()
