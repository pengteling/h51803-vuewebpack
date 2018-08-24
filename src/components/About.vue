<template>
  <div>
    <div>关于我们</div>
    <nav>
      <router-link :to="{name:'Tel'}">电话</router-link>
      <router-link :to="{name:'Address'}">地址</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>
