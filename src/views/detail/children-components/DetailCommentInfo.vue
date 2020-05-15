<template>
 <div class="comment-info">
   <div class="comment-top">
    <div class="top-title">用户评价</div>
    <div class="top-more">更多 > </div>
   </div>
   <div class="info-user">
     <img :src="userLogo" alt="">
     <span>{{username}}</span>
   </div>
   <div class="info-detail">
     <p>{{commentInfo.content}}</p>
    <div class="info-other">
      <span>{{commentInfo.created | showData}}</span>
      <span>{{commentInfo.style}}</span>
    </div>
   </div>
   <div class="info-imgs">
     <img :src="item" alt="" v-for="(item, index) in commentInfo.images" :key="index">
   </div>
 </div>
</template>

<script>
import {dateFormat} from '../../../common/data'
export default {
  name: "components_name",
  props:{
    commentInfo:{
      type:Object,
      default(){
        return {}
      }
    }
  },
  watch: {
    commentInfo(){
      this.userLogo = this.commentInfo.user.avatar
      this.username = this.commentInfo.user.uname
    }
  },
  filters:{
    showData(value){
      return dateFormat(new Date(value * 1000),'yyyy-MM-dd')
    }
  },
  data() {
    return {
      userLogo:'',
      username:''
    }
  },
  methods: {},
};
</script>

<style scoped>
.comment-top{
  padding:0 5px 0 5px;
  display: flex;
  justify-content: space-between;
  margin: 10px 0;
  font-size: 17px;
}
.top-title,.top-more{
  flex: 1;
}
.top-more{
  text-align: right;
}
.info-user{
  padding: 5px 10px;
  font-size: 18px;
}
.info-user img{
  border-radius: 50%;
  width: 50px;
  vertical-align: middle;
  margin-right: 20px;
}
.info-detail{
  padding:10px;
}
.info-other{
  margin-top: 5px;
}
.info-other span:first-child{
  margin-right: 15px;
  font-size: 14px;
}
.info-imgs{
  width: 100%;
  display: flex;
  margin-bottom: 10px;
}
.info-imgs img {
  width: 30%;
  height: 100%;
}
</style>
