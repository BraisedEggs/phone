/*
 * @Descripttion: 
 * @version: 
 * @Author: 高月飞
 * @Date: 2023-11-27 19:42:06
 * @LastEditors: 高月飞
 * @LastEditTime: 2023-11-29 11:06:19
 */
import { defineStore } from 'pinia'
import { useLoginPasswordApi } from '@/services/login'

const useLoginStore = defineStore('pas', {
  //持久化操作
  //对于登录信息进行一次持久化操作
  persist: {
    storage: window.sessionStorage,
    paths: ['pasinfo']
  },

  state: () => ({
    pasinfo: {
      id: 1,
      username: '',
      phone: "",
      token: '',
      roleid: 0
    }
  }),

  actions: {
    SETPASSWORDINFO(data) {
      this.pasinfo = data
    },
    async USEPPASSWORDCTION(loginData) {
      let ret = await useLoginPasswordApi(loginData)
      if (ret.code === 200) {
        this.SETPASSWORDINFO(ret.data)
      }
      return ret.code
    }

  },


})
export { useLoginStore }