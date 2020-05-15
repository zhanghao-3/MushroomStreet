<template>
 <div class="goods-info" v-if="Object.keys(detailInfo).length !== 0">
  <div class="info-desc">
     <div class="start"></div>
     <div class="desc">{{detailInfo.desc}}</div>
     <div class="end"></div>
  </div>
  <div class="info-key">{{detailInfo.detailImage[0].key}}</div>
  <div class="info-list">
    <img v-for="(item, index) in detailInfo.detailImage[0].list" :key="index" :src="item" alt="" @load="imageload">
  </div>
 </div>
</template>

<script>
export default {
  name: "components_name",
  props:{
    detailInfo:{
      type:Object
    }
  },
  data() {
    return {
      imglength:0,
      num:0
    }
  },
  watch: {
    detailInfo(){
      this.imglength = this.detailInfo.detailImage[0].list.length
    }
  },
  methods: {
    imageload(){
      this.num++
      if(this.num === this.imglength){
        this.$emit('imageload')
      }
    }
  },
};
</script>

<style scoped>
.goods-info{
  font-size: 14px;
}
.info-desc{
  overflow: hidden;
  margin: 10px 0;
}
.start{
  width: 100px;
  border-bottom: 2px solid #000;
}
.end{
  float: right;
  width: 100px;
  border-bottom: 2px solid #000;
}
.desc{
  margin: 10px 0;
}
.info-key{
  margin: 10px 20px;
}
.info-list img{
  width: 100%;
}
</style>
