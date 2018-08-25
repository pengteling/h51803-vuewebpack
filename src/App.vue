<template>
  <div></div>
</template>

<script>
// import axios from 'axios'
import jsonp from 'jsonp'
export default {
  data () {
    return {
      musicList: []
    }
  },
  created () {
    // fetch('http://music.henshui.com/api/musicList.js?!234')
    //   .then(res => res.text())
    //   .then(res => console.log(res))
    // axios
    //   .get('http://music.henshui.com/api/musicList.js?!234')
    //   .then(res => {
    //     this.musicList = (res.data)
    //   })
    //   .catch(function (error) {
    //     console.log(error)
    //   })
    jsonp(
      'https://c.y.qq.com/v8/fcg-bin/fcg_v8_toplist_cp.fcg?tpl=3&page=detail&date=2018-06-15&topid=4&type=top&song_begin=0&song_num=30&g_tk=5381&jsonpCallback=MusicJsonCallbacktoplist&loginUin=0&hostUin=0&format=jsonp&inCharset=utf8&outCharset=utf-8&notice=0&platform=yqq&needNewCode=0',
      {
        name: 'MusicJsonCallbacktoplist'
      },
      (err, data) => {
        console.log(err)
        console.log(data)
      }
    )
  },
  mounted () {}
}
</script>
