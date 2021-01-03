<template>
   <div>
       <div class="daily">
           <div class="daily-menu">
               <div class="daily-menu-item" :class="{on:type==='recommend'}"@click="handleToRecommend">每日推荐</div>
               <!--class 动态设置class-->
               <div class="daily-menu-item" :class="{on:type==='daily'}" @click="showThemes = !showThemes">主题日报</div>
               <div v-if="showThemes">
                   <ul>
                       <li v-for="item in themes">
                           <a :class="{on:item.id ===themeId && type==='daily'}" @click="handleToTheme(item.id)">{{item.name}}</a>
                       </li>
                   </ul>
               </div>
           </div>
       </div>
       <!--中间栏-->
       <div class="daily-list">
            <template v-if="type ==='recommend'">
                <div v-for="list in recommendList">
                    <div> {{list.date}}</div>
                    <Item v-for="map in list.stories" :data="map"></Item>
                </div>


            </template>
           <template v-if="type==='daily'">
               <div v-for="">

               </div>
           </template>

       </div>
   </div>

</template>

<script>
    import $ from './libs/util.js';
    import Item from './components/item.vue';
    export default {
        components:{
            Item:Item
        },
        data(){
            return {
                type:'daily',
                showThemes:false,
                themes:[],
                themeId:13,
                list:[],
                recommendList:[],
                dailyTime:''
            }
        },
        created(){
            this.getThemes();
        },
        methods:{
            handleToRecommend () {
                this.type = 'recommend';
                this.recommendList = [];
                this.dailyTime = $.getTodayTime();
                console.log(this.dailyTime)
                this.getRecommendList();
            },
            handleToTheme (id) {
                this.type = 'daily';
                this.themeId = id;
                this.list = [];
                $.ajax.get('theme/' + id).then(res => {
                    this.list = res.others
                        .filter(item => item.type !== 1);
                })
            },
            getRecommendList () {
               // this.isLoading = true;
                const prevDay = $.prevDay(this.dailyTime + 86400000);
                console.log(prevDay);
                $.ajax.get('news/before').then(res => {
                    this.recommendList.push(res);
                  //  this.isLoading = false;
                })
            },
            getThemes:function () {
                $.ajax.get("themes").then(res =>{
                    this.themes =res.others;
                })
            },

        }

    }
</script>

<style scoped>

</style>
