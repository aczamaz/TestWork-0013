<template>
<div class="row justify-content-center">
    <form style="width: 50rem;">
    <div class="form-group">
        <label for="projectName">Имя задачи</label>
        <input type="email" class="form-control" id="projectName" aria-describedby="projectnameAria" placeholder="Имя задачи">
    </div>
    <div class="form-group m-1">
        <label for="exampleFormControlTextarea1">Описание</label>
        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
    </div>
    <div class="form-group m-1">
        <label for="exampleFormControlTextarea1">Статус</label>
        <select class="form-select form-select-sm" aria-label=".form-select-sm example">
            <option selected>Выберите Статус</option>
            <option value="1">не начали</option>
            <option value="2">начали</option>
            <option value="3">закончили</option>
        </select>
    </div>
    <div class="d-flex justify-content-end">
        <button type="submit" class="btn btn-primary">Сохранить</button>
    </div>
    </form>
</div>
</template>
<script>
export default {
    name: 'TasksForm',
    data() {
        return {
        }
    }
}
</script>
<style scoped>

</style>