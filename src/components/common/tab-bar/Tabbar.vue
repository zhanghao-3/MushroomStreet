<template>
  <div class="tab-bar">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "Tabbar",
}
</script>
<style scoped>
  /* @import '../../assets/css/iconfont.css'; */

/* @import '../../assets/font-awesome-4.7.0/css/font-awesome.min.css'; */
.tab-bar{
  height: 50px;
  background-color: #eee;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
}
</style>