<!--
 * @Author: tfs\chenchen chenchen@cabrtech.com
 * @Date: 2022-05-13 16:19:24
 * @LastEditors: tfs\chenchen chenchen@cabrtech.com
 * @LastEditTime: 2022-05-16 10:46:57
 * @FilePath: \vuebase\src\views\home\components\center.vue
 * @Description: 
 * 
 * Copyright (c) 2022 by tfs\chenchen chenchen@cabrtech.com, All Rights Reserved. 
-->
<template>
  <div class="home_center_content">
    <div class="card_content">
      <a-card hoverable class="card_style">
        <img slot="cover" alt="example" src="../../../assets/home/map_t.png" />
        <a-card-meta title="echarts map" description="三级地图案例">
          <!-- <a-avatar
            slot="avatar"
            src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
          /> -->
        </a-card-meta>
      </a-card>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.home_center_content {
  display: flex;
  align-items: center;
  justify-content: center;
  .card_content {
    .card_style {
      width: 200px;
      display: block;
      //旋转
      //   transition: all 0.2s ease-in-out;-webkit-transition: all 0.2s ease-in-out;-moz-transition: all 0.2s ease-in-out;-o-transition: all 0.2s ease-in-out;
      background-color: transparent;
      ::v-deep .ant-card-meta-title {
        color: white !important;
      }
      ::v-deep .ant-card-meta-description {
        color: white !important;
      }
    }
    //旋转
    // .card_style:hover {transform: rotate(360deg);-webkit-transform: rotate(360deg);-moz-transform: rotate(360deg);-o-transform: rotate(360deg);-ms-transform: rotate(360deg);}
    .card_style:hover {
      -webkit-transform: scale(1.15);
      -moz-transform: scale(1.15);
      -o-transform: scale(1.15);
      transform: scale(1.15);
      -webkit-transition: all 1s ease;
      -moz-transition: all 1s ease;
      -o-transition: all 1s ease;
      transition: all 1s ease;
    }
  }
}
</style>