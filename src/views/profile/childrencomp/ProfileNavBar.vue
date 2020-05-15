<template>
 <div class="profile">
   <Navbar>
     <div slot="center">商城</div>
   </Navbar>
 </div>
</template>

<script>
import Navbar from '../../../components/common/nav-bar/Navbar'
export default {
  name: "components_name",
  components: {
    Navbar
  },
  data() {
    return {

    }
  },
  methods: {},
};
</script>

<style scoped>
.profile{
  background-color: #FF8197;
  color:#fff;
}
</style>
