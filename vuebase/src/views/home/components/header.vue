<!--
 * @Author: tfs\chenchen chenchen@cabrtech.com
 * @Date: 2022-05-13 14:31:32
 * @LastEditors: tfs\chenchen chenchen@cabrtech.com
 * @LastEditTime: 2022-05-13 17:16:27
 * @FilePath: \vuebase\src\views\home\components\header.vue
 * @Description: 顶部导航栏
 * 
 * Copyright (c) 2022 by tfs\chenchen chenchen@cabrtech.com, All Rights Reserved. 
-->
<template>
    <div class="header_content">
        <a-row type="flex" justify="space-between" class="row_class">
            <upload-avatar></upload-avatar>
            <div class="buttons_content">
                <div class="button_style" v-for="(item,index) in buttons" :key="index" @click="clickButton(index)">{{item}}</div>
            </div>
        </a-row>
    </div>
</template>
<script>
import uploadAvatar from "./uploadAvatar.vue"
export default {
    components:{
        uploadAvatar
    },
    data(){
        return {
            buttons:["案例","文章","收藏","关于"]
        }
    },
    methods:{
        clickButton(index){
            this.$emit("clickButton",index);
        }
    }
}
</script>
<style lang="scss" scoped>
.header_content{
    background-image: url("../../../assets/home/star1920.gif");
    background-size: auto;
    width: 100%;
    height: 80px;
    .row_class{
        margin: auto 40px;
        height: 100%;
        .buttons_content{
        display: flex;
        align-items: center;
        justify-content: space-around;
        .button_style{
            color: white;
            font-size: 16px;
            cursor: pointer;
            text-align: center;
            margin: 0 15px; 
        }
        .button_style:hover {
            color: rgb(211, 211, 241);
        }
    }
    }
    
}
</style>