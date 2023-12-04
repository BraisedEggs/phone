/*
 * @Descripttion: 
 * @version: 
 * @Author: 高月飞
 * @Date: 2023-11-28 17:06:09
 * @LastEditors: 高月飞
 * @LastEditTime: 2023-11-28 22:38:21
 */
import Mock from 'mockjs'

export default [
    //用户登陆
    {
        url: 'api/login/password',
        method: 'post',
        response: () => {
            return {
                code: 200,
                desc: '成功登录',
                data: {
                    id: 1,
                    username: 'admin',
                    phone: "145678906456",
                    token: 'fewfjewklfjewkfjewklewlfjwef',
                    roleid: 0
                }
            }
        }
    },
]