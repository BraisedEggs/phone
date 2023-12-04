/*
 * @Descripttion: 
 * @version: 
 * @Author: 高月飞
 * @Date: 2023-11-27 19:46:41
 * @LastEditors: 高月飞
 * @LastEditTime: 2023-11-29 09:09:36
 */
import axios from "axios"
import request from "./configuration/request"
import response from "./configuration/response"


//创建网络请求
const instances = axios.create(
  
)

request(instances)
response(instances)

/**
 * POST
 * @param url 请求url地址
 * @param data 请求体数据
 * @param config 请求的配置--额外请求
 * @returns  Promise
 */

export const post = (url, data, config = {}) => {
    return instances.post(url, data, config);
}


/**
 * GET
 * @param url 请求url地址
 * @param config 请求的配置--额外请求
 * @returns Promise
 */
export const get = (url, config = {}) => instances.get(url, config);

/**
 * Put请求
 * @param url 请求的url地址
 * @param data 请求体数据
 * @param config 请求配置 -- 额外请求
 * @returns Promise
 */
export const put = (url, data, config = {}) => instances.put(url, data, config)


/**
 * delete请求
 * @param {string} url 请求的url地址
 * @param {object} config 请求的额外头信息
 * @returns Promise
 */
export const del = (url, config = {}) => instances.delete(url, config)