<template>
 <div class="cart-navbar">
   <NavBar>
     <div slot="center">购物车({{cartLength}})</div>
   </NavBar>
 </div>
</template>

<script>
import NavBar from '../../../components/common/nav-bar/Navbar'
import { mapGetters } from 'vuex'
export default {
  name: "components_name",
  components: {
    NavBar
  },
  computed: {
    ...mapGetters(['cartLength'])
  },
  data() {
    return {

    }
  },
  methods: {},
};
</script>

<style scoped>
.cart-navbar{
  background-color: hotpink;
  color: #fff;  
  font-size: 18px;
}
</style>
