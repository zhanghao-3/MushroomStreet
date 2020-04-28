<template>
  <div class="tabbarmain">
    <tabbar>
      <tabbaritem path='/home' activeColor='deeppink'>
        <img slot="item-icon" src="../../../assets/img/tabbar/home.png" alt="">
        <img slot="item-icon-active" src="../../../assets/img/tabbar/home-active.png" alt="">
        <div slot="item-text">首页</div>
      </tabbaritem>
      <tabbaritem path='/category' activeColor='orange'>
        <img slot="item-icon" src="../../../assets/img/tabbar/classify.png" alt="">
        <img slot="item-icon-active" src="../../../assets/img/tabbar/classify-active.png" alt="">
        <div slot="item-text">分类</div>
      </tabbaritem>
      <tabbaritem path='/cart' activeColor='purple'>
        <img slot="item-icon" src="../../../assets/img/tabbar/car.png" alt="">
        <img slot="item-icon-active" src="../../../assets/img/tabbar/car-active.png" alt="">
        <div slot="item-text">购物车</div>
      </tabbaritem>
      <tabbaritem path='/profile' activeColor='skyblue'>
        <img slot="item-icon" src="../../../assets/img/tabbar/user.png" alt="">
        <img slot="item-icon-active" src="../../../assets/img/tabbar/user-active.png" alt="">
        <div slot="item-text">我的</div>
      </tabbaritem>
    </tabbar>  </div>
</template>
<script>
import Tabbar from './Tabbar'
import Tabbaritem from './Tabbar-item'

export default {
  name: "component_name",
  components:{
    Tabbar,
    Tabbaritem
  },
  data () {
    return {

    };
  }
}
</script>
<style scoped>
</style>