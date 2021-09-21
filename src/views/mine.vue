<template>
    <div class="home">
     我的页面
      <div class="foot"></div>
    </div>
    
</template>
<style>
.wechat-list{
  z-index:1;
}
.foot{
  height: 120px;
  width: 100%;
  
}

</style>
<script>
export default {
  components:{
  },
  mounted() {
    this.$store.state.currentPageName ="我的"
  },
}
</script>