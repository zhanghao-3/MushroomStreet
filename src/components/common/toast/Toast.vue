<template>
 <div class="toast" v-show="isShow">
   <div>{{message}}</div>
 </div>
</template>

<script>
export default {
  name: "components_name",
  props:{
    message:{
      type:String
    },
    isShow:{
      type:Boolean,
      default:false
    }
    
  },
  data() {
    return {

    }
  },
  methods: {},
};
</script>

<style scoped>
.toast{
  position: fixed;
  top:50%;
  left: 50%;
  transform: translate(-50%,-50%);
  padding: 6px 8px;
  border-radius: 10px;
  background-color: rgba(0,0,0,.6);
  color:#fff;
}
</style>
