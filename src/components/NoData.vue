<!--
 * @Author: your name
 * @Date: 2022-02-24 14:58:08
 * @LastEditTime: 2022-02-24 15:06:11
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \MiMi\src\components\NoData.vue
-->
<template>
    <div class="no-data">
        <img src="/imgs/icon-no-data.png" alt="">
        <p>当前暂无提交的订单记录</p>
    </div>
</template>
<script>
export default {
    name:'no-data'
}
</script>
<style lang="scss">
    .no-data{
        text-align: center;
        font-size: 20px;
        color: #999999;
        margin: 50px 0;
        img{
            width: 240px;
            height: 180px;
            margin-bottom: 30px;
        }
    }
</style>
