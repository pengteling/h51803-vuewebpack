<template>
  <div>这是C组件
    <!-- {{ $store.state.msg }} -->
    {{ $store.state.moduleA }}
    {{ $store.getters['moduleA/aCount'] }}
  </div>
</template>
<script>
import { mapState, mapGetters, mapActions, mapMutations } from 'vuex'
export default {
  computed: {
    ...mapState({
      aa: state => state.moduleA.count
    }),
    ...mapState('moduleA/moduleB', {
      bStateCount2: state => state.count
    }),
    ...mapState('moduleA', ['count']),
    ...mapState('moduleA/moduleB', {
      bStateCount: 'count'
    }),
    // ...mapGetters(['aCount'])
    // ...mapGetters(['moduleA/aCount','moduleA/moduleB/bCount'])
    ...mapGetters('moduleA', ['aCount']),
    ...mapGetters('moduleA/moduleB', ['bCount']),
    ...mapGetters('moduleA/moduleB', {
      bb: 'bCount'
    })
  },
  methods: {
    ...mapActions(['loadData']),
    // ...mapMutations(['modulA/addCount'])
    ...mapMutations('moduleA', ['addCount']),
    ...mapMutations('moduleA', {
      aAddCount: 'addCount'
    }),
    // ...mapActions(['moduleA/loadDataA']),
    ...mapActions('moduleA', ['loadDataA', 'loadDataB2']),
    ...mapActions('moduleA', {
      loadDataComp: 'loadDataA',
      loadDataB: 'loadDataB'
    })

  },
  created () {
    // this.loadData()//
    this.$store.dispatch('loadData', {
      time: new Date()
    })
  },
  mounted () {
    // console.log(this.$store)
    console.log(this['moduleA/aCount'])
    // this.addCount({num: 30})
    // this.loadDataA({num: 60})
    // this.loadDataComp({num: 60})
    // this.loadDataB()
    this.loadDataB2()
  }

}
</script>
