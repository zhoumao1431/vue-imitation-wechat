import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  // mounted(){
  //   Axios({
  //     type:"post",
  //     url:"http://localhost:3000"
  //   }).then(function(res,req){
  //     this.$store.state.msg_list = res.data;
  //   }).catch()
  // },
  render: h => h(App)
}).$mount('#app')
