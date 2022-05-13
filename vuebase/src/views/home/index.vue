<!--
 * @Author: tfs\chenchen chenchen@cabrtech.com
 * @Date: 2022-05-12 11:29:30
 * @LastEditors: tfs\chenchen chenchen@cabrtech.com
 * @LastEditTime: 2022-05-13 17:29:07
 * @FilePath: \vuebase\src\views\home\index.vue
 * @Description: 
 * 
 * Copyright (c) 2022 by tfs\chenchen chenchen@cabrtech.com, All Rights Reserved. 
-->
<template>
  <div class="home_content">
    <vue-particles class="particles" color="#dedede"></vue-particles>
    <a-row>
      <Header></Header>
    </a-row>
  </div>
</template>
<script>
import Header from "./components/header.vue";
export default {
  components: {
    Header,
  },
};
</script>
<style lang="scss" scoped>
.home_content {
  position: relative;
  height: 100%;
  .particles {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    // width: 100%;
    // height: 100%;
    background-image: url("../../assets/home/beijing.jpg");
    background-size: auto;
  }
}
</style>