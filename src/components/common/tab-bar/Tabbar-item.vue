<template>
  <div class="tab-item" @click="itemClick">
    <div v-if="!isActive"><slot name='item-icon'></slot></div>
    <div v-else><slot name='item-icon-active'></slot></div>
    <div :style='styleColor'><slot name='item-text'></slot></div>
  </div>
</template>
<script>
export default {
  name: "Tabbar-item",
  props:{
    path:String,
    activeColor:{
      type:String,
      default:'red'
    }
  },
  computed: {
    isActive(){
      return this.$route.path.indexOf(this.path) != -1
    },
    styleColor(){
      return this.isActive ? {color:this.activeColor} : {}
    }
  },
  data () {
    return {
      
    };
  },
  methods: {
    itemClick(){
      this.$router.push(this.path)
      // 这里应该是先打印 再 执行 push  所以打印的是上一次的页面路由
      console.log(this.$route);
    }
  },
}
</script>
<style scoped>
.tab-item{
  margin-top: 5px;
  text-align: center;
  flex: 1;
  font-size: 13px;
}
.tab-item img{
  width: 25px;
  height: 25px;
}

</style>