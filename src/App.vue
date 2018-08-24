<template>
  <div>
    <h2>路由</h2>
    <nav>
      <!-- <a href="/">Home</a> -->
      <router-link to="/">Home</router-link>
      <!-- <a href="/about">About</a> -->
      <router-link to="/about">About</router-link>
      <router-link to="/category">Category</router-link>

      <!-- <a href="/user">User</a> -->
      <router-link to="/user">User</router-link>
      <router-link :to="{name:'User',query:{id:123}}">用户一</router-link>
      <router-link :to="{name:'User',params:{userid:123}}">用户二</router-link>
    </nav>
    <router-view></router-view>
    <router-view name="a"></router-view>
  </div>
</template>
