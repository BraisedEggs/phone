/*
 * @Descripttion: 
 * @version: 
 * @Author: 高月飞
 * @Date: 2023-11-30 10:19:15
 * @LastEditors: 高月飞
 * @LastEditTime: 2023-12-01 15:10:45
 */
import { get, post, put, del } from '@/network/https'


// 轮播图的图片
export const useCarouselApi = () => {
    return get("https://mock.apifox.com/m1/3669425-0-default/api/home/carousel",)
}

// 课程推荐
export const useRecommedCourseApi = () => {
    return get("https://mock.apifox.com/m1/3669425-0-default/api/home/recommed",)
}

// 抢购商品列表
export const useLimiteTimeApi = (nowtime) => {
    return get("https://mock.apifox.com/m1/3669425-0-default/api/home/limitetime", nowtime)
}

// 抢购商品列表
export const useSourceLiveApi = () => {
    return get("https://mock.apifox.com/m1/3669425-0-default/api/home/live")
}

// 课程列表
export const useSourceListpi = () => {
    return get("https://mock.apifox.com/m1/3669425-0-default/api/home/source")
}