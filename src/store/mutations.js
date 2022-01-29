/*
 * @Author: your name
 * @Date: 2022-01-29 12:55:47
 * @LastEditTime: 2022-01-29 16:10:45
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \MiMi\src\store\mutations.js
 */
// 商城Vuex-mutations
export default {
    saveUserName(state, username) {
        state.username = username;
    },
    saveCartCount(state, count) {
        state.cartCount = count;
    }
}