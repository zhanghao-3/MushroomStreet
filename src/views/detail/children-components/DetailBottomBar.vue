<template>
 <div class="bottom-bar">
   <div class="bar-left bar-item">
     <div>
       <span class="icon service"></span>
       <span class="text">客服</span>
     </div>
     <div>
       <span class="icon shop"></span>
       <span class="text">店铺</span>
     </div>
     <div>
       <span class="icon select"></span>
       <span class="text">收藏</span>
     </div>
   </div>
   <div class="bar-right bar-item">
     <span class="cart" @click="addToCart">加入购物车</span>
     <span class="buy">购买</span>
   </div>
 </div>
</template>

<script>
export default {
  name: "components_name",
  data() {
    return {

    }
  },
  methods: {
    addToCart(){
      this.$emit('addCart')
      this.$bus.$emit('clickCart')
    }
  },
};
</script>

<style scoped>
.bottom-bar{
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: #fff;
  height: 60px;
  display: flex;
}
.bar-item{
  text-align: center;
  flex: 1;
  display: flex;
}
.bar-item>span{
  flex: 1;
  text-align: center;
}
.bar-item div{
  text-align: center;
  flex: 1;
}
.bar-left{
  padding-top: 12px;
}
.bar-left .text{
  font-size: 14px;
}
.bar-left .icon{
  display: block;
  height: 24px;
  width: 24px;
  margin: 0 auto;
  background:url('../../../assets/img/detail/detail_bottom.png') 0 0/100%;
  /* background-size: 24px 24px; */
}
.bar-left .service{
  background-position: 0px -58px;
}
.bar-left .shop{
  background-position: 0px -106px;
}
.bar-left .select{
  background-position: 0px -162px;
}
.bar-right .cart{
  background: #ffe818;
  color:#333
}
.bar-right .buy{
  background-color: #ff6799;
  color: #fff;
}
.bar-right{
  line-height: 60px;
  font-size: 14px;
}
</style>
