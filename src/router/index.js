import Home from '@/Home.vue'
import About from '@/About.vue'
// import User from '@/User.vue'
// import Login from '@/Login.vue'
import Router from 'vue-router'
import Vue from 'vue'

const User = () => import(/* webpackChunkName: "user" */ '@/User.vue')
const Login = () => import(/* webpackChunkName: "user" */ '@/Login.vue')

Vue.use(Router)
/*
route: 单路由  /home = > home
routes: 一组路由
router: 机制  管理理由者
 */

const routes = [
  // {
  //   path: '/',
  //   redirect: '/home'
  // },
  {
    name: 'Home',
    path: '/',
    component: Home
  },
  {
    // name: 'About2',
    path: '/about',
    component: About,
    beforeEnter: (to, from, next) => {
      // ...
      console.log('beforeEnter')
      next()
    },
    children: [
      {
        path: '',
        name: 'About',
        component: { template: `<div>About默认子路由</div>` }
      },
      {
        path: 'tel',
        name: 'Tel',
        component: {template: `<div>tel:021-12345677</div>`}
      },
      {
        path: 'addr',
        name: 'Address',
        component: {render: h => h('div', '上海市XXX路XX号')}
      }
    ]
  },
  {
    name: 'User',
    path: '/user',
    meta: { requiresAuth: true },
    // props: true,
    // props: {
    //   userid: 12345,
    //   test: 'tett'
    // },
    props: route => {
      return {
        userid: route.params.userid,
        sokey: route.query.sokey,
        sokey2: route.query.sokey2
      }
    },
    component: User,
    children: [
      {
        path: ':userid',
        name: 'Userwho',
        meta: { requiresAuth: true },
        props: true,
        component: {
          props: ['userid'],
          template: `
          <div>userid:{{userid}}</div>
          `
        }
      }
    ]
  },
  {
    name: 'Category',
    path: '/category',
    components: {
      default: {render: h => h('div', 'category默认')},
      a: {render: h => h('div', 'category-a')}
    }
  },
  // {
  //   path: '/',
  //   redirect: '/b'
  // }
  {
    path: '/a',
    component: { render: (h) => h('div', 'a') },
    alias: ['/b', '/c', '/d/c/f', '/about/aaa']
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  }
]

export default new Router({
  mode: 'history',
  routes,
  scrollBehavior (to, from, savedPosition) {
    // return {
    //   x: 0,
    //   y: 44
    // }
    // if (savedPosition) {
    //   console.log(savedPosition)
    //   return savedPosition
    // }
    if (to.hash) {
      console.log(to.hash)
      return {
        selector: to.hash
      }
    }
  }
})
