<template>
 <div class="base-info" v-if="Object.keys(goods).length !== 0">
   <!-- 标题 -->
   <div class="info-title">{{goods.title}}</div>
  <!-- 价格 -->
  <div class="info-price">
    <span class="new-price">{{goods.newPrice}}</span>
    <span class="old-price">{{goods.oldPrice}}</span>
    <span class="discount" v-if="goods.discount.length !== 0">{{goods.discount}}</span>
  </div>
  <!-- 销量收藏 -->
  <div class="info-sales">
    <span>{{goods.columns[0]}}</span>
    <span>{{goods.columns[1]}}</span>
    <span>{{goods.services[goods.services.length - 1].name}}</span>
  </div>
  <!-- 退换货 -->
  <div class="info-services">
    <span v-for="index in goods.services.length - 1" :key="index">
      <!-- <span>{{item}}</span> -->
      <img :src="goods.services[index -1].icon" alt="">
      <span>{{goods.services[index - 1].name}}</span> 
    </span>
  </div>
 </div>
</template>

<script>
export default {
  name: "components_name",
  props:{
    goods:{
      type:Object,
      default(){
        return {}
      }
    }
  },
  data() {
    return {

    }
  },
  methods: {},
};
</script>

<style scoped>
.base-info{
  padding:0 10px;
  margin-top: 15px;
}
.info-title{
  color:#222;
}
.info-price{
  margin-top: 15px;
}
.info-price .new-price{
  font-size: 24px;
  color:hotpink;

}
.info-price .old-price{
  font-size: 14px;
  text-decoration: line-through;
  margin-left: 8px;
}
.info-price .discount{
  background-color: hotpink;
  border-radius: 12px;
  color: #fff;
  position: relative;
  top:-8px;
  left: 10px;
  padding: 4px 8px;
  font-size: 12px;
}
.info-sales{
  margin-top: 15px;
  display: flex;
  border-bottom: 1px solid rgba(100,100,100,.3);
  padding-bottom: 10px;
  justify-content: space-between;
  font-size: 14px;
  color:rgba(100,100,100,.6);
}
.info-services{
  display: flex;
  justify-content: space-between;
  font-size: 13px;
  color:#333;
  line-height: 50px;
}
.info-services span>span{
  vertical-align: middle;
}
.info-services img{
  vertical-align: middle;
  margin-right: 2px;
  width: 14px;
  height: 14px;
}
</style>
