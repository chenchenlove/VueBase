<!--
 * @Author: tfs\chenchen chenchen@cabrtech.com
 * @Date: 2022-05-13 15:06:09
 * @LastEditors: tfs\chenchen chenchen@cabrtech.com
 * @LastEditTime: 2022-05-13 16:14:50
 * @FilePath: \vuebase\src\views\home\components\uploadAvatar.vue
 * @Description: 头像组件，包含，上传功能，
 * 
 * Copyright (c) 2022 by tfs\chenchen chenchen@cabrtech.com, All Rights Reserved. 
-->
<template>
  <div class="upload_avatar_content">
    <a-row>
        <a-avatar size="large" shape="square" :src=imageName />
    </a-row>
    <a-row>
      <div class="title_name">{{userName}}</div>
    </a-row>
  </div>
</template>
<script>
export default {
    props:{
        imageName:{
            type:String,
            default:require("../../../assets/home/wufan.jpg")
        },
        userName:{
            type:String,
            default:"cc"
        }
    },
  data() {
    return {
    };
  },
  methods: {
  },
};
</script>
<style lang="scss" scoped>
.upload_avatar_content {
    width: 100px;
    height: 100%;
    padding: 10px 0;
    .title_name{
        color: white;
        font-size: 18px;
        text-align: center;
    }
}
</style>