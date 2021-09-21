<template>
    <div class="wechat">
      <ul class="wechat-list">
      <con-item 
      v-for="con_obj in $store.state.contact" 
      class="list-row line-bottom" 
      :citem="con_obj" 
      :key="con_obj.id"></con-item>
      </ul>
    </div>
    
</template>
<style type="text/css">
@import "../assets/css/contact.css";
</style>
<script>
import conItem from "../components/con-item.vue"
import contact from "../store/contact.js"
export default {
  data() {
    return {
      contact,
    }
  },
  components:{
  conItem,
  },
  mounted() {
    this.$store.state.currentPageName ="通讯录"
  },
 
}
</script>
