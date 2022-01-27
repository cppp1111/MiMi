<!--
 * @Author: your name
 * @Date: 2022-01-19 16:51:31
 * @LastEditTime: 2022-01-27 16:37:22
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \MiMi\src\App.vue
-->
<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
// import storage from './storage/index'
export default {
  name: 'app',
  components: {
    
  },
  data(){
    return{
      
    }
  },
  mounted(){
    this.getUser();
    this.getCartCount();
  },
  methods:{
    getUser(){
      this.axios.get('/user').then(()=>{
        //  to-do 保存到vuex里面
      })
    },
    getCartCount(){
      this.axios.get('/carts/products/sum').then(()=>{
        //  to-do 保存到vuex里面
      })
    }
  }
}
</script>

<style lang="scss">
@import './assets/scss/reset.scss';
@import './assets/scss/config.scss';
@import './assets/scss/button.scss';
</style>
