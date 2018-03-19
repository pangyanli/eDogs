<template>
  <div class="person">
    <div class="person_header">
      <span class="iconfont icon-fanhui" @click="$router.back()"></span>
      <a href="javascript:;" class="register">注册</a>
    </div>
    <div class="login_way">
      <ul class="btn_wrap">
        <li class="btn" @click="loginWay(1)">
          <span>普通登录</span>
          <span class="icon_span" v-show="showLoginWay===1">
            <i class="iconfont icon-xiangshang2"></i>
          </span>
        </li>
        <li class="btn" @click="loginWay(2)">
          <span>手机动态密码登录</span>
          <span class="icon_span"  v-show="showLoginWay===2">
            <i class="iconfont icon-xiangshang2"></i>
          </span>
        </li>
      </ul>
    </div>
    <div class="login_wrap" >
      <!-- 普通登录 -->
      <ul class="login_container"  v-show="showLoginWay===1" >
        <li class="commen_li">
          <span class="icon_span">
            <i class="iconfont icon-account"></i>
          </span>
          <input class="commen_input" type="tel" placeholder="手机号/邮箱/用户名"
                 maxlength="11"   v-model="name">
        </li>
        <li class="commen_li">
            <span class="icon_span">
              <i class="iconfont icon-suo"></i>
            </span>
          <input class="commen_input" type="password" placeholder="输入密码" v-model="pwd">
        </li>
        <li class="forgetpwd">
          <p class="forgetpwd_text">忘记密码？</p>
        </li>
      </ul>
      <!-- 手机动态密码登录 -->
      <ul class="login_container" v-show="showLoginWay===2">
        <li class="commen_li">
          <span class="icon_span">
            <i class="iconfont icon-shouji"></i>
          </span>
          <input class="commen_input" type="text" placeholder="已注册的手机号"
                 maxlength="11" v-model="phone">
        </li>
        <li class="commen_li">
          <span class="icon_span">
            <i class="iconfont icon-suo"></i>
          </span>
          <input class="commen_input" type="text" placeholder="请输入图片验证码" v-model="captcha">
          <span class="getimg"  @click.prevent="getCaptcha">
            <img src="http://localhost:3000/captcha" alt="">
          </span>
        </li>
        <li class="commen_li">
          <span class="icon_span">
            <i class="iconfont icon-suo"></i>
          </span>
          <input class="commen_input" type="text" placeholder="手机验证码" v-model="code">
          <span class="getcode"  v-show="!computedTime" @click.prevent="getCode">获取验证码</span>
          <span class="getcode" v-show="computedTime" @click.prevent="getCode">还剩{{computedTime}}s</span>
        </li>
        <li class="forgetpwd">
          <p class="forgetpwd_text">忘记密码？</p>
        </li>
      </ul>
      <!-- 登录按钮-->
      <div class="login_btn">
        <div class="btn_text" @click="login">登录</div>
      </div>
    </div>
    <div class="partner_web">
      <div class="partner_web_title">
        <span>合作网站登录</span>
      </div>
      <div class="partner_web_icon">
        <a href="javascript:;" class="login_icon">
          <img src="./images/zhi.png" alt="">
        </a>
        <a href="javascript:;" class="login_icon">
          <img src="./images/QQ.png" alt="">
        </a>
      </div>
    </div>
    <!-- 通过标签属性传递给子组件数据，并绑定子组件分发的事件的监听 -->
    <alert-tip v-if="alertShow" :alertText="alertText" @click="closeTip"></alert-tip>
  </div>
</template>

<script>
  import {setLoading} from '../../common/mixins'
  import {commonLogin,sendCode,codeLogin} from '../../api'
  import AlertTip from '../../components/AlertTip/AlertTip.vue'
  export default{
    mixins:[setLoading],
    data(){
      return {
        // showLoginWay用来初始化向上白色箭头的指向是普通登录，同时控制普通登录或者手机登录的页面
        showLoginWay: 1,   // 1表示普通登录
        name: '',  // 用户名
        pwd: '',   // 密码
        phone: '', // 手机号
        code:  '',  // 手机验证码
        captcha: '',  // 图片验证码
        computedTime:0,  // 获取验证码剩余时间
        alertShow: false,  // 默认不显示提示框
        alertText: ''   // 提示框的文本内容
      }
    },
    computed: {
      rightPhone(){
        // 用正则初步验证用户输入的手机号
        return /^1\d{10}$/.test(this.phone)
      }
    },
    methods: {
      //1、 点击tab切换显示登录方式
     loginWay(type){
        this.showLoginWay = type
     },
      // 2、异点击获取手机验证码
      async getCode(){
        if(this.rightPhone){
          this.computedTime = 60
          this.intervalId = setInterval(()=>{
            this.computedTime --
            if(this.computedTime === 0){
              clearInterval(this.intervalId)
            }
          },1000)
        }
        // 向手机发送验证码
        let result = await sendCode
        if(result.code=== 1){  // 请求失败
          clearInterval(this.intervalId)  // 清除定时器
          this.alertShow = true
          this.alertText = result.msg
        }
      },
     //  点击切换图片验证码
      getCaptcha(event){
        event.target.src = 'http://localhost:3000/captcha?time=' + new Date()
      },
      //  3、登录
      async login (){
        let result
        if(this.showLoginWay){  // 如果是手机登录
          let{rightPhone,phone,code, captcha} = this
            // 表单验证
          if(!rightPhone){
            this.alertShow = true
            this.alertText = '请输入正确的手机号'
            return
          }else if(!/^\d{6}$/.test(code)){
            this.alertShow = true
            this.alertText = '请输入正确的动态码'
            return
          }else if(!captcha){
            this.alertShow = true
            this.alertText = '请输入正确的验证码'
            return
          }
          // 提交登录请求
          result = await codeLogin({phone,code, captcha})

        }else{ // 密码登录
          const {name,pwd} = this
          if(!name){
            this.alertShow = true
            this.alertText = '请输入用户名'
            return
          }else if(!pwd){
            this.alertShow = true
            this.alertText = '请输入密码'
            return
          }
         　// 提交登录请求
          result = await commonLogin ({name,pwd})
        }
        // 处理返回
        if(result.code === 0){
          // 得到用户信息
          const userInfo = result.data
          //保存到state中
          thid.$store.dispatch('recordUserInfo',{userInfo})
          this.$router.push('/home')
        }else{
          this.alertShow = true
          this.alertText = result.msg
        }
      },

      // 4、关闭提示框
      closeTip(){
        this.alertShow = false
      }
    },
    components:{
      AlertTip
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .person
    width 100%
    height 100%
    position relative
    .person_header
      position fixed
      top 0
      z-index 100
      width 100%
      padding 0 10px
      line-height 40px
      box-sizing border-box
      background-size
      height 50px
      display flex
      justify-content space-between
      .iconfont
        font-size 22px
        color #fff
      .register
        display block
        color #fff
    .login_way
      background url('./images/bj.png')
      background-repeat no-repeat
      background-size 100% 100%
      width 100%
      height 200px
      display flex
      justify-content space-around
      align-items flex-end
      .btn_wrap
        width 100%
        display flex
        justify-content space-around
        padding-top 10px
        background rgba(200,200,200,.3)
        font-size 14px
        color #fff
        .icon_span
          display block
          text-align center
          margin-top 10px
          line-height 0
          .iconfont
            font-size 18px
            color #fff




    .login_wrap
      width 100%
      box-sizing border-box
      padding 0 20px
      .login_container
        width 100%
        .commen_li
          width 100%
          line-height 50px
          font-size 14px
          border-bottom 1px solid #ddd
          color #ddd
          position relative
          >input::-webkit-input-placeholder
            color #ddd
          .commen_input
            outline none
          .getimg
            position absolute
          .getcode
            margin-left 50px
            padding  3px
            border 1px solid #ddd

        .forgetpwd
          width 100%
          box-sizing border-box
          padding 10px 10px
          text-align right
          .forgetpwd_text
            padding-right 20px
            font-size 22px
            color #999



      .login_btn
          width 100%
          .btn_text
            line-height 50px
            color #fff
            font-size 18px
            text-align center
            background #2ec975
            border-radius 8px

  .loading_img
      width 100%
      height 50px
    .partner_web
      width 100%
      position fixed
      bottom 0
      .partner_web_title
        width 100%
        text-align center
        margin-bottom 20px
        color #ddd
      .partner_web_icon
        width 100%
        text-align center
        margin-bottom 20px
        .login_icon
          &:nth-child(1)
            margin-right 20px
          >img
            width 50px



</style>
