<template>
  <div class="container">
    <transition :name="slider" @enter="enter">
      <router-view></router-view>
    </transition>
    <router-view name="footer" class="footer"></router-view>
  </div>
</template>
<script>
export default {
  data () {
    return {
      slider: 'slider'
    }
  },
  methods: {
    enter (el, done) {
      console.log('enter')
      done()
    }
  }
}
</script>

<style lang="scss">
html,body{
  overflow: hidden;
}
ul,li{
  list-style: none;
  padding: 0;
  margin:0
}
.container{
  display: flex;
  height: 100vh;
  flex-direction: column;
}
.main{
  flex:1 1 0%;
  overflow: hidden;
}
.footer{
  flex:0 0 50px;
  background: linear-gradient(rgba(#eee,0.9), rgba(#eee,0.3))
}
.slider-enter-active, .slider-leave-active{
  position: absolute;
  transition:  all 0.5s;
}
.slider-enter{
  transform: translate3d(-300px,0,0)
}
.slider-leave-to{
  transform: translate3d(300px,0,0)
}

.slider2-enter-active, .slider2-leave-active{
  position: absolute;
  transition:  all 0.5s;
}
.slider2-enter{
  transform: translate3d(300px,0,0)
}
.slider2-leave-to{
  transform: translate3d(-300px,0,0)
}

// .app > div{
//   position: absolute;
//   width: 100%;
// }
body{
  margin:0
}
</style>
