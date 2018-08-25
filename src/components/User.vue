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
