<template>
  <div id="category">
    <!-- 顶部导航 -->
    <CategoryNavBar class="cate-navbar"/>
    <div id="page">
      <!-- 左侧列表 -->
      <div class="left-list">
        <CategoryLeftList :leftList='leftList' @getIndex='getIndex'/>
      </div>
      <!-- 右侧列表 -->
      <div class="right-goods">
        <TabControl :title='["综合","新品","销量"]' ref='outTab' @tabclick='tabclick' class="outTab" v-show="isShow"></TabControl>
        <BetterScroll class="content" :click='true' :probetype='3' ref="scroll" @bsscroll='cateScroll'>
          <CategoryRightGoods :rightGoods='rightGoods'/>
          <TabControl :title='["综合","新品","销量"]' ref='tabContent' @tabclick='tabclick' class="tabcontrol"></TabControl>
          <GoodsList :goods='GoodsInfo[currentType].list' class="goodslist"/>
        </BetterScroll>
      </div>
    </div>
  </div>
</template>
<script>
// 网络请求
// 获取左侧、右侧数据
import { getCategoryData,getCateGoodsData } from '../../network/category'
// 获取右侧下边数据
import { getHomeGoods } from '../../network/home'

import BetterScroll from '../../components/common/better-scroll/BetterScroll'
import CategoryNavBar from './childrenComp/CategoryNavBar'
import CategoryLeftList from './childrenComp/CategoryLeftList'
import CategoryRightGoods from './childrenComp/CategoryRightGoods'
import TabControl from '../../components/content/tabcontrol/TabControl'
import GoodsList from '../../components/content/goods/GoodsList'

export default {
  name: "component_name",
  components: {
    BetterScroll,
    CategoryNavBar,
    CategoryLeftList,
    CategoryRightGoods,
    TabControl,
    GoodsList,
  },
  data () {
    return {
      leftList:null,
      rightGoods:null,
      isShow:false,
      GoodsInfo:{
        pop:{page:1,list:[]},
        new:{page:1,list:[]},
        sell:{page:1,list:[]},
      },
      currentType:'pop',
      saveY:0
    };
  },
  created () {
    // 获取左侧列表数据
    getCategoryData().then(res => {
      const data = res.data.data
      console.log(data);
      this.leftList = data.category.list
      // 第一次获取 右边商品列表数据
      this.getCateGoodsData(this.leftList[0].maitKey)
    })
    // 获取右边 最下边商品数据
    this.getHomeGoods('pop')
  },
  mounted () {
    // 右侧下边图片加载完成  重新刷新页面
    this.$bus.$on('imageload',() => {
      this.$refs.scroll.refresh()
    })
  },

  // 进入分类页 跳转到离开时的位置 并重新刷新
  activated () {
    this.$refs.scroll.refresh()
    this.$refs.scroll.bs.scrollTo(0,this.saveY,0)
  },
  // 离开分类页 记录状态 和 位置
  deactivated () {
    this.saveY = this.$refs.scroll.getScrollY()
  },
  methods: {
    // 点击 获取 对应index的右侧商品数据
    getIndex(index){
      this.getCateGoodsData(this.leftList[index].maitKey)
      this.$refs.scroll.bs.scrollTo(0,0,100)
    },
    // 定义 获取右侧商品数据的方法
    getCateGoodsData(page){
      getCateGoodsData(page).then(res => {
        const data = res.data.data
        this.rightGoods = data.list
      })
    },
    // 点击 tab 栏
    tabclick(index){
      // console.log(index);
      switch(index){
        case 0 : this.currentType = 'pop'
        break;
        case 1 : this.currentType = 'new'
        break;
        case 2 : this.currentType = 'sell'
        break;
      }
      this.getHomeGoods(this.currentType)
      this.$refs.outTab.currentIndex = index
      this.$refs.tabContent.currentIndex = index
    },
    // 获取右侧下边数据
    getHomeGoods(type){
      const page = this.GoodsInfo[type].page
      getHomeGoods(type,page).then(res => {
        console.log(res);
        let data = res.data.data.list
        this.GoodsInfo[type].list.push(...data)
      })
    },
    // tab栏的显示与隐藏
    cateScroll(position){
      this.isShow = position.y <= -1017
    }
  },
}
</script>
<style scoped>
#category{
  height: 100vh;
}
#page{
  display: flex;
  height: calc(100% - 49px - 50px);
}
.left-list{
  width: 30%;
  height: 100%;
  overflow: scroll;
}
.right-goods{
  width: 70%;
  height: 100%;
  /* overflow: scroll; */
}
.tabcontrol{
  position: sticky;
  top:0;
  left: 0;
}
.content{
  height: 100%;
}
.goodslist{
  padding-bottom: 0;
}
.outTab{
  width: 70%;
  position: fixed;
  top: 49px;
  right: 0;
  left: 30%;
}
</style>