<template>
<div class="row justify-content-center">
    <form style="width: 50rem;">
    <div class="form-group">
        <label for="projectName">Имя проекта</label>
        <input type="email" class="form-control" v-model="name" id="projectName" aria-describedby="projectnameAria" placeholder="Имя проекта">
    </div>
    <div class="form-group m-1">
        <label for="exampleFormControlTextarea1">Описание</label>
        <textarea class="form-control" v-model="description" id="exampleFormControlTextarea1" rows="3"></textarea>
    </div>
    <div class="d-flex justify-content-end">
        <button type="submit" @click="goToSave" class="btn btn-primary">Сохранить</button>
    </div>
    </form>
</div>
</template>
<script>
export default {
    name: 'ProjectsForm',
    props: {
        dispatchEvent:String
    },
    data()
    {
        return{
        }
    },
    methods:{
        goToSave() {
                this.$store.dispatch(this.dispatchEvent)
                this.$router.push('/')
        }
    },
    computed: {
        name: {
            get () {
                return this.$store.state.projectForm.name
            },
            set (value) {
                this.$store.commit('setProjectName', value)
            }
        },
        description: {
            get () {
                return this.$store.state.projectForm.description
            },
            set (value) {
                this.$store.commit('setProjectDescription', value)
            }
        },
    }
}
</script>
<style scoped>

</style>