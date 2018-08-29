<template>
  <div class="player-page">
    <h1 class="caption">
      <router-link :to="{name:'List'}">
        我的私人音乐坊 &gt;
      </router-link>
    </h1>
    <div class="mt20 row">
      <div class="controll-wrapper">
        <h2 class="music-title">
          <router-link :to="{name:'List'}">{{ currentItem.title }}</router-link>
        </h2>
        <h3 class="music-artist mt10">{{ currentItem.artist }}</h3>
        <div class="row mt20">
          <div class="left-time -col-auto">-{{ leftTime }}</div>
          <div class="volume-container"><i class="icon-volume rt" style="top: 5px; left: -5px;"></i>
            <div class="volume-wrapper">
              <Progress :value="volume" @changeProgress="changeVolume"></Progress>
              <!-- <div class="components-progress">
                <div class="progress" style="width: 80%; background: rgb(47, 152, 66);"></div>
              </div> -->
            </div>
          </div>
        </div>
        <div style="height: 10px; line-height: 10px;">
          <Progress :value="currentPercentAbsoulte" @changeProgress="changeProgress"></Progress>
        </div>
        <div class="mt35 row">
          <div><i class="icon prev" @click="PREV_NEXT('prev')"></i><i class="icon ml20 icon ml20 " :class="paused?'play':'pause'" @click="PLAY_PAUSE"></i><i class="icon next ml20" @click="PREV_NEXT('next')"></i></div>
          <div class="-col-auto"><i class="icon repeat-cycle"></i></div>
        </div>
      </div>
      <div class="-col-auto cover"><a href="#/lrc" class=""><img :src="currentItem.cover" :alt="currentItem.title" :class="paused? 'pause':'play'"></a></div>
    </div>
  </div>
</template>
<script>
import './Player.scss'
import {mapState, mapGetters, mapMutations} from 'vuex'
import Progress from '../progress/Progress'
export default {
  components: {
    Progress
  },
  computed: {
    ...mapState('player', ['volume', 'paused']),
    ...mapGetters('list', ['currentItem']),
    ...mapGetters('player', ['leftTime', 'currentPercentAbsoulte'])
  },
  methods: {
    ...mapMutations('player', ['CHANGE_VOLUME', 'CHANGE_PROGRESS', 'PLAY_PAUSE']),
    ...mapMutations('list', ['PREV_NEXT']),
    changeVolume (volume) {
      // console.log('changeVolume', volume)
      this.CHANGE_VOLUME(volume * 100)
    },
    changeProgress (progress) {
      this.CHANGE_PROGRESS(progress)
    }
  }
}
</script>
