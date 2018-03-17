/* JS入口问文件 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'

// 使用mock提供的数据
import './mock/MockServer'

new Vue({
  el: '#app',
  render: h => h(App),
  router
})
