/* 当前项目接口ajax请求模块 */
import ajax from './ajax'
// 1、请求获取首页数据
export const reqHomeData = () => ajax('/home_data')  // url与mock的接口一致

// 2、请求获取分类列表categorys数据
export const reqCategorys = () => ajax('/categorys')  // url与mock的接口一致

// 3、请求获取品牌brand数据
export const reqBrand = () => ajax('/brand')

// 4、请求普通登录
export const commonLogin = ({name,pwd}) => ajax ('/login_pwd',{name,pwd},'POST')

// 5、获取短信验证码
export const sendCode = (phone) => ajax('/sendcode',{phone})

// 6、手机验证码登录
export const codeLogin = ({name,captcha,code}) => ('/login_sms',{name,captcha,code},'POST')
