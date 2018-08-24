import Vue from 'vue'
import App from './App.vue'
import router from './router'
// import App from './App6.jsx'
// import App from './App6.vue'

/* eslint no-new: "off" */
new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  render: h => h('App')

})
