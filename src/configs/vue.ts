import vue from "eslint-plugin-vue"
import { defineConfig } from "eslint/config"

const vueConfig = defineConfig([
  {
    plugins: {
      vue
    }
  },
  {
    extends: [
      "airbnb",
      "airbnb/hooks"
    ]
  }
])

export default vueConfig
