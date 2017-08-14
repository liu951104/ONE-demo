<template>
  <div class="box">
    <h2 @click="btnShowImg" v-show="!show">{{show?'关闭':'开启'}}</h2>
    
    <div class="img-box" @touchmove.prevent v-if="show">
      <div class="mask" @click="btnmask" v-if="show" @touchmove.prevent>      
      </div>
      <img src="http://image.wufazhuce.com/FgGusVeq-QydgH0FxHy57O8wdkFk" alt="">
    </div>
    
  </div>
</template>

<script>
export default {
  data(){
    return {
      /**
       * 创建props属性showImg的副本
       */
      show:this.showImg
    }
  },
 //  props: {
	// 	showImg: {
	// 		type: Boolean,
	// 		default: false
	// 	}
	// },
  props:['showImg'],
  watch:{
    /**
     * 监听外部对props属性showImg的变更，并同步到组件内的data属性
     * @param  {[type]} val [description]
     */
    showImg(val){
      this.show = val;
    },
    /**
     * 组件内对show变更后向外部发送事件通知
     * @param  {[type]} val [description]
     */
    show(val){
      console.log('show'+val)
      this.$emit('btnShow',val)
    }
  },
  methods:{
    btnmask:function(){
      // console.log(this.showImg)
      this.show = false;
    },
    btnShowImg:function(){
      // console.log(this.show)
      this.show = !this.show;
    }
  }
}
</script>

<style lang="scss" scoped>
  div.box{
    h2{
      background: #2a8bd0;
      width: 60px;
      height: 60px;
      line-height: 60px;
      border-radius: 50%;
      color: #fff;
      text-align: center;
      position: fixed;
      bottom:100px;
      right:30px;
      z-index: 99;
    }
    div.mask{
      position: fixed;
      top:0;
      left:0;
      width: 100vw;
      height: 100vh;      
      z-index: 992;
    }
    div.img-box{
      display: flex;
      justify-content: center;
      align-items: center;
      position: fixed;
      top:0;
      left:0;
      width: 100vw;
      height: 100vh;
      z-index:991;
      background: rgba(0,0,0,0.4);
    }
    img{
      width: 60vw;
      height: auto;
      position: relative;
      z-index:999;
    }
  }
</style>
