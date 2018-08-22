import className from './App5.scss'
// const Child = {
//   functional:true,
//   name:'Child',
//   props:['name'],
//   render(h,{props}){
//     return (
//       <div class={className.child}>
//         <h2> Child component - {props.name}</h2>
//       </div>
//     )
//   }
// }

// 函数式组件！
const Child = ({ props, listeners }) => (
  <div class={className.child}>
    <h2> Child component - {props.name} </h2>
  </div>
)
export default {
  // components:{
  //   Child
  // },
  render () {
    return (
      <Child name="zs"></Child>
    )
  }
}
