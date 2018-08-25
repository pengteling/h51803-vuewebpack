<template>
  <div>
    会员中心
    <!-- {{ $route.query.id }} -->
    {{ $attrs }}
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  props: ['userid', 'sokey'],
  beforeRouteEnter (to, from, next) {
    // ...
    // 导航之前请求数据
    if (to) {
      console.log('会员页获取数据失败')
      next(false)
    } else {
      next()
    }
  },
  created () {
    // ajax//
  },
  mounted () {
    // console.log(this.$route)
    if (this.$route.params.userid) {
      // ....
    }
    // console.log(this.$route.params.userid)
  },
  beforeRouteUpdate (to, from, next) {
    console.log('beforeRouteUpdate')
    next()
  }
}
</script>
