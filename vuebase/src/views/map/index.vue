<!--
 * @Author: tfs\chenchen chenchen@cabrtech.com
 * @Date: 2022-05-18 09:39:34
 * @LastEditors: tfs\chenchen chenchen@cabrtech.com
 * @LastEditTime: 2022-05-19 16:43:47
 * @FilePath: \vuebase\src\views\map\index.vue
 * @Description: 
 * 
 * Copyright (c) 2022 by tfs\chenchen chenchen@cabrtech.com, All Rights Reserved. 
-->
<template>
    <div class="map_content">
        <Map></Map>
    </div>
</template>
<script>
import Map from "./components/map.vue"
export default {
    components:{
        Map
    }
}
</script>
<style lang="scss" scoped>
.map_content{
    width: 100%;
    height: 100%;
    background-image: url("../../assets/home/star1920.gif");
    background-size: 100% 100%;
}
</style>