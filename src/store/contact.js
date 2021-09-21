const contacts = [
    {
        id:1,
        wxid:"wxid_Tom",
        initial:"1",
        por_url:require('../assets/images/header01.png'),
        nickname:"Tom",
        gender:"1",
        remark:"Tom",
        signature:"努力",
        cellphone:139139000000,
        alhum:[
            {
            img_src:"",
            }
        ],
        area:["中国","江苏","南京"],
        desc:{
            title:"",
            pic_url:""
        }
    },{
        id:2,
        wxid:"wxid_Jerry",
        initial:"1",
        por_url:require('../assets/images/header02.png'),
        nickname:"Joker",
        gender:"1",
        remark:"Jerry",
        signature:"加油",
        cellphone:139139000000,
        alhum:[//相册
            {
            img_src:require('../assets/images/header01.png'),
            },
            {
            img_src:require('../assets/images/header02.png'),
            }
        ],
        area:["中国","江苏","南京"],
        desc:{
            title:"",
            pic_url:""
        }
    }
];



const contact ={
    contacts,
  
}
contact.get_user_info = function(wxid){
    if(!wxid)
    {
        return "空";
    }else{
        for(var c in contacts){
            if(contacts[c].wxid === wxid){
                return contacts[c];
            }
        }
    }
    return "error";
}

export default contact;