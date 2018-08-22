export default {
  data () {
    return {
      list: [0, 1, 2, 3]
    }
  },
  render () {
    // return h('div',"test")
    return (
      <div>
        {
          this.list.map(v =>
            <div class="item" key={`${v}`}>{ v }</div>
          )
        }
      </div>
    )
  }
}
