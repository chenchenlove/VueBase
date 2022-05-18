/*
 * @Author: tfs\chenchen chenchen@cabrtech.com
 * @Date: 2022-05-12 10:35:43
 * @LastEditors: tfs\chenchen chenchen@cabrtech.com
 * @LastEditTime: 2022-05-18 09:47:12
 * @FilePath: \vuebase\src\router\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import Vue from "vue";
import Router from "vue-router"

import Layout from '../layout/index.vue'

Vue.use(Router);//注册Router组件

export const routers = [
    {
        path: '/login',
        component: Layout,
        redirect: '/login',
        children:[

        ]
    },
    {
        path: '/',
        component:  resolve => require(['../views/home/index.vue'], resolve),
        name:'home'
    },
    {
        path: '/map',
        component:  resolve => require(['../views/map/index.vue'], resolve),
        name:'map'
    }
]

const createRouter = () => new Router({
    mode: 'history',
    base: '/',
    routes: routers
})

const router = createRouter()

export default router