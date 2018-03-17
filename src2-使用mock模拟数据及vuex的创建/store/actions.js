
import {reqHomeDate} from '../api/index'
import {RECEIVE_HOME_DATE} from './mutation-types'

export default {
  // 1、获取首页的数据
  async getHomeData({commit}){
    let result = await reqHomeDate()
    commit(RECEIVE_HOME_DATE, {homeDate: result.data})
  }
}



