<template>
  <div class="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
// import BS from '@better-scroll/core'
// import Pullup from '@better-scroll/pull-up'
// BS.use(Pullup)
import BS from 'better-scroll'
export default {
  name: "components_name",
  data() {
    return {
      bs:null
    };
  },
  props:{
    pullupload:{
      type:Boolean,
      default:false
    },
    probetype:{
      type:Number,
      default:0
    },
    click:{
      type:Boolean,
      default:false
    }
  },
  mounted() {
  //  setTimeout(() => {
      //创建better-scroll 对象
    this.bs = new BS('.wrapper',{
      click:this.click,
      pullUpLoad:this.pullupload,
      probeType:this.probetype,
      
    })
    // 监听滚动事件
    this.bs.on('scroll',(position) => {
      // console.log(position);
      this.$emit('bsscroll',position)
      
    })
    // 监听上拉事件
    this.bs.on('pullingUp',() => {
      // console.log('上拉监听');
      this.$emit('pullingUp')
      
    })
    
  //  }, 100); 
  },
  methods: {
    finishpullup(){
      this.bs.finishPullUp()
    }
  },
};
</script>

<style scoped>
  .wrapper{
    position: absolute;
    top:49px;
    bottom:50px;
    left: 0;
    right:0;
    /* height: calc(100% - 94px);  */
    overflow: hidden;
  }
</style>
