<template>
    <div>Hello,{{name}} </div>
</template>

<script>
    export default {
        data(){
            return {
                name: "vue.js"
            }
        }

    }
</script>

<style scoped>
    div{
        font-size: 12px;
        color: red;
    }
</style>
