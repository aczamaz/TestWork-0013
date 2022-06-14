<template>
    <div class="page">
      <Header nameSection='Edit roject'/>
      <ProjectsForm/>
    </div>
</template>
<script>
import Header from '../block/Header.vue';
import ProjectsForm from '../block/ProjectsForm.vue';
export default {
  name: 'ProjectEditPage',
  props: {
  },
  components: {
    Header,
    ProjectsForm
  }
}
</script>
<style scoped>
</style>
