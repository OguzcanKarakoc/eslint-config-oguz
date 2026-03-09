import { globalIgnores } from "eslint/config";
import { base } from "./base.js"
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
import type { Linter } from "eslint"

export const nextConfig: Linter.Config[] = [
  base,
  ...nextVitals, 
  ...nextTs,
  globalIgnores([
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
]
