<template>
  <div id="app">
    <welcome></welcome>
    <!-- 页眉 -->
      <div class="outter">
        <header class="app-header" :class="{'header-hide':$store.state.headerStatus}">

          <wx-header></wx-header>

        </header>
        <my-search v-show="$route.path ==='/home'"></my-search>

        <section class="app-content">
          <router-view/>
         </section>

        <footer class="app-footer">
          <wx-nav></wx-nav>
        </footer>

    </div>
    <router-view name="subpage" class="sub-page"></router-view>
  </div>
</template>
<script>
import welcome from "./components/welcome.vue"
import wxHeader from "./components/wx-header.vue"
import mySearch from "./components/search.vue"
import wxNav from "./components/wx-nav.vue"
export default {

  components:{
  welcome,
  wxHeader,
  wxNav,
  mySearch,
  }
}
</script>
<style>
@import "./assets/css/base.css";
@import "./assets/css/common.css";
@import "./assets/css/lib/iconfont.css";
@import "./assets/css/lib/weui.min.css";
</style>

