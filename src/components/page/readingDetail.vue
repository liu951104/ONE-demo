<template>
  <div class="reading-detail-box">
    <div class="text-box">
      <h1 class="text-title">{{Reading.hp_title}}</h1>
      <hr class="sort-line">
      <h6 class="text-author">文 / {{Reading.author[0].user_name}}</h6>
      <div class="text-content" v-html="Reading.hp_content"></div>
    </div>

    <footer-download></footer-download>
    <!-- 加载中 -->
    <loading :loading="loading" />
  </div>
</template>

<script>
import api from '../../api/index'
import Download from '../common/download'
export default {
  data() {
		return {
			Reading: {},
			open: false,
			docked: false,
      loading:true,
      flag:false,
      todayId:0,
			transitionName: 'slide-left'
		}
	},
  created(){
    let self = this;
    console.log(this.$route)
    api.getReadingDetail(this.$route.query.id,this.$route.query.sid).then(function(res){
      console.log(res.data.data)
      self.Reading = res.data.data
      self.loading = false;
    })

  },
  components: {
    footerDownload:Download
  },
  methods: {
    /**
     * 判断对象是否为空
     */
    isNull:function(obj){
      for(var name in obj){
        return false;
      }
      return true;
    }
	}
}
</script>

<style lang="scss">
  .reading-detail-box{
    background: #fff;
    height: 100%;
    width: 100%;
    padding:0 20px 0;
    box-sizing: border-box;
    .text-box{
      padding-bottom: 20px;
      border-bottom: 1px solid #f0f0f0;
      .text-title{
        font-weight: 600;
        font-size: 28px;
        line-height: 1.3em;
        text-align: justify;
        padding: 0.8em 0;
        color: #111;
      }
      .sort-line{
        margin: 0 0 10px;
        width: 4em;
        border: 2px solid #111;
      }
      .text-author{
        margin:5px 0 15px;
        text-align: left;
        color: rgba(0,0,0,0.8);
        font-size: 14px;
        line-height: 2.3em;
      }
      .text-content{
        margin-top: 0.8em;
        line-height: 1.3;
        p{
          font-family: sans-serif;
          font-size: 18px;
          text-align: justify;
        }
        img{
          width: 100%;
        }
      }
    }
  }
</style>
