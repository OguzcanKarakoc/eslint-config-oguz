
import type { Linter } from "eslint"
import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';

export const typescript: Linter.Config[] = [
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
]
