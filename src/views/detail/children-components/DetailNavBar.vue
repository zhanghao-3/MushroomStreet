<template>
 <div>
   <Navbar>
     <div slot="left" class="back-image" @click="backHome">
       <img src="../../../assets/img/common/back.svg" alt="">
     </div>
     <div slot="center" class="title">
       <div v-for="(item, index) in titles" :key="index" class="title-item" 
       :class="{active : currentIndex === index}" @click="itemClick(index)">
         {{item}}
       </div>
     </div>
   </Navbar>
 </div>
</template>

<script>
import Navbar from '../../../components/common/nav-bar/Navbar'
export default {
  name: "DetailNavBar",
  data() {
    return {
      titles:['商品','参数','评论','推荐'],
      currentIndex:0
    }
  },
  components: {
    Navbar
  },
  methods: {
    itemClick(index){
      this.currentIndex = index
    },
    backHome(){
      this.$router.back()
    }
  },
};
</script>

<style scoped>
  .title{
    display: flex;
  }
  .title-item{
    flex: 1;
  }
  .back-image img{
    margin-top: 12px;
  }
  .active{
    color:hotpink
  }

</style>
