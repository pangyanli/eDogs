/* 当前项目接口ajax请求模块 */
import ajax from './ajax'
// 1、请求获取首页数据
export const reqHomeData = () => ajax('/home_data')  // url与mock的接口一致

// 2、请求获取分类列表categorys数据
export const reqCategorys = () => ajax('/categorys')  // url与mock的接口一致

// 3、请求获取品牌brand数据
export const reqBrand = () => ajax('/brand')
