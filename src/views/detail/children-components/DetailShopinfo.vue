<template>
 <div class="shop-info">
   <!-- 店铺名 -->
   <div class="shop-top">
     <img :src="shop.shopLogo" alt="">
     <span class="shop-title">{{shop.name}}</span>
   </div>
   <!-- 店铺详情 -->
   <div class="shop-middle">
     <div class="info-middle-left">
      <div class="info-sells">
       <div class="sells-count">
         {{shop.cSells | sellFilter}}
       </div>
       <div class="sells-text">总销量</div>
      </div>
      <div class="info-all">
       <div class="all-count">
         {{shop.cGoods}}
       </div>
       <div class="all-text">全部宝贝</div>
      </div>
      </div>
    <div class="shop-middle-right">
      <table>
        <tr v-for="(item, index) in shop.score" :key="index">
          <td>{{item.name}}</td>
          <td>{{item.score}}</td>
          <td :class="item.isBetter ? 'a' : 'b'">{{item.isBetter ? '高' : '低'}}</td>
        </tr>
      </table>
    </div>

     

   </div>
   <div class="shop-bottom">
     <div class="enter-shop">进店逛逛</div>
   </div>
 </div>
</template>

<script>
export default {
  name: "components_name",
  props:{
    shop:{
      type:Object,
      default(){
        return {}
      }
    }
  },
  filters:{
    sellFilter(value){
      if(value < 10000){
        return value
      }else{
        return (value / 10000).toFixed(1) + '万'
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
.shop-info{
  padding: 10px 10px 30px 10px ;
  border-bottom: 5px solid #ddd;
  margin-bottom: 30px;
}
.shop-top img{
  width: 40px;
  border-radius: 50%;
  border: 1px solid #ccc;
  margin-right: 30px;
  vertical-align: middle;
}
.shop-title{
  font-size: 18px;
}
.shop-middle{
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
}
.info-middle-left{
  text-align: center;
  display: flex;
  flex: 1;
  border-right: 1px solid #ccc;
  padding-right: 20px;
  padding-top: 8px;
  font-size: 14px;
}
.info-sells,.info-all{
  text-align: center;
  flex: 1;
}
.shop-middle-right{
  text-align: center;
  flex: 1;
  margin-left: 30px;
  font-size: 14px;
}
.shop-middle-right tr td{
  padding-right: 10px;
  text-align: left;
}
.shop-middle-right tr td:last-child{
  color:#fff;
  padding: 2px;
  border-radius: 3px;
}
.sells-count,.all-count{
  font-size: 20px;
  font-weight: 600;
  line-height: 30px;
}
.enter-shop{
  margin: 0 auto;
  text-align: center;
  width: 130px;
  height: 35px;
  line-height: 35px;
  /* padding: 5px 10px; */
  background-color: #eee;
  border-radius: 15px;
  margin-top: 20px;
  text-decoration: underline;
}
.a{
  background-color: green;
}
.b{
  background-color: red;
}

</style>
