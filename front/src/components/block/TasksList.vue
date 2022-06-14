<template>
    <div class="row justify-content-center">
        <div class="d-flex h3 justify-content-start" style="width: 50rem;">
            {{projectName}}
        </div>
        <div class="d-flex justify-content-start" style="width: 50rem;">
            {{projectDescription}}
        </div>
        <div class="card m-1" style="width: 50rem;" v-for="item in tasks" :key="item.id">
            <div class="card-body">
                <h5 class="card-title">{{item.name}}</h5>
                <p class="card-text">{{item.description}}</p>
            </div>
            <div class="card-body">
                <a @click="goToEdit(item.id)" class="btn m-1 btn-secondary">Редактировать</a>
                <a href="#" class="btn btn-danger">Удалить</a>
            </div>
        </div>
        <div class="d-flex justify-content-end" style="width: 50rem;">
            <a class="btn btn-primary" @click="goToCreate">Создать</a>
        </div>
    </div>
</template>
<script>
const text = 'decription decription decription decription decription decription decription decription decription decription decription decription';
export default {
    name: 'TasksList',
    data() {
        return {
            projectName:'project name',
            projectId:this.$route.params.id,
            projectDescription:'decription decription decription decription decription decription decription decription decription decription decription decription',
            tasks:[ { name:'tasks 1',description:text, id:1 }, { name:'tasks 2',description:text, id:2 }, { name:'tasks 3',description:text, id:3 } ]
        }
    },
    methods: {
        goToCreate() {
            this.$router.push('/project/'+this.projectId+'/create')
        },
        goToEdit(idtask){
            this.$router.push('/project/'+this.projectId+'/'+idtask+"/edit")
        }
    }
}
</script>
<style scoped>

</style>