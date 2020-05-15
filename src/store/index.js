import Vue from 'vue'
import Vuex, { Store } from 'vuex'
Vue.use(Vuex)
import { mutations } from './mutations'
import { actions } from "./actions";
import { getters } from './getters'

const state = {
  cartList:[]
}

let store = new Store({
  state,
  mutations,
  actions,
  getters,
})

export default store