/*
 * @Descripttion: 
 * @version: 
 * @Author: 高月飞
 * @Date: 2023-11-30 10:26:27
 * @LastEditors: 高月飞
 * @LastEditTime: 2023-11-30 10:29:16
 */
const deepCopy = (obj) => {
    // 检查是否为对象
    if (typeof obj !== 'object' || obj === null) {
        return obj;
    }

    // 根据对象的类型创建新对象
    const newObj = Array.isArray(obj) ? [] : {};

    // 递归地复制对象的每个属性
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            newObj[key] = deepCopy(obj[key]);
        }
    }

    return newObj;
};

export default deepCopy;
