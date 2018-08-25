<template>
  <ul>
    <li>
      <router-link to="/">首页</router-link>
    </li>
    <li>
      <router-link to="/category">分类</router-link>
    </li>
    <li>
      <router-link to="/cart">购物车</router-link>
    </li>
    <li>
      <router-link to="/me">我的</router-link>
    </li>
  </ul>
</template>
<style lang="scss" scoped>
ul{
  display: flex;
}
ul li{
  flex:1 1 0%;
  display: flex;
  justify-content: center;
  align-items: center;
  a{
    color:#333;
    text-decoration: none;
  }
}
</style>
