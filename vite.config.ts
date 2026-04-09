import { lint, fmt, staged } from 'rattail/vite-plus'
import { defineConfig } from 'vite-plus'

export default defineConfig({
  lint: lint(),

  fmt: fmt(),

  staged: staged(),
})
