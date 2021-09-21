<template>
    <div id="wx-header">
        <div class="other">
            <span class="iconfont icon-tips-jia" v-show="$route.path ==='/home'" @click="headerMenu()"></span>
        <ul class="tips-menu" :class="[$store.state.tipsStatus?'tips-open':'tips-close']">
            <li>
                <span class="iconfont icon-tips-xiaoxi"></span>
                <div>发起群聊</div>
            </li>
            <li>
                <span class="iconfont icon-tips-add-friend"></span>
                <div>添加好友</div>
            </li>
            <li>
                <span class="iconfont icon-tips-saoyisao"></span>
                <div>扫一扫</div>
            </li>
            <li>
                <span class="iconfont icon-tips-fukuan"></span>
                <div>收付款</div>
            </li>
        </ul>
        </div>
        <div class="center">
            <span>{{$store.state.currentPageName}}</span>
        </div>

    </div>
</template>
<script>
export default {
    
    methods: {
        headerMenu(){
        this.$store.commit("toggleTipsStatus")
        }
    },
}
</script>
<style>
@import "../assets/css/wx-header.css";
</style>