export default {
  data () {
    return {
      msg: 123,
      checkedNames: []
    }
  },
  render () {
    // return h('div',"test")
    return (
      <div>
        <p>{this.checkedNames.valueOf()}</p>
        <p>
          <input type="checkbox" value="vue" v-model={this.checkedNames} />vue
          <input type="checkbox" value="react" v-model={this.checkedNames} />react
          <input type="checkbox" value="angular" v-model={this.checkedNames} />angular
        </p>
      </div>
    )
  }
}
