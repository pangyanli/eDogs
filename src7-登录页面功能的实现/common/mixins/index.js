/*
    vue 组件的mixin模块
*/
import { Indicator } from 'mint-ui'
export const setLoading = {
  mounted(){
    // 设置loading图
    Indicator.open({
      text: '数据加载中...',
      spinnerType: 'fading-circle'
    })
    setTimeout(()=>{
      Indicator.close()
    },1000)
  }
}
