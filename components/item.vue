<script src="../libs/util.js"></script>
<template>
    <div>
        <div >
            <img :src="imgPath+data.images" alt="">
        </div>
    </div>
</template>

<script>
    import $ from '../libs/util';
    export default {
        name: "item",
        props:{
            data:{
                type:Object
            }
       },
        data:function () {
            return{
                imgPath: $.imgPath
            }

        }
    }
</script>

<style scoped>

</style>
