<template>
    <div class="page">
      <Header nameSection='Tasks'/>
      <TasksList/>
    </div>
</template>
<script>
import Header from '../block/Header.vue';
import TasksList from '../block/TasksList.vue';
export default {
  name: 'TasksListPage',
  props: {
  },
  components: {
    Header,
    TasksList
  }
}
</script>
<style scoped>
</style>
