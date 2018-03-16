<template>
  <div class="cart">
    <header class="cart_header_wrap">
      <div class="cart_header">
        <a href="javascript:;" class="link_wrap">
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
    .cart_wrap
      width 100%
      background #fff
      text-align center
      .cart_content
        padding 100px 0
        margin 0 auto
        .icon_span
          .iconfont
            font-size 100px
            color #ddd
        .cart_count
          display block
          color #ddd
          margin 15px 0
        .btn
          border 1px solid #ddd
          padding 10px 10px
          background #fff
          font-size 22px
          color #999
</style>
