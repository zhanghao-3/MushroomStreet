<template>
 <div id="detail">
   <!-- 创建顶部导航 -->
   <DetailNavBar/>
   <!--  -->
   <DetailSwiper :topimages='topImages'/>
  <!--  -->
  <DetailBaseInfo :goods='goodsInfo'/>
 </div>
</template>

<script>
import {getDetailData,GoodsInfo} from '../../network/detail'
import DetailNavBar from './children-components/DetailNavBar'
import DetailSwiper from './children-components/DetailSwiper'
import DetailBaseInfo from './children-components/DetailBaseInfo'
export default {
  name: "Detail",
  data() {
    return {
      iid:null,
      topImages:[],
      goodsInfo:{}
    }
  },
  components:{
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo
  },
  methods: {},
  created () {
    this.iid = this.$route.params.id
    getDetailData(this.iid).then(res => {
      console.log(res);
      let data = res.data.result
      // 获取轮播图数据
      this.topImages = data.itemInfo.topImages
      // 获取商品信息数据
      this.goodsInfo = new GoodsInfo(data.columns,data.itemInfo,data.shopInfo)
    })
  }
};
</script>

<style scoped>

</style>
