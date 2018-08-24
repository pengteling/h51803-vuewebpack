import Vue from 'vue'
// import App from './App.vue'
import App from './App6.jsx'
// import App from './App6.vue'

/* eslint no-new: "off" */
new Vue({
  el: '#app',
  components: {
    App
  },
  // render: h => h('div','test')
  // render: h => h('App')
  template: '<App prop1="prop1" class="a" style="color:red" @click="handlerClick">test</App>',
  methods: {
    handlerClick () {
      console.log('clicked')
    }
  },
  provide () {
    return {
      pmsg: 'p123'
    }
  }
  // render(h){
  //   return h('App')

  // }

})// .$mount('#app')
