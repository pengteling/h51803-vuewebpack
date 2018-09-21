import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import MetaInfo from 'vue-meta-info'

Vue.use(MetaInfo)
/* eslint no-new: "off" */
new Vue({
  el: '#app',
  router,
  store,
  components: {
    App
  },
  render: h => h('App'),
  /* 这句非常重要，否则预渲染将不会启动 */
  mounted () {
    document.dispatchEvent(new Event('render-event'))
  }
})
