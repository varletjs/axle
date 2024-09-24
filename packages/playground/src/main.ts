import App from './App.vue'
import { createApp } from 'vue'
import '@varlet/touch-emulator'
import { Themes } from '@varlet/ui'

StyleProvider(Themes.md3Dark)

createApp(App).mount('#app')
