/*
 * @Descripttion: 
 * @version: 
 * @Author: 高月飞
 * @Date: 2023-11-29 09:18:28
 * @LastEditors: 高月飞
 * @LastEditTime: 2023-11-30 10:26:36
 */
import { reactive, ref } from "vue"

export const verificationCode = () => {
    let verification = ref('')
    let code = ref("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789")
    let codeNumber = ref(6)

    for (let i = 0; i < codeNumber.value; i++) {
        var randomIndex = Math.floor(Math.random() * code.value.length);
        verification.value += code.value[randomIndex];
    }

    return verification.value
}


