<template>
  <div class="">
    <img src="" alt="" id="res">
    <div id="img-box"></div>
  </div>
</template>

<script>
export default {
  data() {
		return {
			clientWidth:document.body.clientWidth
		}
	},
  mounted(){
    // this.scroller = this.$el;
    this.canvasFun()
    console.log(this.info)
  },
  props:{
    info:{
      type:Object
    }
  },
  methods: {
    canvasFun:function(){
      let self = this;

      let image = new Image();
      let userImg = new Image();
      let qrcodeImg = new Image();

      image.setAttribute('crossOrigin', 'anonymous');
      userImg.setAttribute('crossOrigin', 'anonymous');
      qrcodeImg.setAttribute('crossOrigin', 'anonymous');
      qrcodeImg.src = this.info.qrcodeImg;
      userImg.src = this.info.userImg;
      image.src = this.info.image;

      image.onload = function(){
        var canvas = document.createElement('canvas');
        var imgW = image.width;
        var imgH = image.height;
        //图片宽高比
        var prop = imgW/imgH;
        
        // image.height = 375/prop;
        
        bgImg(640,imgW,imgH,canvas,image)

        window.onresize = function(){
            var clientW = document.body.clientWidth;
            clientW > imgW ? clientW = imgW : clientW = clientW;
            console.log(clientW)
            document.getElementById("res").width = clientW;
            // bgImg(document.body.clientWidth,imgW,imgH,canvas,image)
        }
       
        
        // consolcanvas.log(canvas.toDataURL("image/png"))
        //插入
        var imgBox = document.getElementById("img-box");
        var res = document.getElementById("res");
        res.src = canvas.toDataURL("image/png");

        res.width = document.body.clientWidth;
        
        // imgBox.appendChild(canvas);
        return canvas
      }

      function bgImg(clientW,imgW,imgH,canvas,image){
          var rWidth = clientW;
          var prop = imgW/imgH;
          console.log('clientW:' + document.body.clientWidth)
          // rWidth > imgW ? rWidth = imgW : rWidth = rWidth;
          console.log(rWidth)
          image.width = rWidth;

          canvas.width = rWidth;
          canvas.height = rWidth/prop;
          console.log(canvas)

          var canvasW = canvas.width;
          var ctx = canvas.getContext('2d');
          ctx.drawImage(image,0,0,rWidth,rWidth/prop);

          userCanvas(ctx,userImg,640,640);
      }
      

      function userCanvas(ctx,userImg,canvasW,bgW){
        
          let prop = canvasW/bgW;
          console.log(ctx)
          ctx.save();
          ctx.arc(canvasW / 2, 177, 40, 0, 2 * Math.PI);
          ctx.strokeStyle = "#ffffff";
          ctx.lineWidth = 10;
          ctx.stroke();
          ctx.clip();
          ctx.drawImage(userImg, canvasW / 2 - 40, 137, 80, 80);
          console.log(userImg, canvasW / 2 - 40, 137, 80, 80)
          ctx.restore();

          console.log(self.info.font)
          ctx.textAlign = "center";
          ctx.font = 24 + "px " + self.info.font;
          ctx.fillStyle = "#4D4D4D";
          ctx.fillText(self.info.userName.slice(0, 30), canvasW / 2, 254);
          ctx.font = 20 + "px " + self.info.font;
          ctx.fillStyle = "#999999";
          ctx.fillText("来呀来呀", canvasW / 2, 284);
          ctx.font = 22 + "px " + self.info.font;
          ctx.fillStyle = "#666666";

          var liveName = self.info.liveName;
          liveName.length > 12 && (liveName = liveName.slice(0, 12), liveName += "..."),
          ctx.fillText(liveName, canvasW / 2, 355),
          ctx.font = 22 + "px " + self.info.font,
          ctx.fillStyle = "#4D4D4D";

          var topicName = self.info.topicName;
          topicName.length > 24 && (topicName = topicName.slice(0, 24), topicName += "..."),
          topicName.length > 12 && (topicName = topicName.slice(0, 12) + " " + topicName.slice(12)),
          self.r(ctx,topicName, canvasW / 2, 430, 431, 25),
          ctx.font = "bold 20px " + self.info.font,
          ctx.fillStyle = "#999999";               
          
          var h = canvasW / 2 - 73;
          h = 0 > h ? 0 : h;
          ctx.drawImage(qrcodeImg, h, 888, 146, 146);

      }

    },
    // bgImg(clientW,imgW,imgH,canvas,image){
    //   let self = this;
    //   var rWidth = clientW;
    //   var prop = imgW/imgH;
    //   console.log('clientW:' + document.body.clientWidth)
    //   // rWidth > imgW ? rWidth = imgW : rWidth = rWidth;
    //   console.log(rWidth)
    //   image.width = rWidth;

    //   canvas.width = rWidth;
    //   canvas.height = rWidth/prop;
    //   console.log(canvas)

    //   var canvasW = canvas.width;
    //   var ctx = canvas.getContext('2d');
    //   ctx.drawImage(image,0,0,rWidth,rWidth/prop);

    //   self.userCanvas(ctx,self.userImg,640,640);
    // },
    // userCanvas(ctx,userImg,canvasW,bgW){
    //   let self = this;
    //   let prop = canvasW/bgW;
    //   console.log(ctx)
    //   ctx.save();
    //   ctx.arc(canvasW / 2, 177, 40, 0, 2 * Math.PI);
    //   ctx.strokeStyle = "#ffffff";
    //   ctx.lineWidth = 10;
    //   ctx.stroke();
    //   ctx.clip();
    //   ctx.drawImage(userImg, canvasW / 2 - 40, 137, 80, 80);
    //   // console.log(userImg, canvasW / 2 - 40, 137, 80, 80)
    //   ctx.restore();

    //   ctx.textAlign = "center";
    //   ctx.font = 24 + "px " + self.font;
    //   ctx.fillStyle = "#4D4D4D";
    //   ctx.fillText(self.userName.slice(0, 30), canvasW / 2, 254);
    //   ctx.font = 20 + "px " + self.font;
    //   ctx.fillStyle = "#999999";
    //   ctx.fillText("来呀来呀", canvasW / 2, 284);
    //   ctx.font = 22 + "px " + self.font;
    //   ctx.fillStyle = "#666666";

    //   var liveName = self.liveName;
    //   liveName.length > 12 && (liveName = liveName.slice(0, 12), liveName += "..."),
    //   ctx.fillText(liveName, canvasW / 2, 355),
    //   ctx.font = 22 + "px " + self.font,
    //   ctx.fillStyle = "#4D4D4D";

    //   var topicName = self.topicName;
    //   topicName.length > 24 && (topicName = topicName.slice(0, 24), topicName += "..."),
    //   topicName.length > 12 && (topicName = topicName.slice(0, 12) + " " + topicName.slice(12)),
    //   self.r(ctx,topicName, canvasW / 2, 430, 431, 55),
    //   ctx.font = "bold 20px " + self.font,
    //   ctx.fillStyle = "#999999";               
      
    //   var h = canvasW / 2 - 73;
    //   h = 0 > h ? 0 : h;
    //   ctx.drawImage(self.qrcodeImg, h, 888, 146, 146);
    // },
    r(e, t, l, n, i, a) {
      for (var o = t.split(" "), r = "", s = 0; s < o.length; s++) {
          var f = r + o[s] + " ",
          c = e.measureText(f),
          d = c.width;
          d > i && s > 0 ? (e.fillText(r, l, n), r = o[s] + " ", n += a) : r = f
      }
      e.fillText(r, l, n)
    }
	}
}
</script>

<style lang="scss" scoped>
*{
  box-sizing:border-box;
}
#img-box{
    margin:0 auto;
    text-align: center;
}
</style>
