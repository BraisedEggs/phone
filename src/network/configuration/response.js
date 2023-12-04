/*
 * @Descripttion: 
 * @version: 
 * @Author: 高月飞
 * @Date: 2023-11-27 19:47:47
 * @LastEditors: 高月飞
 * @LastEditTime: 2023-11-27 19:54:15
 */


export default (instances) => {
    //响应拦截器
    instances.interceptors.response.use(
        res => {
            return res.data
        },
        err => {
            return Promise.reject(err)
        }
    )
}