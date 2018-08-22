import className from './App5.scss'
const Child = {
  name:'Child',
  props:['name'],
  render(){
    return (
      <div class={className.child}>
        <h2> Child component - {this.name}</h2>
      </div>
    )
  }
}

export default {
  // components:{
  //   Child
  // },
  render(){
    return (
      <Child name="zs"></Child>
    )
  }
}
