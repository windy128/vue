import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import axios from 'axios'
import router from './router/index.js'


axios.defaults.baseURL = "http://localhost:8080"

const app = createApp(App)

// app.use(axios)
app.use(router)
app.use(ElementPlus)
app.mount('#app')