import { defineConfig } from 'vite-plus'

export default defineConfig({
  pack: {
    entry: ['src/index.ts', 'src/use.ts', 'src/api.ts'],
    format: ['esm'],
    dts: true,
    clean: true,
  },
})
