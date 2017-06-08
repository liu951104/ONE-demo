<template>
  <div class="">
    <div class="music-box" v-for="(detail,index) in List" @click="toDetail(detail.item_id)">
      <h6 class="music-tag">- 音乐 -</h6>
      <h4 class="music-title">{{detail.title}}</h4>
      <h5 class="music-author">文 / {{detail.author.user_name}}</h5>
      <div class="music-content">
        <div class="music-content-cover">
          <div class="music-bg" :style="{backgroundImage:'url('+ detail.img_url +')'}">

          </div>
        </div>
      </div>
      <h6 class="audio-name">{{detail.music_name}}·{{detail.audio_author}} | {{detail.audio_album}}</h6>
      <p class="music-forward">{{detail.forward}}</p>
      <time>{{$moment(detail.post_date.replace(/\-/g,"\/")).format('YYYY/MM/DD')}}</time>
    </div>

    <!-- 加载中 -->
    <loading :loading="loading" />
  </div>
</template>

<script>
import api from '../../api/index'
export default {
  data() {
		return {
			List: [],
			open: false,
			docked: false,
      loading:true,
      flag:false,
      now:'',
      page:0,
      mId:0,
			transitionName: 'slide-left'
		}
	},
  created(){
    let self = this;
    self.getMusicList(0)
  },
  methods: {
    getMusicList:function(id){
      let self = this;
      api.getMusicList(id).then(function(res){
        // console.log(res.data.data.length - 1)
        self.mId = res.data.data[res.data.data.length - 1].id
        // console.log(self.mId)
        self.List = self.List.concat(res.data.data);
        self.loading = false;
      })
    },
    toDetail(id){
      this.$router.push({ path: 'musicDetail', query: { mid: id }})
    }
	}
}
</script>

<style lang="scss" scoped>
  .music-box{
    margin: 0 0 0.5em 0;
    background: #fff;
    box-shadow: 0 0.1rem 0 0 rgba(230, 230, 230, 0.5);
    padding: 1em 1.75em;
    .music-tag{
      color: rgba(0, 0, 0, 0.6);
      font-weight: 400;
      line-height: 1.5em;
      font-size: 14px;
      text-align: center;
      padding: 0.6em 0 0.85em 0;
    }
    .music-title{
      font-size: 22px;
      color: #111;
      line-height: 1.5em;
      text-align: justify;
    }
    .music-author{
      font-weight: 400;
      font-size: 16px;
      padding: 0.9em 0;
      text-align: left;
    }
    .music-content{
      margin: 0.5em 0;
      height: 65.5333vw;
      position: relative;
      .music-content-cover{
        position: absolute;
        left: -1.75em;
        top: 0;
        width: 80vw;
        height: 65.5333vw;
        border-radius: 0 9.9em 10em 0;
        box-shadow: 0 0 0.625em 0.125em rgba(230, 230, 230, 0.5);
        display: flex;
        display: -webkit-flex;
        align-items: center;
        justify-content: flex-end;
        padding-right: 0.3em;
        box-sizing: border-box;
        .music-bg{
          background-position: center;
          background-repeat: no-repeat;
          background-size: cover;
          width: 58.6vw;
          height: 58.6vw;
          border-radius: 50%;
          box-shadow: 1px 1px 1px #f0f4f4;
        }
      }
    }
    .audio-name{
      font-size: 12px;
      font-weight: 400;
      color: #808080;
      text-align: justify;
    }
    .music-forward{
      font-size: 14px;
      margin-top: 0.5em;
      line-height: 1.5em;
      color: rgba(0,0,0,0.6);
      text-align: justify;
    }
    time{
      font-size: 12px;
      text-align: justify;
      display: block;
      padding-top:1.5em;
      padding-bottom: 1em;
    }
  }
</style>
