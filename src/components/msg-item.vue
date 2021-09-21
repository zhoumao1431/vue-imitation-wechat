<template>
  <li :class="{'item-hide':deleteMsg}" >
    <router-link  :to="{path:'/dialogue',query:{mid:id,type:item.type,name:item.group_name||(item.users[0].nickname||item.users[0].remark)}}" 
    tag="div" class="list-info" v-swipe>
      <div class="header-box">
        <i class="new-msg-count"  
        v-show="!quiet && !this.item.read">
          {{item.msg.length}}
        </i>
        <i class="new-msg-dot" 
        v-show="quiet && !read">免打扰</i>
        <div
          class="header"
          :class="[item.type == 'group' ? 'multi-header' : '']">
          <img
            v-for="(user, index) in item.users"
            :src="user.por_url"
            :key="index"
          />
        </div>
      </div>
      <div class="desc-box">
        <div class="desc-time">
          {{ item.msg[item.msg.length - 1].date | formatDate }}
        </div>
        <div class="desc-author" 
        v-if="item.type == 'group'">
          {{ item.group_name }}
        </div>
        <div class="desc-author" v-else>
          {{ item.users[0].remark || item.users[0].nickname }}
        </div>
        <div class="desc-msg">
          <div class="desc-mute iconfont icon-mute"  
          v-show="quiet"></div>
          <span v-show="item.type == 'group'">
            {{ item.msg[item.msg.length - 1].name }}
          </span>
          <span>
            {{ item.msg[item.msg.length - 1].text }}
          </span>
        </div>
      </div>
    </router-link>
    <div class="operate-box">
        <div v-if="!read" class="operate-read" 
        @click=" toggleRead()">{{showTag}}</div>
        <div v-else class="operate-unread" 
        @click=" toggleRead()">{{showTag}}</div>
        <div class="operate-del" @click="delMsg()">删除</div>
    </div>
  </li>
</template>
<script>
export default {
  props: ["item"],
  data() {
    return {
      read: this.item.read,
      quiet: this.item.quiet,
      deleteMsg:false,
      id:this.item.mid,
    };
  },
 
  methods: {

    toggleRead(){
      //this.read = !this.read;
    this.$store.commit("changeCount",this.id);//改变$store中new-msg-count
    this.$store.commit("readNewMsgCount");  
    
    },
    delMsg(){
      this.deleteMsg = true;
      this.$store.commit("changeDelMsg",this.id);  
      this.$store.commit("readNewMsgCount");
    },
  },
  computed: {
      showTag:function(){
        let result;
          if (!this.item.read) {
            result = "标记已读";
          }else{
             result = "标记未读";
          }
          return result;
      }
  },
  directives: {
    swipe: {
      bind: function (element) {
        var start_touch_x, start_touch_y, is_touchmove;
        //触屏开始
        element.addEventListener("touchstart", function (event) {
            start_touch_x = event.touches[0].clientX;
            start_touch_y = event.touches[0].clientY;
            is_touchmove = false;
        });
        //触屏滑动
        element.addEventListener("touchmove", function (event) {
            event.preventDefault();
            var end_touch_x, end_touch_y,distance_x,distance_y;
            end_touch_x = event.changedTouches[0].clientX;
            end_touch_y = event.changedTouches[0].clientY;

            distance_x = start_touch_x - end_touch_x;
            distance_y = start_touch_y - end_touch_y;
            
            if (Math.abs(distance_x) > Math.abs(distance_y)) {//横向滑屏
                if (distance_x < 0) {//右滑
                //恢复列表初始状态
                    if (Math.abs(distance_x)>20) {
                        element.style.transition = "1s";
                        element.style.marginLeft = "0px";
                    } 
                }else{//左滑
                //滑动的主要逻辑
                 if (Math.abs(distance_x) >= 90 ) {
                        element.style.transition = "1s";
                        element.style.marginLeft = "-156px";
                    }else if(Math.abs(distance_x)>0 && Math.abs(distance_x)<156){
                        element.style.transition = "0.5s";
                        element.style.marginLeft = -distance_x+"px";
                    }
                }

            }else{//纵向滑屏
                return;
            }
            is_touchmove = true;
        },{passive:false});
        //触屏结束
        element.addEventListener("touchend", function (event) {
            let end_touch_x, end_touch_y,distance_x,distance_y;
            
            end_touch_x = event.changedTouches[0].clientX;
            end_touch_y = event.changedTouches[0].clientY;

            distance_x = start_touch_x - end_touch_x;
            distance_y = start_touch_y - end_touch_y;

            if (!is_touchmove) {
                return;
            };
             if (Math.abs(distance_x) > Math.abs(distance_y)) {
                if (Math.abs(distance_x) < 90) {
                  element.style.transition = "1s";
                  element.style.marginLeft = "0px";
                }
                
             }else{//纵向滑屏
                
              
             };
            
        });
      },
    },
  },
  filters: {
    formatDate(value) {
      var result = "";
      var date = new Date(value);
      var year = date.getFullYear();
      var month = date.getMonth();
      var day = date.getDate();
      var hour = date.getHours();
      if (hour < 10) {
        hour = "0" + hour;
      }

      var minutes = date.getMinutes();
      if (minutes) {
        minutes = "0" + minutes;
      }
      var second = date.getSeconds();
      result = month + "月" + day + "日";
      return result;
    },
  },
};
</script>