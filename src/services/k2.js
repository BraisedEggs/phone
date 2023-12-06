/*
 * @Descripttion: 
 * @version: 
 * @Author: 高月飞
 * @Date: 2023-12-04 16:23:10
 * @LastEditors: 高月飞
 * @LastEditTime: 2023-12-05 10:15:31
 */
import { get, post, put, del } from '@/network/https'


// 地区
export const useK2AreaApi = () => {
    return get("https://mock.apifox.com/m1/3669425-0-default/api/k2/area")
}
// 推荐
export const useStudyRecommendApi = (value) => {
    return get(`https://mock.apifox.com/m1/3669425-0-default/api/k2/source?desc=${value}`)
}