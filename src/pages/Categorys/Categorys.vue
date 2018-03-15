<template>
  <div class="categorys">
    <div class="categorys_header bottom-border-1px">
      <div class="categorys_list">
        <a href="javascript:;" class="categorys_text">分类</a>
      </div>
      <div class="pinpai">
        <a href="javascript:;" class="pinpai_text">品牌</a>
        <a> <i class="iconfont icon-search"></i> </a>
      </div>
    </div>
    <div class="categorys_content"></div>
  </div>
</template>

<script>
  export default{}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .categorys
    width 100%
    height 100%
    position relative
    background #f5f5f5
    .categorys_header
      bottom-border-1px(#999)
      position absolute
      top 0
      left 0
      right 0
      padding 10px 15px
      display flex
      justify-content space-between
      background #fff
      .categorys_list
        width 50%
        text-align right
        padding-right 10px
        .categorys_text
          color black
          font-size 16px
      .pinpai
        display flex
        justify-content space-between
        align-items flex-end
        padding-left 10px
        width 50%
        text-align left
        .pinpai_text
          color black
          font-size 16px


</style>
