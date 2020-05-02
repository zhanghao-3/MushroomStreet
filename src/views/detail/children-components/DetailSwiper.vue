<template>
 <div>
   <Swiper class="detail-swiper">
     <SwiperItem v-for="(item, index) in topimages" :key="index" class="swiper-item">
       <img :src="item" alt="">
     </SwiperItem>
   </Swiper>
 </div>
</template>

<script>
import { Swiper,SwiperItem } from '../../../components/common/swiper/index'
export default {
  name: "DetailSwiper",
  props:{
    topimages:{
      type:Array,
      default(){
        return []
      }
    }
  },
  data() {
    return {

    }
  },
  components:{
    Swiper,
    SwiperItem
  },
  methods: {},
};
</script>

<style scoped>
.detail-swiper {
  height: 300px;
  overflow: hidden;
}
</style>
