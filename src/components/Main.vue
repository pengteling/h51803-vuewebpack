<template>
  <div class="main">
    <transition :name="slider">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  beforeRouteUpdate (to, from, next) {
    console.log('beforeRouteUpdate')
    console.log(to.meta.index)
    console.log(from.meta.index)
    if (to.meta.index > from.meta.index) {
      this.slider = 'slider2'
    } else {
      this.slider = 'slider'
    }
    next()
  },
  data () {
    return {
      slider: 'slider2'
    }
  }
}
</script>
