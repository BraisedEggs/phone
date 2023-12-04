/* 
主页路由
*/

const routes = [
    {
        path: '/live',
        name: 'live',
        component: () => import('@/views/Live/index.vue'),
        meta: {
            menu: '首页',
            // TODO: icon有问题
            icon: "icon-hetongguanli",
        }
    }
]

export default routes;
