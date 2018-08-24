// import className from './App5.scss'
// const Child = {
//   functional: true,
//   name: 'Child',
//   props: ['name'],
//   render (h, {props, slots, listeners}) {
//     return (
//       <div class={className.child}>
//         <h2> Child component - {props.name}</h2>
//       </div>
//     )
//   }
// }

// 函数式组件！
// const Child = ({ props, listeners }) => (
//   <div class={className.child}>
//     <h2> Child component - {props.name} </h2>
//   </div>
// )

// const Child = (context) => {
//   console.log(context)
//   return (
//     <div class={className.child}>
//       <h2> Child component - {context.props.name} </h2>
//     </div>
//   )
// }

const Child = ({props, slots}) => {
  // console.log(context)
  return slots().default[0]
  // return <div>test</div>
}

export default {
  // components:{
  //   Child
  // },
  render () {
    return (
      <Child name="zs">Child-zs</Child>
    )
  }
}
