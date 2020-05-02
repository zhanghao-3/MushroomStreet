<template>
  <div class="goodslistitem" @click='itemClick'>
    <img :src="goodsitem.show.img" alt="">
    <div class="goods-info">
      <p>{{goodsitem.title}}</p>
      <span class="price">￥{{goodsitem.price}}</span>
      <span class="cfav">{{goodsitem.cfav}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "components_name",
  props:{
    goodsitem:{
      type:Object,
      default(){
        return {}
      }
    }
  },
  data() {
    return {
    };
  },
  methods: {
    // imageload(){
    //   // this.$emit.
    // }
    itemClick(){
      console.log(this.goodsitem);
      
      this.$router.push('/detail/' + this.goodsitem.iid)
    }
  },
};
</script>

<style scoped>
  .goodslistitem{
    width: 48%;
    position: relative;
    padding-bottom: 40px;
    margin-bottom: 20px;
    border-radius: 12px;
    box-shadow: 1px 1px 10px #ddd;
  }
  .goodslistitem img{
    width: 100%;
    border-radius: 12px;
    
  }
  .goods-info{
    font-size: 12px;
    text-align: center;
    position: absolute;
    bottom: 5px;
    left: 0;
    width: 100%;
  }
  .goods-info p{
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom: 5px;
  }
  .goods-info .price{
    color: #f00;
    margin-right: 20px;
  }
  .goods-info .cfav{
    position: relative;
  }
  .goods-info .cfav::before{
    position:absolute;
    content: '';
    width: 14px;
    height: 14px;
    left: -14px;
    top:0;
    background:url('../../../assets/img/common/collect.svg')0 0/14px 14px;
  }
</style>
