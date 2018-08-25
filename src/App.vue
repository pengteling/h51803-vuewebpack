<template>
  <div class="app">
    <h2>路由</h2>
    <nav>
      <!-- <a href="/">Home</a> -->
      <router-link to="/">Home</router-link>
      <!-- <router-link to="/#miaodian">Home</router-link> -->
      <!-- <a href="/about">About</a> -->
      <router-link to="/about">About</router-link>
      <router-link to="/category">Category</router-link>

      <!-- <a href="/user">User</a> -->
      <router-link to="/user">User</router-link>
      <router-link :to="{name:'User',query:{id:123}}">用户一</router-link>
      <router-link :to="{name:'User',params:{userid:123}}">用户二</router-link>
      <router-link to="/user/123">用户三</router-link>
      <button @click="changUrl">编程式导航</button>
    </nav>
    <transition name="slider">
      <router-view></router-view>
      <router-view name="a"></router-view>
    </transition>

  </div>
</template>
<script>
export default {
  // mounted () {
  //   setTimeout(() => {
  //     this.$router.push('about')
  //   }, 3000)
  // },
  methods: {
    changUrl () {
      // this.$router.push('user', () => {
      //   console.log('completed')
      // })
      this.$router.push(
        {path: '/user', name: 'Userwho', query: { test: 123 }, params: { userid: 456 }}
      )
    }
  }
}
</script>

<style>
.slider-enter-active, .slider-leave-active{
  transition:  all 0.5s;
}
.slider-enter{
  transform: translate3d(-300px,0,0)
}
.slider-leave-to{
  transform: translate3d(300px,0,0)
}
.app > div{
  position: absolute;
  width: 100%;
}
body{
  margin:0
}
</style>
