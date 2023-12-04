/*
 * @Descripttion: 
 * @version: 
 * @Author: 高月飞
 * @Date: 2023-11-27 19:42:06
 * @LastEditors: 高月飞
 * @LastEditTime: 2023-11-27 22:01:48
 */
import { createRouter, createWebHistory } from 'vue-router'
import routes from './router'

const router = createRouter({
  history: createWebHistory('/'),
  routes
})

export default router
