import { get, post, put, del } from '@/network/https'


// 地区
export const useK2AreaApi = () => {
    return get("https://mock.apifox.com/m1/3669425-0-default/api/k2/area")
}