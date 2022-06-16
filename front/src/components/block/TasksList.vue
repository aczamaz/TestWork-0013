<template>
    <div class="row justify-content-center">
        <div class="d-flex h3 justify-content-start" style="width: 50rem;">
            {{project.name}}
        </div>
        <div class="d-flex justify-content-start" style="width: 50rem;">
            {{project.description}}
        </div>
        <div class="card m-1" style="width: 50rem;" v-for="item in tasks" :key="item.id">
            <div class="card-body">
                <h5 class="card-title">{{item.name}}</h5>
                <p class="card-text">{{item.description}}</p>
                <p class="card-text"><b>Статус</b>:{{item.status}}</p>
            </div>
            <div class="card-body">
                <a @click="goToEdit(item.id)" class="btn m-1 btn-secondary">Редактировать</a>
                <a @click="deleteTask(item.id)" href="#" class="btn btn-danger">Удалить</a>
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
    name: 'TasksList',
    data() {
        return {
            projectId:this.$route.params.id,
        }
    },
    methods: {
        goToCreate() {
            this.$router.push('/project/'+this.projectId+'/create')
        },
        goToEdit(idtask){
            this.$store.commit('selectTask',idtask);
            this.$router.push('/project/'+this.projectId+'/'+idtask+"/edit")
        },
        deleteTask(id)
        {
            this.$store.dispatch('deleteTask',id);
        }
    },
    mounted()
    {
        this.$store.dispatch('getProject',this.projectId);
    },
    computed: {
        ...mapState(['tasks','project']),
    }
}
</script>
<style scoped>

</style>