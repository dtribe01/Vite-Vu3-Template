import { createApp, createStaticVNode } from 'vue';

import App from './App.vue';
import './style.css';
import router from './router'       // Get the index.js file that contains the routes

const app =createApp(App)

app.use(router)
app.mount('#app');
