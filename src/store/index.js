import vuex from 'vuex'
import Vue from 'vue'
import axios from 'axios'
import { ADD_COUNT_TYPE } from './mutations-types'
// import * as types from './mutations-types'
import moduleA from './modules/moduleA'
Vue.use(vuex)

export default new vuex.Store({
  state: {
    msg: 'hi,vue.js!',
    count: 0,
    users: [
      {id: 1, name: 'zs'},
      {id: 2, name: 'ls'},
      {id: 3, name: 'ww'}
    ],
    obj: {
      id: 1,
      name: 'zs'
    },
    musicList: ''
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
    // 事件类型
    addCount (state) {
      state.count++
    },
    // payload: { step:3 }
    // addCountStep (state, num) {
    //   state.count += num
    // }
    addCountStep (state, payload) {
      state.count += payload.step
    },
    changeObj (state) {
      // state.obj.sex = 'male'
      // state.obj = {...state.obj, sex: 'male'}
      state.obj = Object.assign({}, state.obj, {sex: 'male'})
    },
    [ADD_COUNT_TYPE] (state) {
      state.count++
    },
    // 课堂中演示bug 修正如下
    // [types.ADD_COUNT_TYPE] (state) {
    //   state.count++
    // },
    changeMusicList (state, val) {
      state.musicList = val
    }
  },
  actions: {
    loadData ({ commit }, payload) {
      console.log(payload)
      return axios.get('http://music.henshui.com/api/musicList.js?!234')
        .then(res => {
          console.log(res)
          commit('changeMusicList', res.data)
        })
    }
  },
  modules: {
    moduleA: moduleA
  }
})
