<template>
    <div id="search" :class="{'search-open':$store.state.headerStatus}">
        <div class="weui-search-bar" 
            id="search_bar"
            :class="{'weui-search-bar_focusing':$store.state.headerStatus}"
        >
        <form  class="weui-search-bar__form"> 
            <div class="weui-search-bar__box">
                    <i class="weui-icon-search"></i>
                    <input 
                    type="search"
                    placeholder="搜索" 
                    class="weui-search-bar__input" 
                    v-model="searchContent"
                    @focus="toggleHeader()">
                    <a class="weui-icon-clear" @click="clearSearch()"></a>
            </div>
        </form>
        <a class="weui-search-bar__cancel-btn" id="search_cancel" @click="toggleHeader()">取消</a>
      </div>
        <article>
            <h3 class="weui-media-bow__desc">搜索指定内容</h3>
            <div class="tag">
                <span>朋友圈</span>
                <span>文章</span>
                <span>公众号</span>
                <span>小说</span>
                <span>音乐</span>
                <span>表情</span>
            </div>
            <div class="weui-cells">
                <a class="weui-cell weui-cell_access" href="#">
                    <div class="weui-cell__hd">
                        <img src="../assets/images/book.png" alt="" />
                    </div>
                    <div class="weui-cell__bd">
                        <p>朋友圈热文</p>

                    </div>
                    <div class="weui-cell__ft">
                    </div>
                </a>

            </div>
        </article>
    </div>
</template>
<script>
export default {
    data() {
        return {
            searchContent:"",
        }
    },
    methods: {
        clearSearch:function(){
            this.searchContent = "";
        },
        // 关闭页眉
        toggleHeader:function(){
           this.$store.commit("toggleHeaderStatus")
        }, 
    },
}
</script>
<style>
@import "../assets/css/search.css";
</style>