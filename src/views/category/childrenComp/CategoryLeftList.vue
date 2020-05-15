<template>
 <div class="category-leftlist">
    <ul class="leftlist">
      <li v-for="(item, index) in leftList" :key="index" :class="{active:currentIndex == index}" @click="liClick(index)">{{item.title}}</li>
    </ul>
 </div>
</template>

<script>
import BetterScroll from '../../../components/common/better-scroll/BetterScroll'
export default {
  name: "components_name",
  props:{
    leftList:{
      type:Array
    }
  },
  components: {
    BetterScroll
  },
  data() {
    return {
      currentIndex:0
    }
  },
  methods: {
    liClick(index){
      this.currentIndex = index
      this.$emit('getIndex',index)
    }
  },
};
</script>

<style scoped>
.category-leftlist{
  background-color: #eee;
}
.leftlist{
  background-color: #eee;
  width: 100%;
}
.leftlist li{
  line-height: 50px;
  text-align: center;
}
.active{
  border-left: 2px solid hotpink;
  background-color: #fff;
}
</style>
