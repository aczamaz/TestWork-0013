<template>
    <div class="page">
      <Header nameSection='Edit roject'/>
      <ProjectsForm dispatchEvent='editProject'/>
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
