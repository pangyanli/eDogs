/* 当前项目接口ajax请求模块 */
import ajax from './ajax'
// 请求获取首页数据
export const reqHomeDate = () => ajax('/home_data')  // url与mock的接口一致

