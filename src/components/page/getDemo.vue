<template>
  <div class="">
    <my-canvas :info="msg"></my-canvas> 
  </div>
</template>

<script>
import myCanvas from '../common/canvas'
export default {
  data() {
		return {
      msg:{
        userName:"流了颗星哈哈哈哈",
        liveName:"周杰伦世界巡回演唱会",
        topicName:"窗外的麻雀，在电线杆上多嘴，你说这一句，很有夏天的感觉",
        startTime:'2017-06-01',
        speaker:'周杰伦',
        remark:'窗外的麻雀，在电线杆上多嘴，你说这一句，很有夏天的感觉',
        font:'"苹方 常规","微软雅黑"',
        qrcodeImg : 'http://img.xingxio.com/test/u/content/res/9/201704/21114323qsjo.jpg',
        userImg : 'http://img.xingxio.com/test/wx/content/img/201704/14200501ietx.jpg',
        image : 'https://m.qlchat.com/api/wechat/image-proxy?url=https%3A%2F%2Fimg.qlchat.com%2FqlLive%2FadminImg%2FH7J8YHYD-5WQR-IF6C-1494218726230-Z1DIEBX3PB9A.jpg'
      }
      
		}
	},
  components: {
    myCanvas
  }
}
</script>

<style lang="scss" scoped>
*{
  box-sizing:border-box;
}

</style>
