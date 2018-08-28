export default {
  namespaced: true,
  state: {
    count: 2
  },
  getters: {
    bCount (state) {
      return state.count * 1234
    }
  },
  mutations: {
    mbCount (state) {
      state.count = 343434
    }
  }
}
