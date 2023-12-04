import { get, post, put, del } from '@/network/https'


// 账号登录
export const useDiscoverRecommendApi = () => {
    console.log("pppp")
    return get("https://mock.apifox.com/m1/3669425-0-default/api/discover/focuson")
}

export const useDiscoverFocusOnApi = () => {
    console.log("pppp")
    return get("https://mock.apifox.com/m1/3669425-0-default/api//discover/focuson")
}