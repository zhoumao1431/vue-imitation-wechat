<template>
    <div id="wechat">
      <ul class="wechat-list">
      <msg-item 
      v-for="msg_obj in $store.state.msg_list.msgs" 
      class="list-row line-bottom" 
      :item="msg_obj" 
      :key="msg_obj.mid"></msg-item>  
      </ul>
    </div>
</template>

<script>
import msgItem from "../components/msg-item.vue"
export default {
  components:{
  msgItem,
  },
  mounted() {
    this.$store.state.currentPageName ="微信"
  },
}
</script>
<style   type="text/css">
@import "../assets/css/wechat.css";
</style>