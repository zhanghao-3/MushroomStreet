<template>
 <div class="cart-goodslist">
   <CartGoodsItem v-for="(item, index) in cartList" :key="index" :cartListItem='item'  @click.native="select(index)"/>
 </div>
</template>

<script>
import CartGoodsItem from './CartGoodsItem'
import { mapGetters } from 'vuex'
export default {
  name: "components_name",
  components: {
    CartGoodsItem
  },
  computed: {
    ...mapGetters(['cartList'])
  },
  data() {
    return {

    }
  },
  methods: {
    // 点击商品选择按钮
    select(index){
      this.$store.commit('changeChecked',index)
    }
  },
};
</script>

<style scoped>

</style>
