<template>
    <div class="page">
      <Header nameSection='Create Task'/>
      <TasksForm dispatchEvent='saveTask'/>
    </div>
</template>
<script>
import Header from '../block/Header.vue';
import TasksForm from '../block/TasksForm.vue';
export default {
  name: 'TaskCreatePage',
  props: {
  },
  components: {
    Header,
    TasksForm
  }
}
</script>
<style scoped>
</style>
