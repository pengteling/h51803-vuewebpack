<template>
  <div>
    <h2>路由</h2>
    <nav>
      <!-- <a href="/">Home</a> -->
      <router-link to="/">Home</router-link>
      <!-- <a href="/about">About</a> -->
      <router-link to="/about">About</router-link>
      <!-- <a href="/user">User</a> -->
      <router-link to="/user">User</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>
