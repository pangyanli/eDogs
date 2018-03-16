<template>
  <div id="app">
    <router-view></router-view>
    <FooterGuide v-show="$route.meta.showFooter"/>
  </div>
</template>

<script>
  import FooterGuide from './components/FooterGuide/FooterGuide.vue'
  export default{
    components: {
      FooterGuide
    }
  }
</script>


<style lang="stylus" rel="stylesheet/stylus">
  html,body
    height 100%
    overflow hidden
  #app
    width 100%
    height 100%
    background #fff
    position relative
    .content
      width 100%
      height 100%
      >div
        &.on
          color lightseagreen
</style>
