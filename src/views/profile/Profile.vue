<template>
  <div class="profile">
    <ProfileNavBar/>
    <ProfileUserState/>
    <ProfileBanlance/>
    <ProfileUserList/>
  </div>
</template>
<script>
import ProfileNavBar from './childrencomp/ProfileNavBar'
import ProfileUserState from './childrencomp/ProfileUserState'
import ProfileBanlance from './childrencomp/ProfileBanlance'
import ProfileUserList from './childrencomp/ProfileUserList'
export default {
  name: "component_name",
  components: {
    ProfileNavBar,
    ProfileUserState,
    ProfileBanlance,
    ProfileUserList
  },
  data () {
    return {

    };
  },
  methods: {
  }
}
</script>
<style scoped>
</style>