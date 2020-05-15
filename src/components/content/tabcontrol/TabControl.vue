<template>
  <div class="tab-control">
    <div v-for="(item, index) in title" :key="index" class="tab-control-item" @click="activeClick(index)" :class="{'active':index == currentIndex}">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabControl",
  props:{
    title:{
      type:Array,
      default(){
        return []
      }
    }
  },
  data() {
    return {
      currentIndex:0
    }
  },
  methods: {
    activeClick(index){
      this.currentIndex = index
      this.$emit('tabclick',index)
    }
  },
};
</script>

<style scoped>
  .tab-control{
    width: 100%;
    height: 50px;
    display: flex;
    text-align: center;
    /* margin:20px 0; */
    /* position: sticky;
    top:49px;
    left:0; */
    background-color: #fff;
    z-index: 10;
  }
  .tab-control-item{
    height: 50px;
    line-height: 50px;
    flex: 1;
  }
  .active{
    color:hotpink;
  }
  .active span{
    display: inline-block;
    width: 50px;
    height: 40px;
    border-bottom: 2px solid hotpink;
  }
</style>
