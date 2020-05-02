<template>
  <div class="nav-bar">
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>
<script>
export default {
  name: "Navbar",
  data () {
    return {

    };
  }
}
</script>
<style scoped>
  .nav-bar{
    width: 100%;
    height: 49px;
    display: flex;
    position: sticky;
    top:0;
    left: 0;
    flex: 1;
    z-index: 10;
    line-height: 49px;
    text-align: center;
  }
  .nav-bar .left,.right{
    width: 60px;
  }
  .nav-bar .center{
    flex: 1;
  }
</style>