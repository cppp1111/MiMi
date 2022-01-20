/*
 * @Author: your name
 * @Date: 2022-01-20 16:27:26
 * @LastEditTime: 2022-01-20 17:18:24
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \MiMi\src\env.js
 */
let baseURL;
switch (process.env.NODE_ENV) {
    case 'development':
        baseURL = 'http://dev-mall-pre.springboot.cn/api'
        break;
    case 'test':
        baseURL = 'http://test-mall-pre.springboot.cn/api'
        break;
    case 'prev':
        baseURL = 'http://prev-mall-pre.springboot.cn/api'
        break;
    case 'prod':
        baseURL = 'http://mall-pre.springboot.cn/api'
        break;

    default:
        baseURL = 'http://mall-pre.springboot.cn/api'
        break;
}

export default {
    baseURL
}