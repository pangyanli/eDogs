
import {RECEIVE_HOME_DATE} from './mutation-types'

export default {
  // 接收首页的数据
  [RECEIVE_HOME_DATE](state,{homeData}){
    state.homeDate = homeData
  }
}

