<template lang="html">
  <div class="download">
    <div class="btn" @click="btn()">
      <img alt="「ONE · 一个」" class="one-image-exclude logo-img" src="http://image.wufazhuce.com/app_download.png">
      <h5 class="download-text">仅供学习，了解更多请下载「一个」APP</h5>
    </div>

  </div>
</template>
<script>
  export default {
    methods:{
      btn(){
        location.href = 'http://www.wandoujia.com/apps/one.hh.oneclient'
      }
    }
  }
</script>
<style lang="scss">
  .download{
    height: 10em;
    width: 100%;
    font-size: 16px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    .btn{
      img{
        width: 5em;
      }
      .download-text{
        padding-top: 5px;
        font-size: 14px;
      }
    }
  }
</style>
