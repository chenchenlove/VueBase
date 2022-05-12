/*
 * @Author: tfs\chenchen chenchen@cabrtech.com
 * @Date: 2022-05-12 09:29:03
 * @LastEditors: tfs\chenchen chenchen@cabrtech.com
 * @LastEditTime: 2022-05-12 14:22:37
 * @FilePath: \vuebase\src\main.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'

import './styles/index.scss'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),router
}).$mount('#app')
