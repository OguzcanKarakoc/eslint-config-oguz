import eslint from '@eslint/js';
import { defineConfig } from 'eslint/config';
import tseslint from 'typescript-eslint';
import stylistic from '@stylistic/eslint-plugin'

const base = defineConfig([
  { 
    plugins: { 
      '@stylistic': stylistic
    },
    rules: {
      '@stylistic/indent': ['error', 2],

    }
  },
  eslint.configs.recommended,
  tseslint.configs.recommended,
  {
    rules: {
      "no-console": "warn",
      "no-debugger": "error"
    }
  },
])

export default base

