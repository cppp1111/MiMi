<!--
 * @Author: your name
 * @Date: 2022-01-21 22:47:33
 * @LastEditTime: 2022-01-22 11:24:19
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \MiMi\src\components\ServiceBar.vue
-->
<template>
    <div class="service">
        <div class="container">
            <ul>
                <li><span class="icon-setting"></span>预约维修服务</li>
                <li><span class="icon-7day"></span>7天无理由退货</li>
                <li><span class="icon-15day"></span>15天免费换货</li>
                <li><span class="icon-post"></span>满150包邮</li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    name:'service-bar'
}
</script>
<style lang="scss">
    @import './../assets/scss/mixin.scss';
    .service{
        padding: 33px 0;
        color: #666666;
        font-size: 16px;
        li{
            display: inline-block;
            width: 24.9%;
            text-align: center;
            border-right: 1px solid #e5e5e5;
            span{
                display: inline-block;
                width: 20px;
                height: 20px;
                vertical-align: middle;
                margin-right: 8px;
            }
            .icon-setting{
                @include bgImg(20px,20px,'/imgs/icon-setting.png');
            }
            .icon-7day{
                @include bgImg(20px,20px,'/imgs/icon-7day.png');
            }
            .icon-15day{
                @include bgImg(20px,20px,'/imgs/icon-15day.png');
            }
            .icon-post{
                @include bgImg(20px,20px,'/imgs/icon-post.png');
            }
        }
    }
</style>