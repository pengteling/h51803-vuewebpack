<template>
  <div class="app">
    <p>
      {{ value }}
    </p>
    <myComponent></myComponent>
  </div>
</template>

<script>
import myComponent from './components/MyComponent.vue'
import "./style/app.scss"
export default {
  data(){
    return {
      value:12345788
    }
  },
  components:{
    myComponent
  } 
}
</script>

<style lang="scss">
.app{
  p{
    font-size: 100px;
    color:red
  }
  
}
</style>
