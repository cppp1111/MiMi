<!--
 * @Author: your name
 * @Date: 2022-02-22 13:02:35
 * @LastEditTime: 2022-02-22 13:29:32
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \MiMi\src\components\Loading.vue
-->
<template>
    <div class="loading">
        <img src="/imgs/loading-svg/loading-bars.svg" alt="">
    </div>
</template>
<script>
export default {
    name:'loading'
}
</script>
<style lang="scss">
    .loading{
        height: 80px;
        line-height: 80px;
        text-align: center;
        padding: 30px 0;
        img{
            height: 100%;
        }
    }
</style>