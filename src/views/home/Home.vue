<template>
  <div id="home">
    <navbar>
      <div slot="center">蘑菇街</div>
    </navbar>
    <TabControl :title='["流行","新款","精选"]' @tabclick='tabClick' v-show='isTabFixed' ref='tabFixed'></TabControl>
    <BetterScroll :click='true' :pullupload='true' :probetype='3' class="better-scroll" @bsscroll='homeScroll' ref='scroll' @pullingUp='loadMore'>
      <home-swiper :banners="banners"></home-swiper>
      <HomeRecommend :recommend="recommend"></HomeRecommend>
      <Homepopular/>
      <TabControl :title='["流行","新款","精选"]' @tabclick='tabClick' v-show='!isTabFixed' ref='tabContent'></TabControl>
      <GoodsList :goods='goods[currentType].list'></GoodsList>
    </BetterScroll>
    <BackTop v-if="isShowTop" @click.native='backTop'/>
  </div>
</template>
<script>
// 公共组件
import Navbar from '../../components/common/nav-bar/Navbar'
import { request } from '../../network/request'
import TabControl from '../../components/content/tabcontrol/TabControl'
import GoodsList from '../../components/content/goods/GoodsList'
import BetterScroll from '../../components/common/better-scroll/BetterScroll'
import BackTop from '../../components/content/backtop/BackTop'

// home 子组件
import HomeSwiper from './son-comp/HomeSwiper'
import { getHomeMultidata,getHomeGoods } from '../../network/home'
import HomeRecommend from './son-comp/HomeRecommend'
import Homepopular from './son-comp/Homepopular'

export default {
  name: "Home",
  data () {
    return {
      banners:[], //轮播图数据
      recommend:[], // 推荐数据
      goods:{ // 
        pop:{page:0,list:[]},
        new:{page:0,list:[]},
        sell:{page:0,list:[]}
      },
      currentType:'pop',
      isShowTop:false,
      isTabFixed:false //用于代替 tabcontrol显示与隐藏
    }
  },
  components:{
    Navbar,
    HomeSwiper,
    HomeRecommend,
    Homepopular,
    TabControl,
    GoodsList,
    BetterScroll,
    BackTop
  },
  created() {
    this.getHomeMultiData()
    this.getHomeGoods('pop')
    this.getHomeGoods('new')
    this.getHomeGoods('sell')
  },
  methods: {
    // 网络请求相关方法
    getHomeMultiData(){
      getHomeMultidata().then(res => {
        // console.log(res.data.data.banner.list);
        this.banners = res.data.data.banner.list
        this.recommend = res.data.data.recommend.list
      })
    },
    getHomeGoods(type){
      const page = this.goods[type].page + 1
      getHomeGoods(type,page).then(res => {
        // console.log(res);
        this.goods[type].list.push(...res.data.data.list)
        this.goods[type].page += 1
        this.$refs.scroll.finishpullup()
      }).catch(err => {
        this.$refs.scroll.finishpullup()
      })
    },
    tabClick(index){
      switch(index){
        case 0 : this.currentType = 'pop'
        break
        case 1 : this.currentType = 'new'
        break
        case 2 : this.currentType = 'sell'
      }
      this.$refs.tabFixed.currentIndex = index
      this.$refs.tabContent.currentIndex = index
    },
    // imageLoad(){
    //   this.$refs.scroll.bs.refresh()
    // },
    homeScroll(position){
      // console.log(position);
      // if(position.y < -800){
      //   this.isShowTop = true
      // }else{
      //   this.isShowTop = false
      // }
      this.isShowTop = position.y < -800
      this.isTabFixed = position.y < -610
    },
    backTop(){
      // console.log('.............');
      this.$refs.scroll.bs.scrollTo(0,0,1500)
    },
    loadMore(){
      this.getHomeGoods(this.currentType)
    }
  },
}
</script>
<style scoped>
  #home{
    height: 100vh;
    position: relative;
    /* padding-bottom: 100px; */
  }
  /* .better-scroll{      */
    /* position: relative; */
    /* height: calc(100% - 94px);
    overflow: hidden; */
  /* } */
</style>