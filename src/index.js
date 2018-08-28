import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'

/* eslint no-new: "off" */
new Vue({
  el: '#app',
  router,
  store,
  components: {
    App
  },
  render: h => h('App')

})
