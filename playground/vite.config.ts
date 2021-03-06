import vue from '@vitejs/plugin-vue'
import components from 'unplugin-vue-components/vite'
import { defineConfig } from 'vite'
import { VarletUIResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({ reactivityTransform: true }),
    components({
      resolvers: [VarletUIResolver()]
    }),
  ],
  resolve: {
    alias: {
      '@': '/src'
    }
  }
})
