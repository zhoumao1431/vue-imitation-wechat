<template>
    <div class="dialogue">
        <header id="wx-header">
            <div class="other">
                    <span class="iconfont icon-chat-group" v-show="$route.query.type == 'group'"></span>
                    <span class="iconfont icon-chat-friends" v-show="$route.query.type == 'friend'"></span>
            </div>
            <div class="center">
                <router-link to="/home" tag="div" class="iconfont icon-return-arrow">
                <span>微信</span>
                </router-link>
                    <span>
                        {{$route.query.name}}
                    </span>
                    <span v-show="$route.query.type == 'group'" class="parentheses">
                        {{presonNumber}}
                    </span>
                   
            </div>
        </header>
        <section class="dialogue-section clearfix" @click="MenuOutsideClick">
            <div v-for="(chat,i) in chatsInfo" :key="i" class="row clearfix">
                <img :src="chat.por_url" alt="" class="header">
                <p class="text" v-more>
                {{chat.text}}
                </p>
            </div>
        <span class="msg-more" id="msg-more">
        <ul>
          <li>复制</li>
          <li>转发</li>
          <li>收藏</li>
          <li>删除</li>
        </ul>
      </span>
        </section>
        <footer class="dialogue-footer">
            <div class="component-dialogue-bar-person">

                <span class="iconfont icon-dialogue-jianpan" v-show="!currentChatWay" @click="currentChatWay=true">
                </span>
              
                <span class="iconfont icon-dialogue-voice" v-show="currentChatWay" @click="currentChatWay =false">
                </span>  
                <div class="chat-way" v-show="!currentChatWay">
                    <div class="chat-say" v-press>
                        <span class="one">按住说话</span>
                        <span class="two">松开 结束</span>
                    </div>

                </div>
                <div class="chat-way" v-show="currentChatWay">
                    <input type="text" class="chat-txt" @focus="focusIpt"
                    @blur="blurIpt">
                </div>
                <span class="expression iconfont icon-dialogue-smile"></span>
                <span class="more iconfont icon-dialogue-jia"></span>
            <div class="recording" style="display: none" id="recording">
                <div
                    class="recording-voice"
                    style="display: none"
                    id="recording-voice">
                    <div class="voice-inner">
                    <div class="voice-icon"></div>
                    <div class="voice-volume">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    </div>
                    <p>手指上划,取消发送</p>
                </div>
                <div class="recording-cancel" style="display: none">
                    <div class="cancel-inner"></div>
                        <p>松开手指,取消发送</p>
                </div>
            </div>
            </div>
        </footer>
    </div>
</template>
<style>
@import "../assets/css/dialogue.css";
</style>
<script>
export default {
    data() {
        return {
            currentChatWay:true,
        }
    },
    mounted() {
      this.$store.commit("readNewMsgCount");  
    },
    computed:{
        presonNumber(){
            let result,index;
             for (const i in this.$store.state.msg_list.msgs) {
                if (this.$store.state.msg_list.msgs[i].mid == this.$route.query.mid) {
                    index = i;
                 }; 
            }
            result =  this.$store.state.msg_list.msgs[index].users.length;
            return result;
        },
        chatsInfo(){
             let result,index;
              for (const i in this.$store.state.msg_list.msgs) {
                if (this.$store.state.msg_list.msgs[i].mid == this.$route.query.mid) {
                    index = i;
                    this.$store.state.msg_list.msgs[i].read = true;
                 }; 
            }
            result =  this.$store.state.msg_list.msgs[index].msg;
            return result;
        }
    },
directives: {
        press: {
            inserted(element) {
            var recording = document.querySelector(".recording"),
            recordingVoice = document.querySelector(".recording-voice"),
            recordingCancel = document.querySelector(".recording-cancel"),
            startTy;

            element.addEventListener(
            "touchstart",
            function (e) {
                // 用bind时，vue还没插入到dom,故dom获取为 undefine，用 inserted 代替 bind,也可以开个0秒的定时器
                element.className = "chat-say say-active";
                recording.style.display = recordingVoice.style.display = "block";
                var touches = e.touches[0];
                startTy = touches.clientY;
                e.preventDefault();
            },
            false
            );
            element.addEventListener(
            "touchend",
            function (e) {
                element.className = "chat-say";
                recordingCancel.style.display =
                recording.style.display =
                recordingVoice.style.display =
                "none";
                e.preventDefault();
            },
            false
            );
            element.addEventListener(
            "touchmove",
            function (e) {
                var touches = e.changedTouches[0],
                endTy = touches.clientY,
                distanceY = startTy - endTy;

                if (distanceY > 50) {
                element.className = "chat-say";
                recordingVoice.style.display = "none";
                recordingCancel.style.display = "block";
                } else {
                element.className = "chat-say say-active";
                recordingVoice.style.display = "block";
                recordingCancel.style.display = "none";
                }
                // 阻断事件冒泡 防止页面被一同向上滑动
                e.preventDefault();
            },
            false
            );
      },
    },
    more: {
      bind(element) {
        var startTx, startTy;
        element.addEventListener(
          "touchstart",
          function (e) {
            var msgMore = document.getElementById("msg-more"),
              touches = e.touches[0];
            startTx = touches.clientX;
            startTy = touches.clientY;

            clearTimeout(this.timer);
            this.timer = setTimeout(() => {
              // 控制菜单的位置
              msgMore.style.left =
                (startTx - 18 > 180 ? 180 : startTx - 18) + "px";
              msgMore.style.top = element.offsetTop - 33 + "px";
              msgMore.style.display = "block";
              element.style.backgroundColor = "#e5e5e5";
            }, 500);
          },
          false
        );
        element.addEventListener(
          "touchmove",
          function (e) {
            var touches = e.changedTouches[0],
              disY = touches.clientY;
            if (Math.abs(disY - startTy) > 10) {
              clearTimeout(this.timer);
            }
          },
          false
        );
        element.addEventListener(
          "touchend",
          function () {
            clearTimeout(this.timer);
          },
          false
        );
      },
    },
  },
  methods: {
    // 解决输入法被激活时 底部输入框被遮住问题
    focusIpt() {
      this.timer = setInterval(function () {
        document.body.scrollTop = document.body.scrollHeight;
      }, 100);
    },
    blurIpt() {
      clearInterval(this.timer);
    },
    // 点击空白区域，菜单被隐藏
    MenuOutsideClick(e) {
      var container = document.querySelectorAll(".text"),
        msgMore = document.getElementById("msg-more");
      if (e.target.className !== "text") {
        msgMore.style.display = "none";
        container.forEach((item) => (item.style.backgroundColor = "#fff"));
      }
    },
  },
}
</script>