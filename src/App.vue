
<template>
  <!-- 修改应用组件的模板 -->
  <div id="app">
    <!-- 设置路由组件的视图位置 -->
    <router-view></router-view>
    <!-- 并放置非路由组件 -->
    <FooterGuider v-show="$route.meta.showFooter" ></FooterGuider>
  </div>
</template>


<script type='text/ecmascript-6'>
  import FooterGuider from './components/FooterGuide/FooterGuide.vue'
  export default {
    components: {
      FooterGuider
    }
  }
</script>

<style lang='stylus' rel='stylesheet/stylus'>
  #app
    width 100%
    height 100%
    background #f5f5f5   
</style>