import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './styles.css' 

const app = createApp(App)

app.use(store)
app.use(router)

// Note: If vue-country-code is a Vue 2 library, you might need to check for a Vue 3 compatible version 
// or register it properly using app.use() if it supports Vue 3:
// import VueCountryCode from "vue-country-code"
// app.use(VueCountryCode)

app.mount('#app')