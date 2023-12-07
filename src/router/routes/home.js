/*
 * @Descripttion: 
 * @version: 
 * @Author: 高月飞
 * @Date: 2023-11-27 20:08:10
 * @LastEditors: 高月飞
 * @LastEditTime: 2023-12-05 13:42:59
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
            // 八大专栏
            {
                path: 'k2',
                name: 'k2',
                component: () => import('@/views/k2/index.vue'),
            },
            {
                path: 'NEEPC',
                name: 'NEEPC',
                component: () => import('@/views/k2/index.vue'),
                meta: {
                    menu: '考研',
                    // TODO: icon有问题
                    icon: "icon-hetongguanli",
                },
            },
            {
                path: 'livesource',
                name: 'livesource',
                component: () => import('@/views/k2/index.vue'),
                meta: {
                    menu: '直播课',
                    // TODO: icon有问题
                    icon: "icon-hetongguanli",
                },
            },
            {
                path: 'premiumcourses',
                name: 'premiumcourses',
                component: () => import('@/views/k2/index.vue'),
                meta: {
                    menu: '精品课程',
                    // TODO: icon有问题
                    icon: "icon-hetongguanli",
                },
            },
            {
                path: 'CET',
                name: 'CET4',
                component: () => import('@/views/k2/index.vue'),
                meta: {
                    menu: '四六级',
                    // TODO: icon有问题
                    icon: "icon-hetongguanli",
                },
            },
            {
                path: 'economicscourses',
                name: 'economicscourses',
                component: () => import('@/views/k2/index.vue'),
                meta: {
                    menu: '经济管理',
                    // TODO: icon有问题
                    icon: "icon-hetongguanli",
                },
            },
            {
                path: 'computer',
                name: 'computer',
                component: () => import('@/views/k2/index.vue'),
                meta: {
                    menu: '计算机',
                    // TODO: icon有问题
                    icon: "icon-hetongguanli",
                },
            },
            {
                path: 'teachercolumn',
                name: 'teachercolumn',
                component: () => import('@/views/k2/index.vue'),
                meta: {
                    menu: '名师专栏',
                    // TODO: icon有问题
                    icon: "icon-hetongguanli",
                },
            },

            // 视频页面
            {
                path: 'video',
                name: 'video',
                component: () => import('@/views/video/index.vue'),
                meta: {
                    menu: '视频页面',
                    // TODO: icon有问题
                    icon: "icon-hetongguanli",
                },
            },
            // 视频页面
            {
                path: 'chat',
                name: 'chat',
                component: () => import('@/views/Chat/index.vue'),
                meta: {
                    menu: '聊天页面',
                    // TODO: icon有问题
                    icon: "icon-hetongguanli",
                },
            },
            // 支付
            {
                path: 'pay',
                name: 'pay',
                component: () => import('@/views/Pay/index.vue'),
                meta: {
                    menu: '支付页面',
                    // TODO: icon有问题
                    icon: "icon-hetongguanli",
                },
            },
            // 支付成功
            {
                path: 'paysuccess',
                name: 'paysuccess',
                component: () => import('@/views/PaySuccess/index.vue'),
                meta: {
                    menu: '支付成功',
                    // TODO: icon有问题
                    icon: "icon-hetongguanli",
                },
            },
            // 支付失败
            {
                path: 'payerror',
                name: 'payerror',
                component: () => import('@/views/PayError/index.vue'),
                meta: {
                    menu: '支付失败',
                    // TODO: icon有问题
                    icon: "icon-hetongguanli",
                },
            },
        ],

    }
]

export default routes;
