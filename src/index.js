import Vue from 'vue'
import App from './App.vue'
import router from './router'
// import App from './App6.jsx'
// import App from './App6.vue'
// const auth = {
//   loggedIn: () => {
//     return true
//   }
// }

// router.beforeEach((to, from, next) => {
//   console.log(to)
//   console.log('beforeEach')
//   // console.log(to.matched)
//   if (to.matched.some(record => record.meta.requiresAuth)) {
//     // next()
//     if (!auth.loggedIn()) {
//       next('/login')
//     }
//   }
//   next()
// })
// router.beforeResolve((to, from, next) => {
//   console.log('beforeResolve')
//   next()
// })
// router.afterEach((to, from) => {
//   console.log('afterEach')
// })
/* eslint no-new: "off" */
new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  render: h => h('App')

})
