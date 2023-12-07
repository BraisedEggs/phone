/*
 * @Descripttion: 
 * @version: 
 * @Author: 高月飞
 * @Date: 2023-12-07 15:12:44
 * @LastEditors: 高月飞
 * @LastEditTime: 2023-12-07 15:30:35
 */


import { useLoginStore } from '@/stores/mes.js'

export default (to) => {
    // 对每次进行判断是否需要重新登陆第一次没有但是后面时有的所以每次都要执行
    const pasStore = useLoginStore()

    // 如果路由需要登录验证
    if (!to.meta.nologin) {
        if (!pasStore.pasinfo.token) {
            return { path: 'login', replace: true }
        }
    }
}
