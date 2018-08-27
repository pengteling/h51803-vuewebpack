<template>
  <div>
    <h2>A组件</h2>
    <p>
      {{ $store.state.msg }}
    </p>
    <p>
      <!-- {{ msg }}
      {{ count }} -->
      {{ count }} <br>
      {{ this.$store.getters.secUser }}
      <br>
      {{ secUser }}
    </p>
    <B></B>
  </div>
</template>
<script>
import B from '@/B'
import { mapState, mapGetters, mapMutations } from 'vuex'
export default {
  components: {
    B
  },
  // computed: mapState(['msg', 'count', 'users']),
  computed: {
    ...mapState({
      count: 'count',
      msg2: 'msg', // this.$store.sate.msg
      users: 'users',
      vmsg (state) {
        return state.msg + ' ' + state.users[0].name
      }
    }),
    ...mapGetters(['secUser']),
    ...mapGetters({
      user2: 'secUser',
      userWho: 'userWho'
      // user3 (state, getters) {
      //   return getters.userWho({
      //     id: 2
      //   })
      // }
    }),
    user3 () {
      // return this.$store.getters.userWho({
      //   id: 2
      // })
      return this.userWho({
        id: 2
      })
    },
    mymsg () {
      return this.message + '!'
    }
    // secUser () {
    //   return this.users[1]
    // }
  },
  methods: {
    ...mapMutations(['addCount']),
    ...mapMutations({
      addCountComp: 'addCount'
    })
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
    //   // this.$store.state.msg = 'hello'
    //   this.$store.state.users[1].name = 'ml'
    // }, 3000)
    // console.log(this.$store._mutations.addCount[0]())
    // this.$store
    // console.log(this.$store.getters.secUser)
    setInterval(() =>
      // this.$store.commit('addCount')
      // this.addCount()
      this.addCountComp()
      , 1000
    )
  }
}
</script>
