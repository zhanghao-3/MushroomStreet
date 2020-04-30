import Vue from 'vue'
import App from './App.vue'
import router from './router'
// import Vuelazyload from 'vue-lazyload'
// Vue.use(Vuelazyload, {
//   loading: require('./assets/img/common/placeholder.png')
// })

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')


