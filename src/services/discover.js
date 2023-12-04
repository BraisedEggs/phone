import { get, post, put, del } from '@/network/https'


// 推荐
export const useDiscoverRecommendApi = () => {
    return get("https://mock.apifox.com/m1/3669425-0-default/api/discover/focuson")
}
// 关注
export const useDiscoverFocusOnApi = () => {
    return get("https://mock.apifox.com/m1/3669425-0-default/api//discover/focuson")
}