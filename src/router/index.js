/* 路由模块 */

import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../pages/Home/Home.vue'
import Categorys from '../pages/Categorys/Categorys.vue'
import Cart from '../pages/Cart/Cart.vue'
import Person from '../pages/Person/Person.vue'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/home',
      component: Home
    },
    {
      path: '/categorys',
      component: Categorys
    },
    {
      path: '/cart',
      component: Cart
    },
    {
      path: '/person',
      component: Person
    },
    {
      path: '/',
      redirect: '/home'
    },
  ]
})
