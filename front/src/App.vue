<template>
  <TaskCreatePage/>
</template>

<script>
import TaskCreatePage from './components/pages/TaskCreatePage.vue';
export default {
  name: 'App',
  components: {
    TaskCreatePage
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding: 0;
  margin: 0;
}
body{
  margin: 0;
  padding: 0;
}
</style>
