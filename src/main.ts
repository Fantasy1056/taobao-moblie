import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import '@/css/index.css'
import '@/js/rem.js'
import { createPinia } from 'pinia'

const app = createApp(App)
app.use(createPinia)
app.use(router).mount('#app')
