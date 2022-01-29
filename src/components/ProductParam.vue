<!--
 * @Author: your name
 * @Date: 2022-01-29 17:23:28
 * @LastEditTime: 2022-01-30 01:04:05
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \MiMi\src\components\ProductParam.vue
-->
<template>
    <div class="nav-bar" :class="{'is_fixed':isFixed}">
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
    name:'nav-bar',
    data(){
        return{
            isFixed:false
        }
    },
    mounted(){
        // 监听高度
        window.addEventListener('scroll',this.initHeight)
    },
    methods:{
        initHeight(){
            // 页面Y轴的偏移量
            let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
            this.isFixed = scrollTop >152?true:false;
        }
    },
    // 销毁监听滚动，以防在其他页面滚动的时候这个方法也被加载
    destroyed(){
        window.removeEventListener('scroll',this.initHeight);
    }
}
</script>
<style lang="scss">
    @import './../assets/scss/config.scss'; 
    @import './../assets/scss/mixin.scss';
    .nav-bar{
        height: 70px;
        line-height: 70px;
        border-top: 1px solid $colorH;
        background-color: $colorG;
        &.is_fixed{
            position: fixed;
            top: 0;
            width: 100%;
            box-shadow: 0 5px 5px $colorE;
        }
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