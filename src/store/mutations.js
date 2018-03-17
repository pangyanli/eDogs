
import {
  RECEIVE_HOME_DATA,
  RECEIVE_CATEGORYS,
  RECEIVE_BRAND
} from './mutation-types'

export default {
  // 1、接收首页的数据
  [RECEIVE_HOME_DATA](state,{homeData}){
    state.homeData = homeData
  },
  // 2、接收分类列表categorys的数据
  [RECEIVE_CATEGORYS](state,{categorys}){
    state.categorys = categorys
  },
  // 3、接收品牌brand的数据
  [RECEIVE_BRAND](state,{brand}){
    state.brand = brand
  }
}

