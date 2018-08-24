import Home from '@/Home.vue'
import About from '@/About.vue'
import User from '@/User.vue'
import Router from 'vue-router'
import Vue from 'vue'

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
    // name: 'About2',
    path: '/about',
    component: About,
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
    component: User,
    children: [
      {
        path: ':useid',
        name: 'Userwho',
        component: {render: h => h('div', '用户某')}
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
  }
]

export default new Router({
  mode: 'history',
  routes
})
