import { defineConfig, lint, fmt, staged, clean, hook } from 'rattail/vite-plus'

export default defineConfig({
  pack: {
    entry: ['src/index.ts', 'src/use.ts', 'src/api.ts'],
    dts: true,
  },

  lint: lint(),

  fmt: fmt(),

  staged: staged(),

  rattail: {
    clean: clean(),

    hook: hook(),
  },
})
