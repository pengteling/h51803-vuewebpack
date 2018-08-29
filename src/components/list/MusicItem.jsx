import {mapMutations} from 'vuex'
export default {
  props: {
    musicItem: {
      type: Object,
      required: true
    },
    focus: {
      type: Boolean
    }
  },
  methods: {
    ...mapMutations('list', ['CHANGE_MUSIC_INDEX'])
    // changeMusicItem (item) {
    //   console.log(item)
    // }
  },
  render () {
    return (
      <li class={`components-listitem row ${this.focus ? 'focus' : ''}`} onClick={ () => this.CHANGE_MUSIC_INDEX(this.musicItem)}>
        <p>{this.musicItem.title}</p>
        <p class="lrclink -col1"><router-link to={{name: 'Lrc'}}>歌词</router-link></p>
        <p class="-col-auto delete"></p>
      </li>
    )
  }
}
