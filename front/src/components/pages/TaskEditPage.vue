<template>
    <div class="page">
      <Header nameSection='Edit Task'/>
      <TasksForm dispatchEvent='editTask'/>
    </div>
</template>
<script>
import Header from '../block/Header.vue';
import TasksForm from '../block/TasksForm.vue';
export default {
  name: 'TaskEditPage',
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
