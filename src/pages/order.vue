<!--
 * @Author: your name
 * @Date: 2022-01-20 09:22:53
 * @LastEditTime: 2022-02-23 15:22:55
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \MiMi\src\pages\order.vue
-->
<template>
    <div>
        <router-view></router-view>
        <service-bar></service-bar>
        <nav-footer></nav-footer>
    </div>
</template>
<script>
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
        ServiceBar,
        NavFooter
    }
}
</script>