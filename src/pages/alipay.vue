<!--
 * @Author: your name
 * @Date: 2022-01-20 09:25:55
 * @LastEditTime: 2022-02-22 13:31:02
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \MiMi\src\pages\aliPay.vue
-->
<template>
    <div class="ali-pay">
        <loading v-if="loading"></loading>
        <div class="form" v-html="content"></div>
    </div>
</template>
<script>
import Loading from './../components/Loading.vue'
export default {
    name:'alipay',
    data(){
        return{
            orderId:this.$route.query.orderId,
            content:'',
            loading:true
        }
    },
    components:{
        Loading
    },
    mounted(){
        this.paySubmit();
    },
    methods:{
        paySubmit(){
            this.axios.post('/pay',{
                orderId:this.orderId,
                orderName:'Vue高仿小米商城',
                amount:0.01,//单位：元
                payType:1,//1支付宝，2微信
            }).then((res)=>{
                this.content = res.content;
                setTimeout(() => {
                    document.forms[0].submit();
                }, 100);
            })
        }
    }
}
</script>