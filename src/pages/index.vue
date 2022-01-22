<!--
 * @Author: your name
 * @Date: 2022-01-20 09:12:41
 * @LastEditTime: 2022-01-22 14:17:56
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \MiMi\src\pages\index.vue
-->
<template>
    <div class="index">
        <div class="container">
            <div class="swiper-box">
                <swiper :options="swiperOption">
                    <swiper-slide v-for="(item,index) in slideList" :key="index">
                        <a :href="'/#/product/'+item.id"><img :src="item.img" alt=""></a>
                    </swiper-slide>
                    <!-- Optional controls -->
                    <div class="swiper-pagination" slot="pagination"></div>
                    <div class="swiper-button-prev" slot="button-prev"></div>
                    <div class="swiper-button-next" slot="button-next"></div>
                </swiper>
            </div>
            <div class="ads-box"></div>
            <div class="banner"></div>
            <div class="product-box"></div>
        </div>
        <service-bar></service-bar>
    </div>
</template>
<script>
    import ServiceBar from './../components/ServiceBar.vue'
    import {swiper,swiperSlide} from 'vue-awesome-swiper'
    import 'swiper/dist/css/swiper.css'
import Swiper from 'vue-awesome-swiper/src/swiper.vue'
    export default {
        name:'index',
        components:{
            swiper,
            swiperSlide,
            ServiceBar,
                Swiper
        },
        data(){
            return{
                swiperOption:{
                    autoplay:true,
                    loop:true,
                    // 指定动画
                    effect:'cube',
                    cubeEffect:{
                        slideShadows:true,//默认
                        shadow:true,//默认
                        shadowOffset:100,
                        shadowScale:0.6
                    },
                    // 用于图片下面的小圆点
                    pagination:{
                        el:'.swiper-pagination',
                        clickable:true
                    },
                    // 用于左右箭头的使用
                    navigation:{
                        nextEl:'.swiper-button-next',
                        prevEl:'.swiper-button-prev'
                    }
                },
                slideList:[
                    {
                        id:'42',
                        img:'/imgs/slider/slide-1.jpg'
                    },{
                        id:'45',
                        img:'/imgs/slider/slide-2.jpg'
                    },{
                        id:'46',
                        img:'/imgs/slider/slide-3.jpg'
                    },{
                        id:'',
                        img:'/imgs/slider/slide-4.jpg'
                    },{
                        id:'',
                        img:'/imgs/slider/slide5.jpg'
                    }
                ]
            }
        }
    }
</script>
<style lang="scss">
    .index{
        .swiper-box{
            .swiper-container{
                height: 451px;
                img{
                    width: 100%;
                    height: 100%;
                }
            }
        }
    }
</style>