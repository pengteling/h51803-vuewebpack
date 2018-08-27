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
  },
  getters: {
    secUser (state) {
      return state.users[1]
    },
    // payload :{ id:0}
    userWho: state => (payload) => {
      return state.users[payload.id]
    }
  },
  mutations: {
    addCount (state) {
      state.count++
    }
  }
})
