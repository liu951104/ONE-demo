<template>
  <div class="music-detail-box">
    <div class="music-box">
      <div class="music-bg-box">
        <div class="music-top-bg" :style="{backgroundImage:'url('+ Music.cover +')'}">
        </div>
      </div>

      <h6 class="music-top-title">{{Music.title}}</h6>
      <h6 class="music-top-album">{{Music.album}}</h6>
      <h6 class="music-top-author">{{Music.author_list?Music.author_list[0].user_name:""}}</h6>
      <h1 class="music-title">{{Music.story_title}}</h1>
      <h6 class="music-author">文 / {{Music.author_list?Music.author_list[0].user_name:""}}</h6>
      <div class="music-content" v-html="Music.story"></div>
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
			Music: {},
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
    api.getMusicDetail(this.$route.query.mid).then(function(res){
      self.Music = res.data.data
      // console.log(res.data)
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
  .music-detail-box{
    background: #fff;
    height: 100%;
    width: 100%;
    padding: 0 1em;
    padding-bottom: 4vh;
    box-sizing: border-box;
    .music-box{
      padding-bottom: 20px;
      border-bottom: 1px solid #f0f0f0;
      .music-bg-box{
        width: 68vw;
        height: 68vw;
        position: relative;
        left: -1em;
        .music-top-bg{
          width: 120vw;
          height: 120vw;
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          position: absolute;
          top: -69vw;
          left: -58vw;
          border-radius: 50%;
          border: 20px solid #fff;
          box-shadow: 5px 5px 10px #f0f4f4;

        }
      }
      .music-top-title,.music-top-album,.music-top-author{
        font-size: 14px;
        color: rgba(0,0,0,0.7);
        line-height: 1.5em;
      }

      .music-title{
        font-weight: 600;
        font-size: 28px;
        line-height: 1.3em;
        text-align: center;
        padding: 0.8em 0;
        color: #111;
      }
      .sort-line{
        margin: 0 0 10px;
        width: 4em;
        border: 2px solid #111;
      }
      .music-author{
        font-size: 14px;
        margin-top: 3em;
        margin-bottom: 2.1em;
        text-align: center;
      }
      .music-content{
        margin-top: 0.8em;
        line-height: 1.3;
        p{
          font-family: sans-serif;
          font-size: 18px;
          line-height: 28px;
          text-align: justify;
        }
        img{
          width: 100%;
        }
      }
    }
  }
</style>
