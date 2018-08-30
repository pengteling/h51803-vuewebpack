import vuex from 'vuex'
import Vue from 'vue'
import list from './list'
import player from './player'

Vue.use(vuex)

const store = new vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  modules: {
    list,
    player
  }
})
// 加上热更替功能
if (module.hot) {
  module.hot.accept([
    './list',
    './player'
  ], () => {
    const newModuleList = require('./list').default
    const newModulePlayer = require('./player').default
    store.hotUpdate({
      modules: {
        list: newModuleList,
        player: newModulePlayer
      }
    })
  })
}
export default store
