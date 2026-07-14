import Vue from "vue";
import VueCountryCode from "vue-country-code";
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './styles.css' 

createApp(App).use(store).use(router).mount('#app')
Vue.use(VueCountryCode);

