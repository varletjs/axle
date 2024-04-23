import App from './App.vue'
import { createApp } from 'vue'
import '@varlet/touch-emulator'
import { Themes } from '@varlet/ui'

createApp(App).mount('#app')

StyleProvider(Themes.md3Dark)
