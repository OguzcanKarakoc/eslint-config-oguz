import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
import base from "./base.js";
import type { ConfigOptions } from "../index.js";
import boundaries from "eslint-plugin-boundaries";
import typescriptParser from "@typescript-eslint/parser";

export function createNextConfig(options: ConfigOptions['architecture'] = undefined) {
  const nextConfig= defineConfig([
    base,
    nextVitals, 
    nextTs,
    globalIgnores([
      ".next/**",
      "out/**",
      "build/**",
      "next-env.d.ts",
    ]),
    {
      languageOptions: {
        parser: typescriptParser,
      },
      plugins: {
        boundaries: boundaries.default,
      },
      settings: {
        "import/resolver": {
          typescript: {
            alwaysTryTypes: true,
          },
        },
      },
    }
  ])

  return nextConfig
}

export default createNextConfig()
