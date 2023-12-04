/* 
主页路由
*/

const routes = [
    {
        path: '/study',
        name: 'study',
        component: () => import('@/views/Study/index.vue'),
        meta: {
            menu: '首页',
            // TODO: icon有问题
            icon: "icon-hetongguanli",
        }
    }
]

export default routes;
