<!--
 * @Author: your name
 * @Date: 2022-01-20 09:24:30
 * @LastEditTime: 2022-01-20 11:28:05
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \MiMi\src\pages\cart.vue
-->
<template>
    <div>
        <order-header></order-header>
        cart
        <nav-footer></nav-footer>
    </div>
</template>
<script>
import OrderHeader from './../components/OrderHeader.vue'
import NavFooter from './../components/NavFooter.vue'
export default {
    name:'cart',
    components:{
        OrderHeader,
        NavFooter
    }
}
</script>