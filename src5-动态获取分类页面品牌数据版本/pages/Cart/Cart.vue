<template>
  <div class="cart">
    <header class="cart_header_wrap">
      <div class="cart_header">
        <a href="javascript:;" class="link_wrap" @click="$router.back()">
          <i class="iconfont icon-fanhui"></i>
        </a>
        <a href="javascript:;" class="link_wrap">
          <span class="cart_span">购物车</span>
        </a>
        <a href="javascript:;" class="link_wrap" @click="showOrHide">
          <i class="iconfont icon-fenlei1"></i>
        </a>
      </div>
    </header>
    <transition name="slide">
      <div class="show" v-show="isShow">
        <a href="javascript:;" class="link_to">
          <span class="iconfont icon-shouye1"></span>
          <span>首页</span>
        </a>
        <a href="javascript:;" class="link_to">
          <span class="iconfont icon-dingdanguanli"></span>
          <span>商品分类</span>
        </a>
        <a href="javascript:;" class="link_to">
          <span class="iconfont icon-unie62d"></span>
          <span>购物车</span>
        </a>
        <a href="javascript:;" class="link_to">
          <span class="iconfont icon-gougou"></span>
          <span>我的E宠</span>
        </a>
      </div>
    </transition>
    <div class="cart_wrap">
      <div class="cart_content">
        <span class="icon_span">
          <i class="iconfont icon-unie62d"></i>
        </span>
        <span class="cart_count">购物车是空的</span>
        <button class="btn">去逛逛</button>
        <button class="btn">我的收藏</button>
      </div>
    </div>
  </div>
</template>

<script>

  export default{
    data(){
      return{
        isShow: false
      }
    },
    methods: {
      showOrHide(){
        this.isShow = !this.isShow
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .cart
    width 100%
    height 100%
    background #f5f5f5
    .cart_header_wrap
      bottom-border-1px(#ddd)
      width 100%
      height 50px
      position fixed
      top 0
      z-index 100
      background #fff
      .cart_header
        box-sizing border-box
        width 100%
        padding  10px
        display flex
        .link_wrap
          width 33.33333%
          color black
          display block
          .cart_span
            display block
            text-align center
          .iconfont
            display block
            font-size 30px
            &.icon-fenlei1
              text-align right
    .show
      padding-top 50px
      width 100%
      height 100px
      background #fff
      display flex
      text-align center
      align-items center
      justify-content space-around
      &.slide-enter-active
        transition all 1s ease-out
      &.slide-leave-active
        transition all 1.5s ease-out
      &.slide-enter,&.slide-leave-to
        height 0
      .link_to
        display block
        font-size 20px
        >span
          display block
          margin 5px 0
        .iconfont
          font-size 40px


    .cart_wrap
      top-border-1px(#ddd)
      width 100%
      background #fff
      text-align center
      .cart_content
        padding 80px 0
        margin 0 auto
        .icon_span
          .iconfont
            font-size 100px
            color #ddd
        .cart_count
          display block
          color #ddd
          margin 20px 0
        .btn
          border 1px solid #ddd
          margin-top 15px
          padding 10px 10px
          background #fff
          font-size 22px
          border-radius 8px
          color #999
</style>
