<template>
<div class="row justify-content-center">
    <form style="width: 50rem;">
    <div class="form-group">
        <label for="projectName">Имя проекта</label>
        <input type="email" class="form-control" id="projectName" aria-describedby="projectnameAria" placeholder="Имя проекта">
    </div>
    <div class="form-group m-1">
        <label for="exampleFormControlTextarea1">Описание</label>
        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
    </div>
    <div class="d-flex justify-content-end">
        <button type="submit" class="btn btn-primary">Сохранить</button>
    </div>
    </form>
</div>
</template>
<script>
export default {
    name: 'ProjectsForm',
    data() {
        return {
        }
    }
}
</script>
<style scoped>

</style>