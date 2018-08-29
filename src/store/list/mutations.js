import { CHANGE_MUSIC_INDEX, PREV_NEXT } from './mutations-types'
export default {
  [CHANGE_MUSIC_INDEX] (state, musicItem) {
    state.currentIndex = state.musicList.indexOf(musicItem)
  },
  [PREV_NEXT] (state, type) {
    let currentIndex = state.currentIndex
    let num = state.musicList.length
    if (state.repeatType === 'cycle' || state.repeatType === 'once') {
      if (type === 'prev') {
        currentIndex = (currentIndex - 1 + num) % num
      } else {
        currentIndex = (currentIndex + 1) % num
      }
    } else {
      let newIndex = Math.floor((Math.random() * num))
      currentIndex = newIndex
    }
    state.currentIndex = currentIndex
  }
}
