import Main from '@/Main.vue'
import Footer from '@/Footer.vue'
import Home from '@/Home.vue'
import Cart from '@/Cart.vue'
import Category from '@/Category.vue'
import Me from '@/Me.vue'
import Phone from '@/Phone.vue'
import TV from '@/TV.vue'

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
    path: '/',
    components: {
      default: Main,
      footer: Footer
    },
    children: [
      {
        path: '',
        // name: 'Home',
        component: Home,
        meta: {
          index: 1
        },
        children: [
          {
            path: '',
            name: 'Phone',
            alias: ['phone', '3c'],
            component: Phone,
            meta: {
              index: 1
            }
          },
          {
            path: 'tv',
            name: 'TV',
            component: TV
          }
        ]
      },
      {
        path: 'cart',
        name: 'Cart',
        component: Cart,
        meta: {
          index: 3
        }
      },
      {
        path: 'category',
        name: 'Category',
        component: Category,
        meta: {
          index: 2
        }
      },
      {
        path: 'me',
        name: 'Me',
        component: Me,
        meta: {
          index: 4
        }
      }
    ]

  },
  {
    path: '/mpointsmall',
    component: {
      template: `
        <div><p data-v-364f2a12="" class="fz-m">请前往小米商城App查看会员福利</p></div>
      `
    }
  }
]

export default new Router({
  mode: 'history',
  routes
})
