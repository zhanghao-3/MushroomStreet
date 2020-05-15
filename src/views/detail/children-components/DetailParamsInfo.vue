<template>
 <div class="params-info" v-if="Object.keys(paramsInfo).length !== 0">
   <table class="info-params" v-for="(item, index) in paramsInfo.size" :key="index">
     <tr v-for="(tr, index1) in item" :key="index1">
       <td v-for="(td, index2) in tr" :key="index2">
         {{td}}
       </td>
     </tr>
   </table>
   <table class="info-params">
     <tr v-for="(item, index) in paramsInfo.info" :key="index">
       <td class="params-key">{{item.key}}</td>
       <td class="params-value">{{item.value}}</td>
     </tr>
   </table>
   <div class="info-img" v-if="paramsInfo.img.length !== 0">
     <img :src="paramsInfo.img" alt="">
   </div>
 </div>
</template>

<script>
export default {
  name: "components_name",
  props:{
    paramsInfo:Object
  },
  data() {
    return {

    }
  },
  methods: {},
};
</script>

<style scoped>
.info-params{
  width: 100%;
  border-bottom: 3px solid #eee;
  padding:0 10px;
}
.info-params tr{
  height: 40px;
}
.info-params tr td:first-child{
  width: 100px;
  color:#333;
}
.info-params tr td{
  color:#f00;
}
.info-img{
  padding:0 10px;
  border-bottom: 2px solid #eee;
}
.info-img img{
  width: 100%;
}
</style>
