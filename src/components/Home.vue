<template>
  <div>
    首页
  </div>
</template>
<script>
export default {
  beforeRouteLeave (to, from, next) {
    // ...
    console.log('beforeRouteLeave')
    next()
  }
}
</script>
