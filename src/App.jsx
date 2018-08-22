const data1 = {
  name: 'zs'
}
export default {
  data () {
    return {
      msg: 123
    }
  },
  render () {
    // return h('div',"test")
    return (
      <div>
        <p>
          { this.msg } - { data1.name }
        </p>
      </div>
    )
  }
}
