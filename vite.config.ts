import { lint, fmt, staged } from 'rattail/vite-plus'
import { defineConfig } from 'vite-plus'

export default defineConfig({
  pack: {
    entry: ['src/index.ts', 'src/use.ts', 'src/api.ts'],
    dts: true,
  },

  lint: lint(),

  fmt: fmt(),

  staged: staged(),
})
