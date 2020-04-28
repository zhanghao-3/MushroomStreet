<template>
  <div class="home-recommend">
    <div v-for="(item, index) in recommend" :key="index" class="recommed-item">
      <img :src="item.image" alt="">
      <div>{{item.title}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "components_name",
  props:{
    recommend:{
      type:Array,
      default(){
        return []
      }
    }
  },
  data() {
    return {
    };
  },
  methods: {},
};
</script>

<style scoped>
  .home-recommend{
    width: 100%;
    display: flex;
    text-align: center;
    border-bottom: 10px solid #ddd;
  }
  .recommed-item{
    flex: 1;
    margin: 20px 0;
  }
  .recommed-item img{
    width: 60px;
  }
</style>
