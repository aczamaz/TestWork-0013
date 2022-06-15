<template>
    <div class="page">
      <Header nameSection='Create rojects'/>
      <ProjectsForm dispatchEvent='saveProject'/>
    </div>
</template>
<script>
import Header from '../block/Header.vue';
import ProjectsForm from '../block/ProjectsForm.vue';
export default {
  name: 'ProjectCreatePage',
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
