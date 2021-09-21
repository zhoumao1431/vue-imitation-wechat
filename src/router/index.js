import Vue from 'vue'
import VueRouter from 'vue-router'
// import weChat from '../views/wechat.vue'
import Contact from '../views/contact.vue'
import Find from '../views/find.vue'
import Mine from '../views/mine.vue'

// 解决ElementUI导航栏中的vue-router在3.0版本以上重复点菜单报错问题
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) 
{
  return originalPush.call(this, location).catch(err => err)
}
Vue.use(VueRouter)

const routes = [
  {
    path: '*',
    redirect:'/home',
  },
  {
    path: '/home',
    name: 'home',
    component: resolve => require(["../views/wechat.vue"], resolve)

  },
  {
    path: "/dialogue",
    name: 'dialogue',
    components: {
      "default":resolve => require(["../views/wechat.vue"], resolve),
      "subpage":resolve => require(["../views/dialogue.vue"], resolve),
    }
  },
  {
    path: "/contact",
    name: 'contact',
    component: Contact

  },
  {
    path: "/find",
    name: 'find',
    component: Find

  },
  {
    path: "/mine",
    name: 'mine',
    component: Mine

  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})



export default router
