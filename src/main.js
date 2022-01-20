/*
 * @Author: your name
 * @Date: 2022-01-19 16:51:31
 * @LastEditTime: 2022-01-20 19:31:33
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \MiMi\src\main.js
 */
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import router from './router'
import App from './App.vue'
// import env from './env'
// mock开关
// 因为如果那个api文件如果加载进来就会被拦截，这里设置mock开关，就只有设置为true时才会被拦截
const mock = true;
if (mock) {
    require('./mock/api');
}
// 根据前端的跨域方式做调整     /a/b  :  (访问时)/api/a/b  =>  (转发时)/a/b
axios.defaults.baseURL = '/api';
axios.defaults.timeout = 8000;
// 根据环境变量获取不同的请求地址
// axios.defaults.baseURL = env.baseURL;

// 接口错误拦截
// 拦截代码
axios.interceptors.response.use(function(response) {
    // 这里的data 是axios的
    let res = response.data;
    // 状态码是0代表成功
    if (res.status == 0) {
        return res.data;
    } else if (res.status == 10) { //状态码10 是未登录
        window.location.href = '/#/login';
    } else {
        alert(res.msg);
    }
});

Vue.use(VueAxios, axios);
Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')