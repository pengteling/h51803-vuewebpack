<template>
  <div>
    <h2>首页</h2>
    <nav>
      <router-link :to ="{ name: 'Phone'} ">手机</router-link>
      <router-link :to ="{ name: 'TV'} ">TV</router-link>
      <router-link to ="/3c">家电</router-link>
    </nav>
    <transition name="slider">
      <router-view></router-view>
    </transition>
  </div>
</template>
