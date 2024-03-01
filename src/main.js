import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import './style.css'
import App from './App.vue'

const app = createApp(App)

// 2. Define some routes
// Each route should map to a component.
// We'll talk about nested routes later.
import Prophecies from './components/prophecies.vue'
import About from './components/about.vue'

const routes = [
    { path: '/', component: Prophecies },
    { path: '/about', component: About },
]

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = createRouter({
    // 4. Provide the history implementation to use. We
    // are using the hash history for simplicity here.
    history: createWebHashHistory(),
    routes, // short for `routes: routes`
})

app.use(router)
app.mount('#app')
