<template>
  <div class="lrc-component">
    <ul id="lrcUl" ref="lrcUl">
      <li v-for="(item,index) in lrcList" :key="item[0]" :class="index === curli ? 'cur':'normal'">{{item[1]}}</li>
      <!-- <li id="0" data-time="0" class="cur"> 作曲 : 陈小霞 </li>
      <li id="1" data-time="1" class="normal"> 作词 : 姚若龙 </li> -->
    </ul>
  </div>
</template>
<script>
import parseLrc from '../../utils/parseLrc'
import {mapState, mapGetters} from 'vuex'
export default {
  data () {
    return {
      curli: 0
    }
  },
  computed: {
    ...mapState('player', ['currentTime']),
    ...mapGetters('list', ['currentItem']),
    lrcList () {
      return parseLrc(this.currentItem.lrc)
    }
  },
  methods: {
    scrollTo (curli) {
      let h = curli * 32 - 184
      // console.log(this.$refs.cur.offsetTop)
      // console.log(this.$refs.cur)
      this.$refs.lrcUl.scrollTop = h
    }
  },
  watch: {
    'currentTime' () {
      for (let i = 0; i < this.lrcList.length; i++) {
        if (this.currentTime >= this.lrcList[i][0] && i > this.curli) {
          this.curli = i
          this.scrollTo(i)
        }
      }
    },
    'currentItem' () {
      this.curli = 0
    }
  }
}
</script>
