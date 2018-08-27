<template>
  <div>
    <h2>B组件</h2>
    <p>{{ $store.state.msg }}</p>
    <C></C>
  </div>
</template>
<script>
import C from '@/C'
export default {
  components: {
    C
  }
}
</script>
