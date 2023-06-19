import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App);
app.provide('router', router); // Provide the 'router' instance
app.use(router);
app.mount('#app');