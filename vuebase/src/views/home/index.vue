<!--
 * @Author: tfs\chenchen chenchen@cabrtech.com
 * @Date: 2022-05-12 11:29:30
 * @LastEditors: tfs\chenchen chenchen@cabrtech.com
 * @LastEditTime: 2022-05-18 10:06:42
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
    <a-row style="margin-top: 200px">
      <center :cardData="cardData" @clickCard="clickCard"></center>
    </a-row>
  </div>
</template>
<script>
import Header from "./components/header.vue";
import Center from "./components/center.vue";
export default {
  components: {
    Header,
    Center,
  },
  data() {
    return {
      cardData: [
        {
          src: require("../../assets/home/map_t.png"),
          title: "echart map",
          description: "三级地图案例",
        },
      ],
    };
  },
  methods: {
    clickCard(index) {
      let routeData = this.$router.resolve({
        path: "/map",
      });
      //必要操作，否则不会打开新页面
      window.open(routeData.href, "_blank");
    },
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
    background-size: 100% 100%;
  }
}
</style>