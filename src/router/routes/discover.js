/* 
主页路由
*/

const routes = [
    {
        path: '/discover',
        name: 'discover',
        redirect: "/discover/recommend",
        component: () => import('@/views/Discover/index.vue'),
        meta: {
            menu: '首页',
            // TODO: icon有问题
            icon: "icon-hetongguanli",
        },
        children: [
            {
                path: 'recommend',
                name: 'recommend',
                component: () => import('@/views/Discover/Recommed/index.vue'),
                meta: {
                    menu: '推荐',
                    // TODO: icon有问题
                    icon: "icon-hetongguanli",
                },

            },
            {
                path: 'focuson',
                name: 'focuson',
                component: () => import('@/views/Discover/Focuson/index.vue'),
                meta: {
                    menu: '关注',
                    // TODO: icon有问题
                    icon: "icon-hetongguanli",
                },

            },

        ]
    }
]

export default routes;
