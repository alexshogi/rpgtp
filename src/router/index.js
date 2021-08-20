import Vue from 'vue'
import VueRouter from 'vue-router'
import Overview from '../views/Overview.vue'
import CharClass from '../views/CharClass.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Overview',
    component: Overview
  },
  {
    path: '/classes/:charClass',
    name: 'CharClass',
    component: CharClass
  }
]

const router = new VueRouter({
  routes
})

export default router
