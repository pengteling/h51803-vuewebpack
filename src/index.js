import Vue from 'vue'
// import App from './App.vue'
import App from './App6.jsx'

/* eslint no-new: "off" */
new Vue({
  el: '#app',
  components: {
    App
  },
  // render: h => h('div','test')
  // render: h => h('App')
  template: '<App></App>'
  // render(h){
  //   return h('App')

  // }

})// .$mount('#app')
