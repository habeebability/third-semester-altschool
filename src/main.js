import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// import './assets/main.css'

import './assets/base.css'

import mdiVue from 'mdi-vue/v3'
import * as mdijs from '@mdi/js'

const app = createApp(App)

app.use(mdiVue, {
  icons: mdijs
})

app.use(router)
app.use(store)

app.mount('#app')
