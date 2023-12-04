/*
 * @Descripttion: 
 * @version: 
 * @Author: 高月飞
 * @Date: 2023-11-27 19:47:07
 * @LastEditors: 高月飞
 * @LastEditTime: 2023-11-29 11:58:20
 */


/**
 * 请求拦截器
 */

//导入类型实例
export default (instances) => {
    //请求拦截器
    instances.interceptors.request.use(config => {
        //设置超时时长
        config.timeout = 10000
        //设置请求的路径
        config.baseURL = '/api'
        return config
    })
}
