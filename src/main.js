import { createApp } from 'vue'
import './style.css'
import 'normalize.css';
import router from './route/index.js'
import App from './App.vue'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/reset.css';


createApp(App).use(router).use(Antd).mount('#app')
