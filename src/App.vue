<template>
  <div id="app">
      <FlashMessage :position="'right bottom'"></FlashMessage>
      <Header></Header>
      <TodoList></TodoList>
  </div>
</template>

<script>
import Header from './components/layout/Header'
import TodoList from './components/pages/todo/TodoList'

export default {
  name: 'App',
  components: {
    Header,
    TodoList
  }
}
</script>

<style>
</style>
