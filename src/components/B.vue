<template>
  <div>
    <h2>B组件</h2>
    <p>{{ $store.state.msg }}</p>
    <C></C>
  </div>
</template>
<script>
import { mapState } from 'vuex'
import C from '@/C'
export default {
  components: {
    C
  },
  computed: {
    ...mapState(['users']),
    secUser () {
      return this.users[1]
    }
  }
}
</script>
