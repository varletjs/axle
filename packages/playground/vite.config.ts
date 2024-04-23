import vue from '@vitejs/plugin-vue'
import components from 'unplugin-vue-components/vite'
import autoImport from 'unplugin-auto-import/vite'
import { defineConfig } from 'vite'
import { VarletImportResolver } from '@varlet/import-resolver'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    components({
      resolvers: [VarletImportResolver()],
    }),
    autoImport({
      resolvers: [VarletImportResolver({ autoImport: true })],
      imports: ['vue'],
    }),
  ],
  resolve: {
    alias: {
      '@': '/src',
    },
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:8000',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
})
