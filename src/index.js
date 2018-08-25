import Vue from 'vue'
import App from './App.vue'
import router from './router'
// import App from './App6.jsx'
// import App from './App6.vue'

router.beforeEach((to, from, next) => {
  console.log('beforeEach')
  next()
})
router.beforeResolve((to, from, next) => {
  console.log('beforeResolve')
  next()
})
router.afterEach((to, from) => {
  console.log('afterEach')
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
