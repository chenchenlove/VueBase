   // 地图
   export function getMapChartData(type) {
    const that = this
      ; (function ($) {
        var MapChart = echarts.init(document.getElementById('map'))
        $.get('../../resources/js/jibei.json', function (jibei) {  //json需要展示的数据源
          echarts.registerMap('jb', jibei)
          var optionmap = {
            tooltip: {
              trigger: 'item',
              formatter: function (params) {
                return '名称：' + params.name
              }
            },
            toolbox: {
              show: true,
              orient: 'vertical',
              left: 'right',
              top: 'center'
            },
            geo: {
              show: false,
              map: 'jb',
              viewControl: {
                distance: 120,
                alpha: 65
              },
              zlevel: -11,
              regions: [
                {
                  name: '冀北', //与json对应的省份名称
                  itemStyle: {
                    color: '#ffffff',
                    normal: {
                      borderColor: '#79FFFA',
                      borderWidth: 0.8,
                      areaColor: '#ffffff'
                    },
                    emphasis: {
                      textStyle: {
                        color: '#fff',
                        fontSize: 12,
                        backgroundColor: 'transparent'
                      },
                      areaColor: '#ffffff'
                    }
                  },
                  label: {
                    color: '#ffffff', //字体颜色
                    show: true
                  }
                }
              ]
            },
            series: [
              {
                type: 'map',
                map: 'jb',
                zoom: 1.2,   //这里是关键，一定要放在 series中
                label: {
                  show: true,
                  textStyle: {
                    color: '#fff',
                    fontSize: 12,
                    backgroundColor: 'transparent'
                  }
                },
                viewControl: {
                  distance: 120,
                  alpha: 65
                },
                itemStyle: {
                  normal: {
                    borderColor: '#79FFFA',
                    borderWidth: 0.8,
                    areaColor: {
                      type: 'linear-gradient',
                      x: 0,
                      y: 1000,
                      x2: 0,
                      y2: 0,
                      colorStops: [
                        {
                          offset: 0.5,
                          color: '#0D59C1' // 0% 处的颜色
                        },
                        {
                          offset: 1,
                          color: '#53C9C7' // 100% 处的颜色
                        }
                      ],
                      global: true // 缺省为 false
                    }
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
                      color: '#fff',
                      fontSize: 12,
                      backgroundColor: 'transparent'
                    },
                    areaColor: {
                      type: 'linear-gradient',
                      x: 0,
                      y: 1000,
                      x2: 0,
                      y2: 0,
                      colorStops: [
                        {
                          offset: 0.5,
                          color: '#0D59C1' // 0% 处的颜色
                        },
                        {
                          offset: 1,
                          color: '#53C9C7' // 100% 处的颜色
                        }
                      ],
                      global: true // 缺省为 false
                    }
                  }

                },
                data: [
                  {
                    name: '冀北',
                    itemStyle: {
                      normal: {
                        color: '#EEF0F2',
                        label: {
                          show: true,
                          textStyle: {
                            color: '#fff',
                            fontSize: 15
                          }
                        }
                      },
                      emphasis: {
                        // 也是选中样式
                        borderWidth: 5,
                        borderColor: '#EEF0F2',
                        areaColor: '#EEF0F2',
                        label: {
                          show: true,
                          textStyle: {
                            color: 'blue'
                          }
                        }
                      }
                    }
                  }
                ]
              },
              {
                name: '冀北',
                type: 'scatter',
                coordinateSystem: 'geo',
                data: [{ name: '冀北', value: [116.46, 39.92] }],
                symbol:
                  'path://m463.27193,186.73462l27.50175,0l8.49825,-26.12654l8.49826,26.12654l27.50174,0l-22.24934,16.14691l8.49869,26.12654l-22.24935,-16.14735l-22.24934,16.14735l8.49869,-26.12654l-22.24935,-16.14691z',
                symbolSize: 15, // 锚点大小
                tooltip: {
                  show: false
                },
                itemStyle: {
                  color: 'red'
                },
                zlevel: 3
              },
              {
                name: '',
                type: 'scatter',
                coordinateSystem: 'geo',
                data: [
                  { name: '北戴河区', value: [119.29, 39.54] },
                ],
                symbol:
                  'path://m463.27193,186.73462l27.50175,0l8.49825,-26.12654l8.49826,26.12654l27.50174,0l-22.24934,16.14691l8.49869,26.12654l-22.24935,-16.14735l-22.24934,16.14735l8.49869,-26.12654l-22.24935,-16.14691z',
                symbolSize: 15, // 锚点大小
                tooltip: {
                  show: false
                },
                itemStyle: {
                  color: 'red'
                },
                zlevel: 3,
                label: {
                  show: true,
                  position: 'right',
                  textStyle: {
                    color: '#fff',
                    fontSize: 12,
                    backgroundColor: 'transparent'
                  },
                  formatter: function (params) {
                    //标签内容
                    return params.name
                  }
                }
              }
            ]
          }
        })
      })(jQuery)
  }