<template>
   <div>
      <v-ttitle title="vue组件化开发"></v-ttitle>
       <v-button @click1="handleClick">点击按钮</v-button>
       <div>Hello,{{name}} </div>
   </div>

</template>

<script>
    import vTtitle from './title.vue';
    import vButton from './button.vue';
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
