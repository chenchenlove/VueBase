<!--
 * @Author: tfs\chenchen chenchen@cabrtech.com
 * @Date: 2022-05-18 10:34:12
 * @LastEditors: chenchenlove 726759161@qq.com
 * @LastEditTime: 2022-05-23 14:54:09
 * @FilePath: \vuebase\src\views\map\components\map.vue
 * @Description: http://datav.aliyun.com/portal/school/atlas/area_selector  json资源参考网站
 * 
 * Copyright (c) 2022 by tfs\chenchen chenchen@cabrtech.com, All Rights Reserved. 
-->
<template>
  <div id="map" style="height: 100%"></div>
</template>
<script>
import China from "../map_json/china.json";
import circleMark from "../../../assets/map/circle.png";
export default {
  props: {},
  data() {
    return {
      mapOptions: {
        tooltip: {
          trigger: "item",
          formatter: function (params) {
            return "名称：" + params.name;
          },
        },
        toolbox: {
          show: true,
          orient: "vertical",
          left: "right",
          top: "center",
        },
        geo: {
          show: false,
          map: "china",
          zoom:1.2,//geo中zoom要和series中的一样大小，否则，散点的位置会发生便宜，毕竟散点是根据geo来的，地图的统一渐变色是series中来的
          viewControl: {
            distance: 120,
            alpha: 65,
          },
          zlevel: -11,
          regions: [],
        },
        series: [
          {
            type: "map",
            map: "china",
            zoom: 1.2, //这里是关键，一定要放在 series中
            label: {
              show: true,
              textStyle: {
                color: "#fff",
                fontSize: 12,
                backgroundColor: "transparent",
              },
            },
            viewControl: {
              distance: 120,
              alpha: 65,
            },
            itemStyle: {
              normal: {
                borderColor: "#79FFFA",
                borderWidth: 0.8,
                areaColor: {
                  type: "linear-gradient",
                  x: 0,
                  y: 1000,
                  x2: 1500,
                  y2: 0,
                  colorStops: [
                    {
                      offset: 0.5,
                      color: "#0D59C1", // 0% 处的颜色
                    },
                    {
                      offset: 1,
                      color: "#53C9C7", // 100% 处的颜色
                    },
                  ],
                  global: true, // 缺省为 false
                },
              },
              emphasis: {
                borderWidth: 3,
                itemStyle: {
                  // color: '#ffffff',
                  // textStyle: {
                  //   color: '#fff',
                  //   fontSize: 12,
                  //   backgroundColor: 'transparent'
                  // },
                  // opacity: 0.75
                },
                textStyle: {
                  color: "#fff",
                  fontSize: 12,
                  backgroundColor: "transparent",
                },
                areaColor: {
                  type: "linear-gradient",
                  x: 0,
                  y: 1000,
                  x2: 0,
                  y2: 0,
                  colorStops: [
                    {
                      offset: 0.5,
                      color: "#0D59C1", // 0% 处的颜色
                    },
                    {
                      offset: 1,
                      color: "#53C9C7", // 100% 处的颜色
                    },
                  ],
                  global: true, // 缺省为 false
                },
              },
            },
            data: [
              // {
              //   name: "湖北省",
              //   itemStyle: {
              //     normal: {
              //       color: "#EEF0F2",
              //       label: {
              //         show: true,
              //         textStyle: {
              //           color: "#fff",
              //           fontSize: 15,
              //         },
              //       },
              //     },
              //     emphasis: {
              //       // 也是选中样式
              //       borderWidth: 5,
              //       borderColor: "#EEF0F2",
              //       areaColor: "#EEF0F2",
              //       label: {
              //         show: true,
              //         textStyle: {
              //           color: "blue",
              //         },
              //       },
              //     },
              //   },
              // },
            ],
          },
          {
            name: "洋湖片区连塘学校项目",
            type: "scatter",
            coordinateSystem: "geo",
            data: [
              { name: "洋湖片区连塘学校项目", value: [112.9172, 28.11432] },
            ],
            symbol:
              "path://m463.27193,186.73462l27.50175,0l8.49825,-26.12654l8.49826,26.12654l27.50174,0l-22.24934,16.14691l8.49869,26.12654l-22.24935,-16.14735l-22.24934,16.14735l8.49869,-26.12654l-22.24935,-16.14691z",
            symbolSize: 20, // 锚点大小
            tooltip: {
              show: true,
            },
            itemStyle: {
              color: "red",
            },
            zlevel: 3,
          },
          {
            name: "",
            type: "scatter",
            coordinateSystem: "geo",
            data: [{ name: "保利中环广场", value: [114.033508, 28.213015] }],
            symbol:
              "path://m463.27193,186.73462l27.50175,0l8.49825,-26.12654l8.49826,26.12654l27.50174,0l-22.24934,16.14691l8.49869,26.12654l-22.24935,-16.14735l-22.24934,16.14735l8.49869,-26.12654l-22.24935,-16.14691z",
            symbolSize: 20, // 锚点大小
            tooltip: {
              show: true,
            },
            itemStyle: {
              color: "red",
            },
            zlevel: 3,
            // label: {
            //   show: true,
            //   position: "right",
            //   textStyle: {
            //     color: "#fff",
            //     fontSize: 12,
            //     backgroundColor: "transparent",
            //   },
            //   formatter: function (params) {
            //     //标签内容
            //     return params.name;
            //   },
            // },
          },
        ],
      },
      chart: null,
    };
  },
  mounted() {
    this.initEcharts();
  },
  methods: {
    initEcharts() {
      this.chart = this.$echarts.init(document.getElementById("map"));
      this.$echarts.registerMap("china", China);
      this.chart.setOption(this.mapOptions, true);
      this.chart.on("mouseover", (params) => {
        //鼠标在地图上移动
        console.log("params mouseover", params);
      });
      this.chart.on("mouseout", (params) => {
        //鼠标移动到地图外
        console.log("params mouseout", params);
      });
      this.chart.on("click", (params) => {
        //点击地图
        console.log("--click:", params);
        if (params.data) {//如果data不会空说明是点击散点

        } else {
           import(`../map_json/china/${params.name}.json`).then((res) => {
            console.log("xxxxxxxxx", res.default);
            this.$echarts.registerMap("province", res.default); 
            this.mapOptions.series[0].map = "province";//设置地图的map属性  province china
            this.mapOptions.geo.map = "province";//一定要设置对应的属性  province china  不然散点不会随着地图位置发生变化
            this.chart.setOption(this.mapOptions,true);
           });
        }
      });
    },
  },
  beforeDestroy() {
    //视图结束后销毁
    if (!this.chart) {
      return;
    }
    this.chart.dispose();
    this.chart = null;
  },
};
</script>
<style lang="scss" scoped>
</style>