<template>
 <div class="category-rightgoods">
   <dl v-for="(item, index) in rightGoods" :key="index">
     <dt><a :href="item.link"><img :src="item.image" alt=""></a></dt>
     <dd>{{item.title}}</dd>
   </dl>
 </div>
</template>

<script>
import BetterScroll from '../../../components/common/better-scroll/BetterScroll'
export default {
  name: "components_name",
  props:{
    rightGoods:{
      type:Array
    }
  },
  components: {
    BetterScroll
  },
  data() {
    return {

    }
  },
  methods: {},
};
</script>

<style scoped>
.category-rightgoods{
  padding:10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
dl{
  width: 30%;
  height: 100px;
}
dt img{
  width: 50px;
}
dl{
  text-align: center;
}
</style>
