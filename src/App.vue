<template>
  <div>
    <header class="main-header">
      <h1>Todo</h1>
    </header>

    <section class="real-app">
      <input type="text" class="add-input" placeholder="接下来要做什么？" @keyup.enter="addTodo" ref="ipt">
      <!-- v-model="inpt" -->
      <item
        v-for="(todo,index) in todosView"
        :key="index"
        :todo="todo"
      />
      <tabs />
    </section>
    <footer id="footer">
      <span>written by Jacky</span>
    </footer>
  </div>
</template>

<script>
import {mapState, mapGetters, mapMutations} from 'vuex'
import Item from '@/Item'
import Tabs from '@/Tabs'

export default {
  components: {
    Item,
    Tabs
  },
  computed: {
    ...mapState(['filter', 'todos']),
    ...mapGetters(['leftItemsCount', 'todosView', 'isHaveCompleted'])
  },
  methods: {
    ...mapMutations({
      addTodoStore: 'addTodo',
      initTodos: 'initTodos',
      toggleFilter: 'toggleFilter'
    }),
    // addTodo(e){
    //   console.log(e.target.value)
    // },
    addTodo () {
      // console.log(this.$refs.ipt.value)
      this.addTodoStore({
        content: this.$refs.ipt.value,
        isCompleted: false
      })
      this.$refs.ipt.value = ''
    }
  },
  updated () {
    localStorage.setItem('filter', this.filter)
    localStorage.setItem('todos', JSON.stringify(this.todos))
  },
  created () {
    if (localStorage.getItem('todos')) {
      this.initTodos(JSON.parse(localStorage.getItem('todos')))
    }
    if (localStorage.getItem('filter')) {
      this.toggleFilter(localStorage.getItem('filter'))
    }
  }
}
</script>

<style lang="scss">
.main-header {
  text-align: center;
  h1 {
    font-size: 100px;
    color: rgba(175, 47, 46, 0.4);
    font-weight: 700;
    margin: 20px;
  }
}
#footer{
  margin-top: 40px;
  text-align: center;
  color: #bfbfbf;
  font-size: 10px;text-shadow: 0 1px 0 rgba(#999,0.6);
}
.real-app {
  width: 640px;
  margin: 0 auto;
  box-shadow: 0 0 5px rgba(#666, 0.1);
  input.add-input {
    width: 100%;
    font-size: 24px;
    line-height: 1.4em;
    border: 0;
    outline: none;
    padding: 6px;
    border: 1px solid #999;
    box-shadow: inset 0 -1px 5px 0 rgba(0, 0, 0, 0.1);
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    padding: 16px 16px 16px 60px;
    box-shadow: inset 0 -2px 1px rgba(0, 0, 0, 0.1);
  }
}
</style>
