import './assets/main.css'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
import '@fortawesome/fontawesome-free/css/all.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'

library.add(fas)

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
  .use(router)
  .component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')
