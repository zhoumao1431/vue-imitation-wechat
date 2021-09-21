<template>
    <li>
     <router-link to="" tag="div" class="list-info">

         <div class="contact-box">
         <div class="header" >
                <img width="54px" height="54px" class="images" :src="citem.por_url" />
         </div>
        
        
         </div> 
         <div class="desc-box">
             <div class="desc-author" >
            {{citem.nickname}}
            </div>
         </div> 
     </router-link>
    </li>
</template>
<script>
export default {
    props:["citem"],
    data() {
        return {
           
        }
    },  
}
</script>
