import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/global.css'

const app = createApp(App);
app.provide('router', router); // Provide the 'router' instance
app.use(router);
app.mount('#app');