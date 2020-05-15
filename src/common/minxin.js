import BackTop from '../components/content/backtop/BackTop'
export let backTopMinxin = {
  data(){
    return {
      isShowTop:false
    }
  },
  methods: {
    //返回顶部
    backTop(){
      this.$refs.scroll.bs.scrollTo(0,0,1500)
    },
    getBackTopShow(position){
      this.isShowTop = position.y < -800
    }
  },
  components:{
    BackTop
  }
}