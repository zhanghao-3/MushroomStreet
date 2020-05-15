<template>
 <div class="cart-bottombar">
   <div class="check">
     <Check :isCheck='allChecked' class="check-ed" @click.native="allSelect"/>
   </div>
   <div class="text">全选</div>
   <div class="total">合计：￥{{total}}</div>
   <div class="count" @click="countClick">去结算({{count}})</div>
 </div>
</template>

<script>
import Check from '../../../components/common/check/Check'
import { mapGetters } from 'vuex'
export default {
  name: "components_name",
  components: {
    Check,
  },
  computed: {
    ...mapGetters(['cartList']),
    // 计算合计
    total(){
      return this.cartList.filter(item => item.isChecked).reduce((preValue,item) => {
        return preValue + item.price * item.count
      },0).toFixed(2)
    },
    // 计算结算数量
    count(){
      return this.cartList.filter(item => item.isChecked).reduce((preValue,item) => {
        return preValue + item.count
      },0)
    },
    //全选按钮状态显示
    allChecked(){
      if(this.cartList.length == 0){
        return false
      }else{
        return this.cartList.every(item => item.isChecked)
      }     
    }
  },
  data() {
    return {
      
    }
  },
  methods: {
    //点击全选按钮
    allSelect(){
      if(this.allChecked){
       this.$store.commit('addFalse')
      }else{
        this.$store.commit('addTrue')
      }
    },
    countClick(){
      this.$emit('countClick')
    }
  },
};
</script>

<style scoped>
.cart-bottombar{
  position: fixed;
  bottom: 45px;
  left: 0;
  right: 0;
  width: 100%;
  height: 48px;
  display: flex;
  background-color: #ddd;
  line-height: 49px;

}
.check,.text,.total,.count{
  flex: 1;
}
.check-ed{
  margin: 12px 0 0 15px;
}
.text,.total{
  margin-left: -80px;
}
.count{
  background-color: hotpink;
  color:#fff;
  text-align: center;
}
</style>
