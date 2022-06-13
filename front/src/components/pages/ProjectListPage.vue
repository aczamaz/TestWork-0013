<template>
    <div class="page">
      <Header nameSection='Projects'/>
      <ProjectsList/>
    </div>
</template>
<script>
import Header from '../block/Header.vue';
import ProjectsList from '../block/ProjectsList.vue';
export default {
  name: 'ProjectListPage',
  props: {
  },
  components: {
    Header,
    ProjectsList
  }
}
</script>
<style scoped>
</style>
