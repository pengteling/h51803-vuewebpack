import vuex from 'vuex'
import Vue from 'vue'
Vue.use(vuex)

export default new vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  state: {
    todos: [],
    filter: 'All'
  },
  getters: {
    leftItemsCount (state) {
      return state.todos.reduce((t, v) => v.isCompleted ? t : t + 1, 0)
    },
    todosView (state) {
      if (state.filter === 'All') {
        return state.todos
      } else if (state.filter === 'Active') {
        return state.todos.filter(v => !v.isCompleted)
      } else {
        return state.todos.filter(v => v.isCompleted)
      }
    },
    isHaveCompleted (state) {
      return state.todos.some(v => v.isCompleted)
    }
  },
  mutations: {
    addTodo (state, todo) {
      state.todos.unshift(todo)
    },
    deleteTodo (state, todo) {
      state.todos = state.todos.filter(v => v !== todo)
    },
    toggleFilter (state, filter) {
      state.filter = filter
    },
    clearCompleted (state) {
      state.todos = state.todos.filter(v => v.isCompleted === false)
    },
    updateTodo (state, todo) {
      state.todos = state.todos.map(item => {
        if (todo === item) {
          return Object.assign({}, item, {isCompleted: !item.isCompleted})
          // return {...todo,  isCompleted:!todo.isCompleted }
        } else {
          return item
        }
      })
    },
    initTodos (state, todos) {
      state.todos = todos
    }
  }
})
