import { createApp } from 'vue'
import './style.css'
import 'normalize.css';
import router from './route/index.js'
import App from './App.vue'

createApp(App).use(router).mount('#app')
