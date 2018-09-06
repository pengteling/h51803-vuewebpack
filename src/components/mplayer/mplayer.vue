<template>
  <audio
    :src="currentItem.file"
    ref="audio"
    @loadedmetadata="loadedmetadata"
    @timeupdate="timeupdate"
  >
  </audio>
</template>
<script>
import {mapState, mapGetters, mapMutations} from 'vuex'
export default {
  computed: {
    audio () {
      return this.$refs.audio
    },
    ...mapState('player', ['paused', 'volume', 'changeTime']),
    ...mapGetters('list', ['currentItem'])
  },
  methods: {
    ...mapMutations('player', ['GET_DURATION', 'GET_CURRENTTIME']),
    loadedmetadata () {
      console.log('loadedmetadata')
      this.GET_DURATION(this.audio.duration)
    },
    timeupdate () {
      this.GET_CURRENTTIME(this.audio.currentTime)
    }
  },
  watch: {
    changeTime (val, oldVal) {
      this.audio.currentTime = val
      // if (Math.abs(val - oldVal) >= 1) {
      //   this.audio.currentTime = val
      // }
    },
    paused (val) {
      // this.audio
      if (val) {
        // if(this.audio.paused)
        this.audio.pause()
      } else {
        this.audio.play()
      }
    },
    volume (val) {
      this.audio.volume = val / 100
    }
  },
  mounted () {
    this.audio.oncanplay = () => {
      console.log('canplay')
      if (!this.paused) {
        this.audio.play()
      }
    }
    this.audio.volume = this.volume / 100
    // console.log();
  }
}
</script>
