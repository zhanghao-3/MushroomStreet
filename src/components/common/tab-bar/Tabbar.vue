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