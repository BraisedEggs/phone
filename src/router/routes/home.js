/*
 * @Descripttion: 
 * @version: 
 * @Author: 高月飞
 * @Date: 2023-11-27 20:08:10
 * @LastEditors: 高月飞
 * @LastEditTime: 2023-12-01 20:49:53
 */
/* 
主页路由
*/

const routes = [
    {
        path: '/home',
        name: 'home',
        component: () => import('@/views/Home/index.vue'),
        meta: {
            menu: '首页',
            // TODO: icon有问题
            icon: "icon-hetongguanli",
        },
        children: [
            {
                path: '/home/k2',

                component: () => import('@/views/k2/index.vue'),
            },

        ],

    }
]

export default routes;
