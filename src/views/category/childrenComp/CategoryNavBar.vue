<template>
 <div class="category-navbar">
   <NavBar>
     <div slot="center">商品分类</div>
   </NavBar>
 </div>
</template>

<script>
import NavBar from '../../../components/common/nav-bar/Navbar'
export default {
  name: "components_name",
  components: {
    NavBar
  },
  data() {
    return {

    }
  },
  methods: {},
};
</script>

<style scoped>
.category-navbar{
  background-color: hotpink;
  color:#fff
}

</style>
