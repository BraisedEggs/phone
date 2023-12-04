/*
 * @Descripttion: 
 * @version: 
 * @Author: 高月飞
 * @Date: 2023-11-28 22:34:42
 * @LastEditors: 高月飞
 * @LastEditTime: 2023-11-29 11:52:18
 */
// vue.config.js

module.exports = {
    devServer: {
        proxy: {
            '/api': {
                target: 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx603361fa544924a2&redirect_uri=https://www.snq369.cn/snqh5&response_type=code&scope=snsapi_userinfo&state=%22+state+%22#wechat_redirect%22',
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    }
};
