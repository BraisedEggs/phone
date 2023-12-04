/*
 * @Descripttion: 
 * @version: 
 * @Author: 高月飞
 * @Date: 2023-11-27 20:01:22
 * @LastEditors: 高月飞
 * @LastEditTime: 2023-12-04 14:27:41
 */
/* 
自动引入routes的路由
遍历放入
*/
const Route = import.meta.glob('./routes/*.js', { eager: true })
export const children = []

for (let key in Route) {
  let route = Route[key].default
  if (Array.isArray(route)) {
    children.push(...route)
  } else {
    children.push(route)
  }
}


const routes = [
  {
    path: '/',
    name: 'admin',
    component: () => import('@/views/Admin/index.vue'),

  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/Login/index.vue'),
    meta: {
      menu: "",
      icon: ""
    },
  },
  {
    path: '/front',
    name: 'front',
    redirect: "/home",
    component: () => import('@/views/Front/index.vue'),
    meta: {
      menu: "",
      icon: "",
    },
    children

  },
  {
    path: '/:pathMatch(.*)*',
    name: '404',
    component: () => import('@/views/404/index.vue'),
    meta: {
      menu: "",
      icon: ""
    }
  },


]


export default routes
