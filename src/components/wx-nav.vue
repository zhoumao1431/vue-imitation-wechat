<template>
    <div id="wx-nav">
        <nav>
            <dl @click="toHome()" :class="{'router-link-active':selected1}">
                <dt class="iconfont icon-wechat">
                <i class="new-msg-count" v-show="$store.state.newMsgCount>0">{{showNewMsgCount}}</i>
                </dt>
                <dd>微信</dd>
            </dl >
            <dl @click="toContact()" :class="{'router-link-active':selected2}">
                <dt class="iconfont icon-contact">
                
                </dt>
                <dd>通讯录</dd>
            </dl>
            <dl @click="toFind()" :class="{'router-link-active':selected3}">
                <dt class="iconfont icon-find">
                <i class="new-msg-dot" v-show="true"></i>
                </dt>
                <dd>发现</dd>
            </dl>
            <dl @click="toMine()" :class="{'router-link-active':selected4}">
                <dt class="iconfont icon-me">
                    
                </dt>
                <dd>我的</dd>
            </dl>
        </nav>
    </div>
</template>
<style>
@import "../assets/css/wx-nav.css";
</style>
<script>
export default {
    data() {
        return {
            selected1:true,
            selected2:false,
            selected3:false,
            selected4:false,
        }
    },
    mounted() {
        this.$store.commit("readNewMsgCount")
    },
    methods: {
       toHome:function(){
            this.selected1 = true;
            this.selected2=false,
            this.selected3=false,
            this.selected4=false,
        this.$router.push({path:'/home'});
       },
       toContact:function(){
           this.selected2 = true;
           this.selected1 = false;
            this.selected3=false,
            this.selected4=false,
           this.$router.push({path:'/contact'});
       },
       toFind:function(){
           this.selected3 = true;
           this.selected1 = false;
            this.selected2=false,
            this.selected4=false,
           this.$router.push({path:'/find'});
       },
       toMine:function(){
           this.selected4 = true;
           this.selected1 = false;
            this.selected2=false,
            this.selected3=false,

           this.$router.push({path:'/mine'});
       },
       
   },
    computed:{
        showNewMsgCount:function(){
            let result;
            if (this.$store.state.newMsgCount<=99) {
                result = this.$store.state.newMsgCount
            }else{
                result = "99+";
            }
            return result;
        }
    }
}
</script>