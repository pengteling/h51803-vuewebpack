<template>
  <div>
    <h2>首页</h2>
    <div class="home">

      <!-- <span id="miaodian">test</span> -->
      <a name="miaodian">miaodian</a>
    </div>

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
<style>
.home{
  height: 2000px;
  padding-top: 1000px;
  background: #580;
}
</style>
