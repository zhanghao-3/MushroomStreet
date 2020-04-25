<template>
  <div>
    <navbar>
      <div slot="center">蘑菇街</div>
    </navbar>
  </div>
</template>
<script>
import Navbar from '../../components/common/nav-bar/Navbar'
export default {
  name: "Home",
  data () {
    return {

    };
  },
  components:{
    Navbar
  }
}
</script>
<style scoped>
  .nav-bar {
    position: sticky;
    top:0;
    left: 0;
    flex: 1;
    background-color: hotpink;
    line-height: 49px;
    color: #fff;
    text-align: center;
  }
</style>