/*
 * @Descripttion: 
 * @version: 
 * @Author: 高月飞
 * @Date: 2023-11-27 19:42:06
 * @LastEditors: 高月飞
 * @LastEditTime: 2023-11-29 13:58:50
 */
import { defineStore } from 'pinia'
import { useLoginPhoneApi } from '@/services/login'

const useLoginPhoneStore = defineStore('phone', {
    //持久化操作
    //对于登录信息进行一次持久化操作
    persist: {
        storage: window.sessionStorage,
        paths: ['phoneinfo']
    },

    state: () => ({
        phoneinfo: {
            id: 1,
            username: '',
            phone: "",
            token: '',
            roleid: 0
        }
    }),

    actions: {
        SETPPHONEINFO(data) {
            this.phoneinfo = data
        },
        async USEPPHONEACTION(loginData) {
            let ret = await useLoginPhoneApi(loginData)
            if (ret.code === 200) {
                this.SETPPHONEINFO(ret.data)
            }
            return ret.code
        }

    },


})
export { useLoginPhoneStore }