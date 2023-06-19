import App from './App.vue'
import { createApp } from 'vue'
import { createUseAxle } from '@varlet/axle/use'
import '@varlet/touch-emulator'

console.log(createUseAxle)

createApp(App).mount('#app')
