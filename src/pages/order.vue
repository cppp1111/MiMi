<!--
 * @Author: your name
 * @Date: 2022-01-20 09:22:53
 * @LastEditTime: 2022-02-05 11:54:04
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \MiMi\src\pages\order.vue
-->
<template>
    <div>
        <order-header v-bind:title="title">
            <template v-slot:tip>
                <span>{{tip}}</span>
            </template>
        </order-header>
        <router-view></router-view>
        <service-bar></service-bar>
        <nav-footer></nav-footer>
    </div>
</template>
<script>
import OrderHeader from './../components/OrderHeader.vue'
import ServiceBar from './../components/ServiceBar.vue'
import NavFooter from './../components/NavFooter.vue'
export default {
    name:'order',
    data(){
        return{
            title:'',
            tip:''
        }
    },
    components:{
        OrderHeader,
        ServiceBar,
        NavFooter
    },
    mounted(){
        let path = this.$route.path;
        if (path == '/order/confirm') {
            this.title = '订单确认';
            this.tip = '请认真填写收货地址';
        }else if(path == '/order/list'){
            this.title = '订单列表';
            this.tip = '请谨防钓鱼链接或诈骗电话，了解更多>';
        }else if(path == '/order/pay'){
            this.title = '订单支付 ';
            this.tip = '请谨防钓鱼链接或诈骗电话，了解更多>';
        }
    }
}
</script>