<!--
 * @Author: your name
 * @Date: 2022-01-20 09:22:39
 * @LastEditTime: 2022-02-23 15:22:18
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \MiMi\src\pages\orderList.vue
-->
<template>
    <div>
        <order-header title="订单列表">
            <template v-slot:tip>
                <span>请谨防钓鱼链接或诈骗电话，了解更多></span>
            </template>
        </order-header>
    </div>
</template>
<script>
import OrderHeader from './../components/OrderHeader.vue'
export default {
    name:'order-list',
    components:{
        OrderHeader
    }
}
</script>