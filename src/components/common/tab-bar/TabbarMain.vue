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
      <tabbaritem path='/cart' activeColor='purple' @thisRouter='thisRouter'>
        <img slot="item-icon" src="../../../assets/img/tabbar/car.png" alt="">
        <img slot="item-icon-active" src="../../../assets/img/tabbar/car-active.png" alt="">
        <div slot="item-text" class="car">购物车 <span v-show="isShow">{{cartLength}}</span></div>
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
import { mapGetters } from 'vuex'

export default {
  name: "component_name",
  components:{
    Tabbar,
    Tabbaritem
  },
  computed: {
    ...mapGetters(['cartLength']),
  },
  created () {
    // 点击加入购物车  小图标显示
    this.$bus.$on('clickCart',() => {
      this.isShow = true
    })
  },
  methods: {
    // 当前页面是 购物车页面  小图标隐藏
    thisRouter(){
      this.isShow = false
    }
  },
  data () {
    return {
      isShow:false
    };  
  }
}
</script>
<style scoped>
.car{
  position: relative;
}
.car span{
  position: absolute;
  top: -39px;
  right: 15px;
  display: inline-block;
  width: 25px;
  height: 25px;
  line-height: 25px;
  font-size: 18px;
  color:#fff;
  border-radius: 50%;
  background-color: hotpink;
}
</style>