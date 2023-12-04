/*
 * @Descripttion: 
 * @version: 
 * @Author: 高月飞
 * @Date: 2023-11-27 19:42:06
 * @LastEditors: 高月飞
 * @LastEditTime: 2023-12-01 15:48:27
 */

import { createApp } from 'vue'
import App from './App.vue'

// 路由
import router from './router/index'
//pinia
import { createPinia } from 'pinia'
//pinia持久化
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
// Vant
import Vant from 'vant';
import 'vant/lib/index.css';
// 全局组件
import registerGlobComp from "@/components/index"
import { Lazyload } from 'vant';

const app = createApp(App)
const pinia = createPinia();
//挂载pinia
app.use(pinia);
//挂载数据持久化
pinia.use(piniaPluginPersistedstate);
app.use(Vant);
app.use(registerGlobComp)
app.use(router)
app.use(Lazyload, {
    lazyComponent: true,
  });
app.mount('#app')
