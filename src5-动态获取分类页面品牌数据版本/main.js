/* JS入口问文件 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 使用mock提供的数据
import './mock/MockServer'

new Vue({
  el: '#app',
  render: h => h(App),
  router,  // 结果所有组件多了2个属性: $route(取参数)/$router（可以直接调用back(),repalce()等函数）
  store  // 所有的组件都多了一个属性: $store
})
