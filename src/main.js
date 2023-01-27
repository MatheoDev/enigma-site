import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import './assets/main.css'

const app = createApp(App)

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'
/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
/* import specific icons */
import { faArrowTrendUp } from '@fortawesome/free-solid-svg-icons'
/* add icons to the library */
library.add(faArrowTrendUp)
/* add font awesome icon component */
app.component('font-awesome-icon', FontAwesomeIcon)

app.use(router)
app.use(store)

app.mount('#app')
