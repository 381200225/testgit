import Vue from 'vue'
import ElementUI from 'element-ui';
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
 
import 'element-ui/lib/theme-chalk/index.css';

 

createApp(App).use(ElementUI).use(store).use(router).mount('#app')
