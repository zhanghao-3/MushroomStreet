<template>
 <div class="check" :class="{checked:isCheck}">
   <img src="../../../assets/img/cart/tick.svg" alt="">
 </div>
</template>

<script>
export default {
  name: "components_name",
  props:{
    isCheck:{
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
.check{
  position: relative;
  width: 23px;
  height:23px;
  border-radius: 50%;
  border: 1px solid #aaa;
}
.check img{
  position: absolute;
  top:50%;
  left: 50%;
  transform: translate(-50%,-50%);
}
.checked{
  background-color: hotpink;
  border: 1px solid hotpink;
}
</style>
