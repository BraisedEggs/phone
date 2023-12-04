/* 
主页路由
*/

const routes = [
    {
        path: '/mine',
        name: 'mine',
        component: () => import('@/views/Mine/index.vue'),
        meta: {
            menu: '首页',
            // TODO: icon有问题
            icon: "icon-hetongguanli",
        }
    }
]

export default routes;
