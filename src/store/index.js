import Vue from 'vue'
import Vuex, { Store } from 'vuex'
import contact from "./contact.js"

Vue.use(Vuex)

let all_users = contact.contacts;//所有用户

export default new Vuex.Store({
  state: {
    headerStatus:false,
    tipsStatus:false,
    currentPageName:"",
    newMsgCount:0,
    contact:all_users,
    msg_list:{
      top_msg:[],
      count:0,
      msgs:[
        {
          mid:1,
          type:"friend",
          group_name:"",
          group_qrcode:"",
          read:false,
          quiet:false,
          new_msg_count:3,
          delMsg:false,
          msg:[
            {
              text:"hello !",
              date:1488117964495,
              name:"Jerry",
              por_url:require('../assets/images/header02.png'),
            },
            {
              text:"Nice to meet you !",
              date:1488117964495,
              name:"Jerry",
              por_url:require('../assets/images/header02.png'),
            },
            {
              text:"在吗？",
              date:1488117964495,
              name:"Jerry",
              por_url:require('../assets/images/header02.png'),
            }
          ],
          users:[contact.get_user_info("wxid_Jerry")],
        },
        {
          mid:2,
          type:"group",
          group_name:"vue讨论区",
          group_qrcode:"",
          read:false,
          quiet:false,
          delMsg:false,
          new_msg_count:2,
          msg:[
            {
              text:"@全体成员",
              date:1488117964495,
              name:"Jerry",
              por_url:require('../assets/images/header02.png'),
            },
            {
              text:"群聊天记录2",
              date:1488117964495,
              name:"Jerry",
              por_url:require('../assets/images/header02.png'),
            },
            {
              text:"群聊天记录3",
              date:1488117964495,
              name:"Tom",
              por_url:require('../assets/images/header01.png'),
            }
          ],
          users:[contact.get_user_info("wxid_Jerry"),contact.get_user_info("wxid_Tom")]
        },
        {
          mid:3,
          type:"friend",
          group_name:"",
          group_qrcode:"",
          read:false,
          quiet:false,
          delMsg:false,
          new_msg_count:2,
          msg:[
            {
              text:"拜拜",
              date:1488117964495,
              name:"Jerry",
              por_url:require('../assets/images/header02.png'),
            },
            {
              text:"溜了溜了！",
              date:1488117964495,
              name:"Jerry",
              por_url:require('../assets/images/header02.png'),
            },
            
          ],
          users:[contact.get_user_info("wxid_Jerry")]
        },
        {
          mid:4,
          type:"friend",
          group_name:"",
          group_qrcode:"",
          read:false,
          quiet:true,
          delMsg:false,
          new_msg_count:1,
          msg:[
            {
              text:"哈哈哈!",
              date:1488117964495,
              name:"Tom",
              por_url:require('../assets/images/header01.png'),
            },
            
            
          ],
          users:[contact.get_user_info("wxid_Tom")]
        },
        {
          mid:5,
          type:"friend",
          group_name:"",
          group_qrcode:"",
          read:false,
          quiet:false,
          delMsg:false,
          new_msg_count:2,
          msg:[
            {
              text:"啊在？",
              date:1488117964495,
              name:"Jerry",
              por_url:require('../assets/images/header02.png'),
            },
            {
              text:"嗯",
              date:1488117964495,
              name:"Jerry",
              por_url:require('../assets/images/header02.png'),
            },
            
          ],
          users:[contact.get_user_info("wxid_Jerry")]
        },
      ]
    }
  },
  mutations: {
    changeCount(state,id) 
    {
      for (const i in state.msg_list.msgs) {
        if (state.msg_list.msgs[i].mid === id) {
          state.msg_list.msgs[i].read = !state.msg_list.msgs[i].read;
        }
        
      }
    },

    toggleTipsStatus(state){
      state.tipsStatus = !state.tipsStatus;
    },
    changeDelMsg(state,id){
      for (const i in state.msg_list.msgs) {
        if (state.msg_list.msgs[i].mid === id) {
          state.msg_list.msgs[i].delMsg = true;
          
        }
      }
    },

    readNewMsgCount(state){
      state.newMsgCount = 0;
      for (const i in state.msg_list.msgs) {
        if (!state.msg_list.msgs[i].read&&!state.msg_list.msgs[i].delMsg) {
            state.newMsgCount += state.msg_list.msgs[i].msg.length;
        }
      }
    },
    toggleHeaderStatus(state){
      state.headerStatus =  !state.headerStatus;
    }

    
  },
  actions: {
  },
  modules: {
  },
  getters:{
      
    }
   
})
