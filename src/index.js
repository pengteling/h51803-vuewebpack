import Vue from 'vue'
import App from './App.vue'
// import App from './App6.jsx'
// import App from './App6.vue'

import Home from '@/Home.vue'
import About from '@/About.vue'
import User from '@/User.vue'
import Router from 'vue-router'

Vue.use(Router)
/*
route: 单路由  /home = > home
routes: 一组路由
router: 机制  管理理由者
 */

const routes = [
  {
    name: 'Home',
    path: '/',
    component: Home
  },
  {
    name: 'About',
    path: '/about',
    component: About
  },
  {
    name: 'User',
    path: '/user',
    component: User
  }
]

const router = new Router({
  mode: 'history',
  routes
})
/* eslint no-new: "off" */
new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  render: h => h('App')

})
