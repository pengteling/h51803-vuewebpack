import vuex from 'vuex'
import Vue from 'vue'
Vue.use(vuex)

export default new vuex.Store({
  state: {
    msg: 'hi,vue.js!',
    count: 0,
    users: [
      {id: 1, name: 'zs'},
      {id: 2, name: 'ls'},
      {id: 3, name: 'ww'}
    ]
  }
})
