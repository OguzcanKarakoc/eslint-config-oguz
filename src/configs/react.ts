import { defineConfig } from "eslint/config"
import base from "./base.js"

const reactConfig = defineConfig([
  base,
  {
    rules: {
      "react/react-in-jsx-scope": "off"
    }
  }
])

export default reactConfig
