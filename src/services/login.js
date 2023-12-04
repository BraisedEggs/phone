/*
 * @Descripttion: 
 * @version: 
 * @Author: 高月飞
 * @Date: 2023-11-28 17:18:25
 * @LastEditors: 高月飞
 * @LastEditTime: 2023-11-29 13:08:57
 */
import { get, post, put, del } from '@/network/https'


// 账号登录
export const useLoginPasswordApi = (passowrdData) => {
    return post("https://mock.apifox.com/m1/3669425-0-default/api/login/password", passowrdData)
}
// 微信登陆
// export const useWeChatApi = () => {
//     return post("https://open.weixin.qq.com/connect/oauth2/authorize?appid=你的AppID&redirect_uri=重定向的网址&response_type=code&scope=snsapi_userinfo&state=state#wechat_redirect",)
// }

//手机号登录
export const useLoginPhoneApi = (phoneData) => {
    return post("https://mock.apifox.com/m1/3669425-0-default/api/login/message", phoneData)
}