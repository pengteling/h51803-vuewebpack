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
    ...mapState('player', ['paused', 'volume']),
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
