<template>
  <div id="cart">
    <CartNavBar/>
    <BetterScroll class="content" ref='scroll' :probetype='3' :click='true'>
      <CartGoodsList/>
    </BetterScroll>
    <CartBottomBar @countClick='countClick' ref='bottombar'/>
    <Toast :message='message' :isShow='isShow'/>
  </div>
</template>
<script>
import BetterScroll from '../../components/common/better-scroll/BetterScroll'
import CartNavBar from './childrenCompon/CartNavBar'
import CartGoodsList from './childrenCompon/CartGoodsList'
import CartBottomBar from './childrenCompon/CartBottomBar'
import Toast from '../../components/common/toast/Toast'
import { mapGetters } from 'vuex'
export default {
  name: "component_name",
  components: {
    BetterScroll,
    CartNavBar,
    CartGoodsList,
    CartBottomBar,
    Toast
  },
  data () {
    return {
      message:'',
      isShow:false
    };
  },
  computed: {
    ...mapGetters(['cartList'])
  },
  methods: {
    countClick(){
      if(this.cartList.length == 0){
        this.isShow = true
        this.message =  '您的购物车空空如也~'
        setTimeout(() => {
        this.isShow = false
        this.message =  ''
        }, 1500);
      }else{
        if(!this.$refs.bottombar.allChecked){
          this.isShow = true
          this.message = '您还没有选择要购买的商品'
          setTimeout(() => {
            this.isShow = false
            this.message =  ''
          }, 1500);
        }
      }

    }
  },
}
</script>
<style scoped>
#cart{
  height: 100vh;
}
.content{
  height: calc(100% - 50px - 49px - 48px);
}
</style>