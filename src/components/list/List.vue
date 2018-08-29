<template>
<ul>
  <MusicItem v-for="(item,index) in musicList" :key="item.id" :musicItem="item" :focus="index===currentIndex"></MusicItem>
  <!-- <li class="components-listitem row focus">
    <p>天使中的魔鬼 - 田馥甄</p>
    <p class="lrclink -col1"><a href="#/lrc" class="">歌词</a></p>
    <p class="-col-auto delete"></p>
  </li>
  <li class="components-listitem row ">
    <p>风继续吹 - 张国荣</p>
    <p class="lrclink -col1"><a href="#/lrc" class="">歌词</a></p>
    <p class="-col-auto delete"></p>
  </li>
  <li class="components-listitem row ">
    <p>恋恋风尘 - 老狼</p>
    <p class="lrclink -col1"><a href="#/lrc" class="">歌词</a></p>
    <p class="-col-auto delete"></p>
  </li>
  <li class="components-listitem row ">
    <p>我要你 - 任素汐</p>
    <p class="lrclink -col1"><a href="#/lrc" class="">歌词</a></p>
    <p class="-col-auto delete"></p>
  </li>
  <li class="components-listitem row ">
    <p>成都 - 赵雷</p>
    <p class="lrclink -col1"><a href="#/lrc" class="">歌词</a></p>
    <p class="-col-auto delete"></p>
  </li>
  <li class="components-listitem row ">
    <p>sound of silence - Simon &amp; Garfunkel</p>
    <p class="lrclink -col1"><a href="#/lrc" class="">歌词</a></p>
    <p class="-col-auto delete"></p>
  </li> -->
</ul>

</template>
<script>
import MusicItem from './MusicItem'
import {mapState} from 'vuex'
export default {
  components: {
    MusicItem
  },
  computed: {
    ...mapState('list', ['musicList', 'currentIndex'])
  }
}
</script>

<style lang="scss">
@import './List.scss'
</style>
