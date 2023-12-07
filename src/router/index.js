/*
 * @Descripttion: 
 * @version: 
 * @Author: 高月飞
 * @Date: 2023-11-27 19:42:06
 * @LastEditors: 高月飞
 * @LastEditTime: 2023-12-07 15:17:40
 */
import { createRouter, createWebHistory } from 'vue-router'
import routes from './router'
const hooks = import.meta.glob('./hooks/*.js', { eager: true });

const router = createRouter({
  history: createWebHistory('/'),
  routes
})
/* 遍历前置 */
for (let key in hooks) {
  router.beforeEach((hooks[key]).default)
}
export default router
