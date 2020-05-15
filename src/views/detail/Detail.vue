<template>
 <div id="detail">
   <!-- 创建顶部导航 -->
   <DetailNavBar @titleClick='titleClick' ref='nav'/>
   <Bscroll class="content" ref='scroll' :probetype='3' @bsscroll='bScroll'>
    <!-- 轮播图 -->
    <DetailSwiper :topimages='topImages'/>
    <!-- 商品基本信息 -->
    <DetailBaseInfo :goods='goodsInfo'/>
    <!-- 商家基本信息 -->
    <DetailShopinfo :shop='shop'/>
    <!-- 商品详情展示 -->
    <DetailGoodsInfo :detailInfo='detailInfo' @imageload='imageload'/>
    <!-- 商品参数信息 -->
    <DetailParamsInfo :paramsInfo='paramsInfo' ref="goods"/>
    <!-- 评论信息 -->
    <DetailCommentInfo :commentInfo='commentInfo' ref="comment"/>
    <!-- 热门推荐 -->
    <DetailRecommendInfo :recommendInfo='recommendInfo' ref="recommend"/>
   </Bscroll>
   <!-- 底部导航 -->
   <DetailBottomBar @addCart='addCart'/>
   <!-- 返回顶部 -->
   <BackTop v-show="isShowTop"  @click.native='backTop'/>
    <Toast :message='message' :isShow='isShow'/>
 </div>
</template>

<script>
import Bscroll from '../../components/common/better-scroll/BetterScroll'
import {getDetailData,getRecommendData,GoodsInfo,GoodsParams} from '../../network/detail'
import DetailNavBar from './children-components/DetailNavBar'
import DetailSwiper from './children-components/DetailSwiper'
import DetailBaseInfo from './children-components/DetailBaseInfo'
import DetailShopinfo from './children-components/DetailShopinfo'
import DetailGoodsInfo from './children-components/DetailGoodsInfo'
import DetailParamsInfo from './children-components/DetailParamsInfo'
import DetailCommentInfo from './children-components/DetailCommentInfo'
import DetailRecommendInfo from './children-components/DetailRecommendInfo'
import DetailBottomBar from './children-components/DetailBottomBar'
import Toast from '../../components/common/toast/Toast'
import { debounce } from '../../common/debounce'
import { backTopMinxin } from '../../common/minxin'
export default {
  name: "Detail",
  data() {
    return {
      iid:null,
      topImages:[],
      goodsInfo:{},
      shop:{},
      detailInfo:{},
      paramsInfo:{},
      commentInfo:{},
      recommendInfo:[],
      positionY:[],
      getPositionY:null,
      currentIndex:0,

      pIndex:0,
      message:'',
      isShow:false
      
    }
  },
  mixins:[backTopMinxin],
  components:{
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopinfo,
    DetailGoodsInfo,
    Bscroll,
    DetailParamsInfo,
    DetailCommentInfo,
    DetailRecommendInfo,
    DetailBottomBar,
    Toast
  
  },
  methods: {
    imageload(){
      this.$refs.scroll.bs.refresh()
      // 执行防抖函数
      this.getPositionY()
    },
    titleClick(index){
      this.$refs.scroll.bs.scrollTo(0,this.positionY[index],1000)
    },
    
    bScroll(position){
      this.getBackTopShow(position)
      let y = position.y
      for(let i in this.positionY){        
        if(y <= this.positionY[i]){
          if(this.pIndex != i){
            this.pIndex = +i
            this.$refs.nav.currentIndex = this.pIndex
          }
        }
      }
    },
    addCart(){
      console.log('11111');
      // 获取购物车需要展示的信息
      let cartinfo = {}
      cartinfo.img = this.topImages[0]
      cartinfo.title = this.goodsInfo.title
      cartinfo.desc = this.goodsInfo.desc
      cartinfo.price = this.goodsInfo.highNowPrice
      cartinfo.iid = this.iid
      //将商品加入到购物车
      this.$store.dispatch('addCart',cartinfo).then(res => {
        this.isShow = true
        this.message = res
        setTimeout(() => {
          this.isShow = false
          this.message = ''
        }, 1500);
      })


      

    }
  },
  created () {
    // 防抖函数
    this.getPositionY = debounce(() => {
      this.positionY = []
      this.positionY.push(0)
      this.positionY.push(-this.$refs.goods.$el.offsetTop)
      this.positionY.push(-this.$refs.comment.$el.offsetTop)
      this.positionY.push(-this.$refs.recommend.$el.offsetTop)
      // console.log(this.positionY);
      
    },300),

    this.iid = this.$route.params.id
    // 请求详情页基本数据
    getDetailData(this.iid).then(res => {
      let data = res.data.result
      // 获取轮播图数据
      this.topImages = data.itemInfo.topImages
      // 获取商品信息数据
      this.goodsInfo = new GoodsInfo(data.columns,data.itemInfo,data.shopInfo)
      // 获取商家数据
      this.shop = data.shopInfo
      // 获取商品详情数据
      this.detailInfo = data.detailInfo
      // 获取商品参数信息
      this.paramsInfo = new GoodsParams(data.itemParams.info,data.itemParams.rule)
      //获取评论数据
      if(data.rate.list){
        this.commentInfo = data.rate.list[0]
      }
    }),
    // 请求热门推荐数据
    getRecommendData().then(res => {
      this.recommendInfo = res.data.data.list
    })
  },
};
</script>

<style scoped>
#detail{
  position: relative;
  z-index: 100;
  background-color: #fff;
  height: 100vh;
}
.content{
  height: calc(100% - 44px - 60px);
}
</style>
