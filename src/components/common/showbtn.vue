<template>
  <div class="box">
    <h2 @click="btnShow">点击</h2>
    <div class="mask" @click="btnmask" v-show="showImg">
      <img src="http://image.wufazhuce.com/FgGusVeq-QydgH0FxHy57O8wdkFk" alt="" v-show="showImg">
    </div>

  </div>
</template>

<script>
export default {
  data(){
    return {
      show:false
    }
  },
  props: {
		showImg: {
			type: Boolean,
			default: false
		}
	},
  methods:{
    btnmask:function(){
      console.log(this.showImg)
      this.showImg = false;
    },
    btnShow:function(){
      this.$emit('btnShow');
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
      z-index: 999;
    }
    div.mask{
      position: fixed;
      top:0;
      left:0;
      width: 100vw;
      height: 100vh;
      background: rgba(0,0,0,0.4);
      display: flex;
      justify-content: center;
      align-items: center;
      img{
        width: 60vw;
        height: auto;
      }
    }
  }
</style>
