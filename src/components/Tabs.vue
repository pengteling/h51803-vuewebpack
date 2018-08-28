<template>
  <div class="helper">
    <span class="left">{{leftItemsCount}} items left</span>
    <span class="tabs">
      <span
        v-for="state in states"
        :class="{actived: filter === state}"
        @click="toggleFilter(state)"
        :key="state"
      >{{state}}</span>
    </span>
    <span
      class="clear"
      v-if="isHaveCompleted"
      @click="clearCompleted"
    >Clear Completed</span>

  </div>
</template>
<script>
import {mapState, mapGetters, mapMutations} from 'vuex'
export default {
  computed: {
    ...mapState(['filter']),
    ...mapGetters(['leftItemsCount', 'isHaveCompleted'])
  },
  data () {
    return {
      states: ['All', 'Active', 'Completed']
    }
  },
  methods: {
    ...mapMutations(['toggleFilter', 'clearCompleted'])
  }
}
</script>

<style lang="scss">
.helper {
  height: 40px;
  line-height: 40px;
}

.left {
  float: left;
  margin-right: 100px;
}
.clear {
  cursor: pointer;
  float: right;
}
.tabs span {
  padding: 5px 14px;
  &.actived {
    border: #c00 1px solid;
  }
  border-radius: 3px;
  cursor: pointer;
}
</style>
