<template>
   <div>
       <div>Hello,{{name}} </div>
   </div>

</template>

<script>
    export default {
        components:{
            vTtitle,
            vButton
        },
        data(){
            return {
                name: "vue.js"
            }
        },
        methods:{
            handleClick(e){
                console.log(e)
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
