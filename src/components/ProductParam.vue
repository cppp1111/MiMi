<!--
 * @Author: your name
 * @Date: 2022-01-29 17:23:28
 * @LastEditTime: 2022-01-29 23:41:59
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \MiMi\src\components\ProductParam.vue
-->
<template>
    <div class="nav-bar">
        <div class="container">
            <div class="pro-title">
                小米8
            </div>
            <div class="pro-param">
                <a href="javascript:;">概述<span>|</span></a>
                <a href="javascript:;">参数<span>|</span></a>
                <a href="javascript:;">用户评价</a>
                <slot name="buy"></slot>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'nav-bar'
}
</script>
<style lang="scss">
    @import './../assets/scss/config.scss'; 
    @import './../assets/scss/mixin.scss';
    .nav-bar{
        height: 70px;
        line-height: 70px;
        border: 1px solid $colorH;
        .container{
            @include flex();
            .pro-title{
                font-size: $fontH;
                color: $colorB;
                font-weight: bold;
            }
            .pro-param{
                font-size: $fontJ;
                span{
                    margin: 0 10px;
                }
                a{
                    color: $colorC;
                }
            }
        }
    }
</style>