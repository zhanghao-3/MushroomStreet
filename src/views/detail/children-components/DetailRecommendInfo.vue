<template>
 <div class="recommend-info">
   <div class="info">热门推荐</div>
   <div class="goods">
    <GoodsListItem v-for="(item, index) in recommendInfo" :key="index" :goodsitem='item'/>
   </div>
 </div>
</template>

<script>
import GoodsListItem from '../../../components/content/goods/GoodsListItem'
export default {
  name: "components_name",
  props:{
    recommendInfo:Array
  },
  components: {
    GoodsListItem
  },
  data() {
    return {

    }
  },
  methods: {},
};
</script>

<style scoped>
.info{
  font-size: 20px;
  padding: 20px 10px;
  margin-bottom: 10px;
  border-top: 5px solid #eee;
  border-bottom: 5px solid #eee;
}
.goods{
    padding:0 2%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding-bottom: 110px;
}
</style>
