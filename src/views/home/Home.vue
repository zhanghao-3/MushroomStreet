<template>
  <div>
    <navbar>
      <div slot="center">蘑菇街</div>
    </navbar>
    <home-swiper :banners="banners"></home-swiper>
    <HomeRecommend :recommend="recommend"></HomeRecommend>
    <Homepopular/>
    <TabControl :title='["流行","新款","精选"]'></TabControl>
  </div>
</template>
<script>
// 公共组件
import Navbar from '../../components/common/nav-bar/Navbar'
import { request } from '../../network/request'
import TabControl from '../../components/content/tabcontrol/TabControl'

// home 子组件
import HomeSwiper from './son-comp/HomeSwiper'
import { getHomeMultidata } from '../../network/home'
import HomeRecommend from './son-comp/HomeRecommend'
import Homepopular from './son-comp/Homepopular'

export default {
  name: "Home",
  data () {
    return {
      banners:[],
      recommend:[]
    }
  },
  components:{
    Navbar,
    HomeSwiper,
    HomeRecommend,
    Homepopular,
    TabControl
  },
  created() {
    this.getHomeMultiData()
  },
  methods: {
    // 网络请求相关方法
    getHomeMultiData(){
      getHomeMultidata().then(res => {
        console.log(res.data.data.banner.list);
        this.banners = res.data.data.banner.list
        this.recommend = res.data.data.recommend.list
      })
    }
  },
}
</script>
<style scoped>
</style>