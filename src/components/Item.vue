<template>
  <div class="todo-item" :class="{'completed': todo.isCompleted}">
    <input
      type="checkbox"
      class="toggle"
      :checked="todo.isCompleted"
      @change="updateTodo(todo)"
    >
    <!-- v-model="todo.isCompleted" -->
    <label>{{todo.content}}</label>
    <button @click="deleteTodo(todo)" class="destory">X</button>
  </div>
</template>
<script>
import {mapMutations} from 'vuex'
export default {
  name: 'ItemComponent',
  // template: '#item',
  props: {
    todo: {
      type: Object,
      required: true
    }
  },
  methods: {
    ...mapMutations(['deleteTodo', 'updateTodo'])
  }
}
</script>

<style lang="scss">
.todo-item {
  cursor: pointer;
  font-size: 24px;
  line-height: 36px;
  padding: 12px 0;
  border-bottom: 1px solid #ededed;
  position: relative;
  .destory {
    position: absolute;
    right: 60px;
    top: 15px;
    font-size: 9pt;
  }
  &.completed {
    color: #d9d9d9;
    text-decoration: line-through;
  }
}
</style>
