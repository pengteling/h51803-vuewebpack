import { CHANGE_MUSIC_INDEX, PREV_NEXT, CHANGE_REPEAT_TYPE } from './mutations-types'
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
      // let newIndex = Math.floor((Math.random() * num))
      // currentIndex = newIndex
      // 保证随机后不是同一首
      let rd = (currentIndex) => {
        let newIndex = Math.floor(num * Math.random())
        if (newIndex === currentIndex) {
          return rd(currentIndex)
        } else {
          return newIndex
        }
      }
      currentIndex = rd(currentIndex)
    }
    state.currentIndex = currentIndex
  },
  [CHANGE_REPEAT_TYPE] (state) {
    let newRepeatType
    switch (state.repeatType) {
      case 'cycle':
        newRepeatType = 'once'
        break
      case 'once':
        newRepeatType = 'random'
        break
      default:
        newRepeatType = 'cycle'
    }
    state.repeatType = newRepeatType
  }
}
