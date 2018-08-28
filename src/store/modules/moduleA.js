import moduleB from './moduleB'
export default {
  namespaced: true,
  state: {
    count: 1
  },
  getters: {
    aCount (state, getters, rootState, rootGetters) {
      // return state.count * 2 * rootState.count
      return state.count * 2
    }
  },
  mutations: {
    addCount (state, payload) {
      state.count = state.count * payload.num
    }
  },
  actions: {
    loadDataA ({state, getters, commit, dispatch, rootState, rootGetters}, payload) {
      console.log(rootGetters)
      commit('addCount', payload)
    },
    loadDataB ({rootState, dispatch, commit}) {
      // commit('addCount', null, {root: true})
      commit('moduleA/moduleB/mbCount', null, {root: true})
      return dispatch('loadData', null, {root: true})
        .then(() => console.log('dispatch promise'))
    },
    async loadDataB2 ({commit, dispatch}) {
      await dispatch('loadDataB')
      console.log('loadDataB2')
    }
  },
  modules: {
    moduleB: moduleB
  }
}
