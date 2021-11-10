/*
 *@描述:路由文件
 *@方法名: js
 *@参数: 参数1
 *@作者: TangTao
 *@时间: 2021-10-27 10:09:33
 *@版本: V1.0.0
*/
import { createRouter, createWebHistory } from 'vue-router'
const Router = createRouter({
  history: createWebHistory(import.meta.env.VITE_BASE_URL),
  routes: [
    {
      path: '',
      name: '',
      // redirect: '/login',
      component: () => import('@/views/home.vue'),
      meta: {
        title: "主页"
      }
    }
  ]
})
export default Router