import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router/index'
import store from '@/store/index'
import 'normalize.css'
import './assets/style/index.less'
import globalElement from './global/register-element'
import PiniaPersist from 'pinia-plugin-persist'
import { setupStore } from '@/store/common'
store.use(PiniaPersist)
const app = createApp(App)
app.use(globalElement)
app.use(store)
app.use(router)
app.mount('#app')
setupStore()
