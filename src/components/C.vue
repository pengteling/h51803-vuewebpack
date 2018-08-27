<template>
  <div>这是C组件
    {{ $store.state.msg }}
  </div>
</template>
<script>
import { mapActions } from 'vuex'
export default {
  methods: {
    ...mapActions(['loadData'])
  },
  created () {
    // this.loadData()//
    this.$store.dispatch('loadData', {
      time: new Date()
    })
  }

}
</script>
