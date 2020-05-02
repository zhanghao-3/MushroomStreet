<template>
  <div id="app">
    <keep-alive exclude="Detail">
      <router-view></router-view>
    </keep-alive>
    
    <tabbar-main></tabbar-main>
  </div>
</template>

<script>
import TabbarMain from './components/common/tab-bar/TabbarMain'
export default {
  name: 'App',
  components:{
    TabbarMain
  }
}
</script>

<style>
  @import './assets/css/base.css';
  
</style>
