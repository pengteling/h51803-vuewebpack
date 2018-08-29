<template>
  <div class="player-page">
    <h1 class="caption"><a href="#/list" class="">我的私人音乐坊 &gt;</a></h1>
    <div class="mt20 row">
      <div class="controll-wrapper">
        <h2 class="music-title"><a href="#/lrc" class="">天使中的魔鬼</a></h2>
        <h3 class="music-artist mt10">田馥甄</h3>
        <div class="row mt20">
          <div class="left-time -col-auto">-3:58</div>
          <div class="volume-container"><i class="icon-volume rt" style="top: 5px; left: -5px;"></i>
            <div class="volume-wrapper">
              <div class="components-progress">
                <div class="progress" style="width: 80%; background: rgb(47, 152, 66);"></div>
              </div>
            </div>
          </div>
        </div>
        <div style="height: 10px; line-height: 10px;">
          <div class="components-progress">
            <div class="progress" style="background: rgb(47, 152, 66); width: 0%;"></div>
          </div>
        </div>
        <div class="mt35 row">
          <div><i class="icon prev"></i><i class="icon ml20 icon ml20 pause"></i><i class="icon next ml20"></i></div>
          <div class="-col-auto"><i class="icon repeat-cycle"></i></div>
        </div>
      </div>
      <div class="-col-auto cover"><a href="#/lrc" class=""><img src="http://oj4t8z2d5.bkt.clouddn.com/%E9%AD%94%E9%AC%BC%E4%B8%AD%E7%9A%84%E5%A4%A9%E4%BD%BF.jpg" alt="天使中的魔鬼" class="play"></a></div>
    </div>
  </div>
</template>
<script>
import './Player.scss'
export default {

}
</script>
