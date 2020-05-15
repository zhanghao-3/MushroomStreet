import Vue from 'vue'
import './cube-ui'
import App from './App.vue'
import router from './router'
import store from './store/index'
// 导入图片懒加载
import VueLazyLoad from 'vue-lazyload'

// 1.导入 fastclick
import FastClick from 'fastclick'

import 'amfe-flexible'
// 事件总线
Vue.prototype.$bus = new Vue()
// 2. 调用 attach方法
FastClick.attach(document.body)
// 使用图片懒加载
Vue.use(VueLazyLoad)


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')


