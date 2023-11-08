import Home from "../components/Home.vue"
import About from "../components/About.Vue"
import Services from "../components/Services.Vue"
import Contact from "../components/Contact.Vue"

import {createRouter, createWebHistory } from "vue-router"

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/services', component: Services },
  { path: '/contact', component: Contact },
]

const router = createRouter({

  history: createWebHistory(),
  routes, // short for `routes: routes`
})

export default router