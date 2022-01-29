<!--
 * @Author: your name
 * @Date: 2022-01-20 09:20:47
 * @LastEditTime: 2022-01-30 00:58:00
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \MiMi\src\pages\product.vue
-->
<template>
    <div class="product">
        <product-param>
            <template v-slot:buy>
                <button class="btn">立即购买</button>
            </template>
        </product-param>
        <div class="h">2</div>
        <div class="h">2</div>
        <div class="h">2</div>
        <div class="h">2</div>
        <div class="h">2</div>
        <div class="h">2</div>
        <div class="h">2</div>
        <div class="h">2</div>
        <div class="h">2</div>
        <div class="h">2</div>
    </div>
</template>
<script>
import ProductParam from './../components/ProductParam'
export default {
    name:'product',
    components:{
        ProductParam
    }
}
</script>
<style lang="scss">
    .product{
        .h{
            background-color: green;
            height: 150px;
        }
        .btn{
            margin-left: 10px;
        }
    }
</style>