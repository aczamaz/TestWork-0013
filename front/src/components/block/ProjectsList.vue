<template>
    <div class="row justify-content-center">
        <div class="card m-1" style="width: 50rem;" v-for="item in projects" :key="item.id">
            <div class="card-body">
                <h5 class="card-title">{{item.name}}</h5>
            </div>
            <div class="card-body">
                <a @click="goToOpen(item.id)" class="btn btn-primary">Открыть</a>
                <a @click="goToEdit(item.id)" class="btn m-1 btn-secondary">Редактировать</a>
                <a @click="deleteProject(item.id)" class="btn btn-danger">Удалить</a>
            </div>
        </div>
        <div class="d-flex justify-content-end" style="width: 50rem;">
            <a class="btn btn-primary" @click="goToCreate">Создать</a>
        </div>
    </div>
</template>
<script>
import { mapState } from 'vuex';
export default {
    name: 'ProjectsList',
    data() {
        return {
            projectId:this.$route.params.id
        }
    },
    methods: {
        goToCreate() {
            this.$router.push('/project/create')
        },
        goToEdit(projectId){
            this.$store.commit('selectProject',projectId);
            this.$router.push('/project/'+projectId+'/edit')
        },
        goToOpen(projectId)
        {
            this.$store.commit('selectProject',projectId);
            this.$router.push('/project/'+projectId)
        },
        deleteProject(projectId)
        {
            this.$store.dispatch('deleteProject',projectId);
        }
    },
    mounted()
    {
        this.$store.dispatch('getProjects');
    },
    computed: {
        ...mapState(['projects']),
    }
}
</script>
<style scoped>

</style>