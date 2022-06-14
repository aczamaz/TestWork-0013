<template>
    <div class="header">
        <div class="header-main">
            <router-link class="header-main" to="/">    
                Todo for Projects
            </router-link>
        </div>
        <div class="header-title">    
            {{nameSection}}
        </div>
    </div>
</template>
<script>
export default {
  name: 'Header',
  props: {
      nameSection:String
  }
}
</script>

<style scoped>
.header
{
    margin: 0 auto;
}
.header-main{
    background-color: yellowgreen;
    font-size:50px;
    font-weight: 600;
}
.header-title
{
    background-color: rgb(215, 231, 165);
    font-size:30px;
    font-weight: 600;
}
</style>