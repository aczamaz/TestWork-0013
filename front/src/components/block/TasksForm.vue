<template>
<div class="row justify-content-center">
    <form style="width: 50rem;">
    <div class="form-group">
        <label for="projectName">Имя задачи</label>
        <input v-model="name" type="email" class="form-control" id="projectName" aria-describedby="projectnameAria" placeholder="Имя задачи">
    </div>
    <div class="form-group m-1">
        <label for="exampleFormControlTextarea1">Описание</label>
        <textarea v-model="description" class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
    </div>
    <div class="form-group m-1">
        <label for="exampleFormControlTextarea1">Статус</label>
        <select v-model="status" class="form-select form-select-sm" aria-label="form-select-sm example">
            <option selected value="Coздали">Coздали</option>
            <option value="не начали">не начали</option>
            <option value="начали">начали</option>
            <option value="закончили">закончили</option>
        </select>
    </div>
    <div class="d-flex justify-content-end">
        <button type="submit" @click="goToSave" class="btn btn-primary">Сохранить</button>
    </div>
    </form>
</div>
</template>
<script>
export default {
    name: 'TasksForm',
    props: {
        dispatchEvent:String
    },
    data()
    {
        return{
            projectId:this.$route.params.id,
            idTask:this.$route.params.idTask,
        }
    },
    methods:{
        goToSave() {
            this.$store.dispatch(this.dispatchEvent,this.idTask)
            this.$router.push('/project/'+this.projectId)
        }
    },
    computed: {
        name: {
            get () {
                return this.$store.state.taskForm.name
            },
            set (value) {
                this.$store.commit('setTaskName', value)
            }
        },
        description: {
            get () {
                return this.$store.state.taskForm.description
            },
            set (value) {
                this.$store.commit('setTaskDescription', value)
            }
        },
        status: {
            get () {
                return this.$store.state.taskForm.status
            },
            set (value) {
                this.$store.commit('setTaskStatus', value)
            }
        },
    }
}
</script>
<style scoped>

</style>