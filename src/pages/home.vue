<!--
 * @Author: your name
 * @Date: 2022-01-20 09:16:04
 * @LastEditTime: 2022-01-21 11:19:23
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \MiMi\src\pages\home.vue
-->
<template>
    <div>
        <nav-header></nav-header>
        <router-view></router-view>
        <nav-footer></nav-footer>
    </div>
</template>
<script>
import NavHeader from './../components/NavHeader.vue'
import NavFooter from './../components/NavFooter.vue'
export default {
    name:'home',
    components:{
        NavHeader,
        NavFooter
    }
}
</script>