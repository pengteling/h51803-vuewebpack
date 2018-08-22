export default {
  data () {
    return {
      msg: 123,
      show: true
    }
  },
  methods: {
    handlerClick () {
      console.log('clicked')
    }
  },
  render () {
    // return h('div',"test")
    return (
      <div>
        <p>
          { this.msg }
          <button onClick={this.handlerClick}>click</button>
          {
            this.show
              ? <div>yes</div>
              : <div>no</div>
          }
        </p>
      </div>
    )
  }
}
