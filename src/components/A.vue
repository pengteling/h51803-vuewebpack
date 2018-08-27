<template>
  <div>
    <h2>A组件</h2>
    <p>
      {{ $store.state.msg }}
    </p>
    <p>
      <!-- {{ msg }}
      {{ count }} -->
    </p>
    <B></B>
  </div>
</template>
<script>
import B from '@/B'
import { mapState } from 'vuex'
export default {
  components: {
    B
  },
  // computed: mapState(['msg', 'count', 'users']),
  computed: {
    ...mapState({
      msg2: 'msg', // this.$store.sate.msg
      vmsg (state) {
        return state.msg + ' ' + state.users[0].name
      }
    }),
    mymsg () {
      return this.message + '!'
    }
  },

  // computed: {
  //   mymsg () {
  //     return this.message + '!'
  //   }
  // },
  data () {
    return {
      message: 'hi'
    }
  },
  mounted () {
    // setTimeout(() => {
    //   this.$store.state.msg = 'hello'
    // }, 3000)
    console.log(this.$store)
  }
}
</script>
