<template>
   <div>
       <div class="daily">
           <div class="daily-menu">
               <div class="daily-menu-item">每日推荐</div>
               <!--class 动态设置class-->
               <div class="daily-menu-item" :class="{on:type==='daily'}" @click="showThemes = !showThemes">主题日报</div>
               <div v-if="showThemes">1111</div>
           </div>

       </div>
   </div>

</template>

<script>
    import $ from './libs/util.js';
    export default {

        data(){
            return {
                type:'daily',
                showThemes:false
            }
        },
        created(){
            this.getThemes();
        },
        methods:{

            getThemes:function () {
                $.ajax.get("themes").then(res =>{
                    console.log(res);
                })
            }
        }

    }
</script>

<style scoped>

</style>
