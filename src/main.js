/*
 * @Author: your name
 * @Date: 2022-01-19 16:51:31
 * @LastEditTime: 2022-01-20 11:07:41
 * @LastEditors: your name
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \MiMi\src\main.js
 */
import Vue from 'vue'
import router from './router'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')