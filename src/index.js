import Vue from 'vue'
import App from './App.vue'
import store from './store'

/* eslint no-new: "off" */
new Vue({
  el: '#app',
  store,
  components: {
    App
  },
  render: h => h('App')

})
