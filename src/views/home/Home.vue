<template>
  <div id="home">
    <navbar class="nav-bar">
      <div slot="center">蘑菇街</div>
    </navbar>
    <TabControl :title='["流行","新款","精选"]' @tabclick='tabClick' v-show='isTabFixed' ref='tabFixed' class="tabcontrol"></TabControl>
    <BetterScroll :click='true' :pullupload='true' :probetype='3' class="better-scroll" @bsscroll='homeScroll' ref='scroll' @pullingUp='loadMore'>
      <home-swiper :banners="banners"></home-swiper>
      <HomeRecommend :recommend="recommend"></HomeRecommend>
      <Homepopular/>
      <TabControl :title='["流行","新款","精选"]' @tabclick='tabClick' ref='tabContent'></TabControl>
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
// 返回顶部 组件  混入写法
import { backTopMinxin} from '../../common/minxin'
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
      isTabFixed:false, //用于代替 tabcontrol显示与隐藏
      saveY:0
    }
  },
  // 返回顶部 混入写法
  mixins:[backTopMinxin],
  components:{
    Navbar,
    HomeSwiper,
    HomeRecommend,
    Homepopular,
    TabControl,
    GoodsList,
    BetterScroll,
  },
  created() {
    this.getHomeMultiData()
    this.getHomeGoods('pop')
    this.getHomeGoods('new')
    this.getHomeGoods('sell')
  },
  mounted() {
    this.$bus.$on('imageload',() => {
      this.$refs.scroll.bs.refresh()
    })
  },
  // 进入首页 跳转到离开时的位置 并重新刷新
    activated () {
    this.$refs.scroll.refresh()
    this.$refs.scroll.bs.scrollTo(0,this.saveY,0)
  },
  // 离开首页 记录状态 和 位置
  deactivated () {
    this.saveY = this.$refs.scroll.getScrollY()
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
    homeScroll(position){
      // 返回顶部 混入写法
      this.getBackTopShow(position)

      this.isTabFixed = position.y < -610
    },
    // backTop(){
    //   this.$refs.scroll.bs.scrollTo(0,0,1500)
    // },
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
  .nav-bar{
    background-color: hotpink;
    color: #fff;
  }
  .tabcontrol{
    position: fixed;

  }
  /* .better-scroll{      */
    /* position: relative; */
    /* height: calc(100% - 94px);
    overflow: hidden; */
  /* } */
</style>