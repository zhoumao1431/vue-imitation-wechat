<template>
    <div>
        <div class="welcome" :class="{hide:sign}">
            <img src="../assets/images/welcome.jpg"/>
        </div>
    </div>
</template>
<script>
export default {
  data() {
    return {
      sign:false,
    }
  },
  mounted() {
    // this.sign=true;
    setTimeout(() => {
      this.sign=true;
    }, 3000);
  },
}
</script>

<style>
.welcome{
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #010017;
  z-index: 100;
  transition: 0.5s;
  -webkit-transition: 0.5s;
  /* opacity: 0;透明 */
  /* display: none; */
  /* visibility: hidden; */
  /* animation: 动画名字  0.5s; */
}
.welcome img{
width: 100%;

}

.welcome.hide{
  opacity: 0;
  visibility:hidden;
}
</style>