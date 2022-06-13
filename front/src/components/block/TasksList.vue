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
            </div>
            <div class="card-body">
                <a href="#" class="btn btn-primary">Открыть</a>
                <a href="#" class="btn m-1 btn-secondary">Редактировать</a>
                <a href="#" class="btn btn-danger">Удалить</a>
            </div>
        </div>
        <div class="d-flex justify-content-end" style="width: 50rem;">
            <a href="#" class="btn btn-primary">Создать</a>
        </div>
    </div>
</template>
<script>
export default {
    name: 'TasksList',
    data() {
        return {
            projectName:'project name',
            projectDescription:'decription decription decription decription decription decription decription decription decription decription decription decription',
            tasks:[ { name:'tasks 1', id:1 }, { name:'tasks 2', id:2 }, { name:'tasks 3', id:3 } ]
        }
  }
}
</script>
<style scoped>

</style>