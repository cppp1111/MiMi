<!--
 * @Author: your name
 * @Date: 2022-01-20 09:22:53
 * @LastEditTime: 2022-01-20 11:29:33
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \MiMi\src\pages\order.vue
-->
<template>
    <div>
        <order-header></order-header>
        <router-view></router-view>
        <nav-footer></nav-footer>
    </div>
</template>
<script>
import OrderHeader from './../components/OrderHeader.vue'
import NavFooter from './../components/NavFooter.vue'
export default {
    name:'order',
    components:{
        OrderHeader,
        NavFooter
    }
}
</script>