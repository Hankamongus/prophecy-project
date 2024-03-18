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
import Donate from './components/donate.vue'
import Home from './components/home.vue'
import Contact from './components/contact.vue'
import Sermons from './components/sermons.vue'
const routes = [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/donate', component: Donate },
    { path: '/contact', component: Contact },
    { path: '/prophecies', component: Prophecies },
    { path: '/sermons', component: Sermons }

]

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = createRouter({
    history: createWebHashHistory(),
    routes, // short for `routes: routes`
    scrollBehavior(to, from, savedPosition) {

        if (savedPosition) return savedPosition
        return { top: 0 }

    },
})

app.use(router)
app.mount('#app')
