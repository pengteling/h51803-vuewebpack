<template>
  <div>
    会员中心
    {{ $route.query.id }}
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  mounted () {
    console.log(this.$route)
    if (this.$route.query.id) {
      // ....
    }
    console.log(this.$route.params.userid)
  }
}
</script>
