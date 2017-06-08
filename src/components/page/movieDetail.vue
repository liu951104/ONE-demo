<template>
  <div class="movie-detail-box">
    <div class="movie-top-bg" :style="{backgroundImage:'url('+ imgUrl +')'}"></div>
    <div class="movie-box">
      <h1 class="movie-title">{{Movie.title}}</h1>
      <h4 class="movie-subtitle">——关于《{{ subtitle }}》</h4>
      <h6 class="movie-author">文 / {{Movie.author_list?Movie.author_list[0].user_name:""}}</h6>
      <div class="movie-content" v-html="Movie.content"></div>
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
			Movie: {},
      imgUrl:'',
      subtitle:'',
			open: false,
			docked: false,
      loading:true,
      flag:false,
      todayId:0,
			transitionName: 'slide-left'
		}
	},
  created(){

    if(!this.isNull(this.$store.state.movie)){
      let obj = this.$store.state.movie;
      this.imgUrl = obj.img_url;
      this.subtitle = obj.subtitle;
      sessionStorage.setItem("movie",JSON.stringify(this.$store.state.movie));
    }else{
      let obj = sessionStorage.getItem("movie");
      let jsonobj = JSON.parse(obj);
      this.imgUrl = jsonobj.img_url;
      this.subtitle = jsonobj.subtitle;
    }


    this.getDetail(this.$route.query.mid);

  },
  components: {
    footerDownload:Download
  },
  methods: {
    /**
     * 获取详情
     * @param  {Number} id item_id
     */
    getDetail:function(id){
      let self = this;
      api.getMovieDetail(id).then(function(res){
        self.Movie = res.data.data.data[0]
        self.loading = false;
      })
    },
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
  .movie-detail-box{
    background: #fff;
    height: 100%;
    width: 100%;
    .movie-top-bg{
      width: 100%;
      height: 10em;
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;

    }
    .movie-box{
      padding-bottom: 20px;
      border-bottom: 1px solid #f0f0f0;
      padding: 0 1em;
      box-sizing: border-box;
      .movie-title{
        font-weight: 600;
        font-size: 28px;
        line-height: 1.3em;
        text-align: justify;
        padding: 0.8em 0;
        color: #111;
      }
      .movie-subtitle{
        text-align: justify;
      }
      .movie-author{
        font-size: 14px;
        padding: 2em 0 2.5em;
      }
      .movie-content{
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
