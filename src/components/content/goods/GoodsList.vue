<template>
  <div class="goodslist">
    <GoodsListItem v-for="(item, index) in goods" :key="index" :goodsitem='item'>

    </GoodsListItem>
  </div>
</template>

<script>
import GoodsListItem from './GoodsListItem'
export default {
  name: "components_name",
  data() {
    return {
    };
  },
  props:{
    goods:{
      type:Array,
      default(){
        return []
      }
    }
  },
  components:{
    GoodsListItem
  },
  methods: {
    // imageload(){
    //   this.$emit.
    // }
  },
};
</script>

<style scoped>
  .goodslist{
    padding:0 2%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding-bottom: 100px;
  }
</style>
