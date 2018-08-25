<template>
  <div>
    <div>关于我们</div>
    <nav>
      <router-link :to="{name:'Tel'}">电话</router-link>
      <router-link :to="{name:'Address'}">地址</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  beforeRouteEnter (to, from, next) {
    // ...
    console.log('beforeRouteEnter')
    next(vm => {
      console.log('组件里的 next回调方法')
    })
  },
  beforeRouteLeave (to, from, next) {
    // ...
    console.log('beforeRouteLeave')
    next()
  },
  beforeRouteUpdate (to, form, next) {
    console.log('beforeRouteUpdate')
    next()
  },
  mounted () {
    console.log('mouted')
  },
  created () {
    console.log('created')
  },
  updated () {
    console.log('updated')
  }
}
</script>
