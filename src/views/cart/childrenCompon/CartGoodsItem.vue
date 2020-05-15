<template>
 <div class="cart-goodsitem">
   <div class="item">
     <div class="check">
       <Check :isCheck='cartListItem.isChecked'/>
     </div>
     <div class="img">
       <img :src="cartListItem.img" alt="">
     </div>
     <div class="text">
       <p>{{cartListItem.title}}</p>
       <p>{{cartListItem.desc}}</p>
       <span class="price">￥{{cartListItem.price}}</span>
       <span class="count">x{{cartListItem.count}}</span>
     </div>
   </div>
 </div>
</template>

<script>
import Check from '../../../components/common/check/Check'
export default {
  name: "components_name",
  props:{
    cartListItem:Object
  },
  components: {
    Check
  },
  data() {
    return {

    }
  },
  methods: {
    
  },
};
</script>

<style scoped>
.item{
  padding: 10px;
  display: flex;
  width: 100%;
  border-bottom: 1px solid #ddd;
}
.check{
  margin: auto 0;
  margin-right: 5px;
}
.img{
  width: 20%;
}
.img img{
  width: 100%;
}
.text{
  padding-left: 10px;
  width: 70%;
  overflow: hidden;
}
.text p{
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  line-height: 30px;
}
p:first-child{
  font-size: 18px;
  font-weight: 600;
}
.price{
  display: inline-block;
  margin-top: 20px;
  font-size: 20px;
  color:orange
}
.count{
  float: right;
  margin-top: 20px;
  font-size: 18px;
}
</style>
