<template>
    <div class="home">
     发现页面
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
    this.$store.state.currentPageName ="发现"
  },
}
</script>