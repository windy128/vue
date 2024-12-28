import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'

// 引入样式
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import './assets/css/admin/sb-admin-2.css'
import './assets/css/admin/boot-crm.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app') 