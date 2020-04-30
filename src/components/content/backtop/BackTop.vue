<template>
  <div class="back-top">
    <img src="../../../assets/img/common/top.png" alt="">
  </div>
</template>

<script>
export default {
  name: "BackTop",
  data() {
    return {
    };
  },
  methods: {},
};
</script>

<style scoped>
  .back-top{
    position: fixed;
    right: 20px;
    bottom: 55px;
    z-index: 100;
  }
  .back-top img{
    width: 50px;
    opacity: 0.7;
  }
</style>
