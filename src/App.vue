<!--
 * @Author: your name
 * @Date: 2022-01-19 16:51:31
 * @LastEditTime: 2022-01-20 18:24:39
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
  name: 'App',
  components: {
    
  },
  data(){
    return{
      res:{}
    }
  },
  mounted(){
    // 本地加载请求静态json文件的形式
    // this.axios.get('/mock/user/login.json').then((res)=>{
    //   this.res=res;
    // });

    // 通过easy-mock平台实现数据mock
    // this.axios.get('/user/login').then((res)=>{
    //   this.res=res;
    // });

    // 本地集成mockjs实现数据mock
    this.axios.get('/user/login').then((res)=>{
      this.res=res;
    });

  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
