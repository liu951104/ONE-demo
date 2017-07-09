<template>
  <div class="">
    <div class="movie-box" v-for="(detail,index) in List" @click="toDetail(detail.item_id,index)" v-if="$route.path != '/movie/movieDetail'">
      <h6 class="movie-tag">- 影视 -</h6>
      <h4 class="movie-title">{{detail.title}}</h4>
      <h5 class="movie-author">文 / {{detail.author.user_name}}</h5>
      <div class="movie-content">
        <div class="movie-content-bg" :style="{backgroundImage:'url('+ detail.img_url +')'}">
        </div>
      </div>
      <p class="movie-forward">{{detail.forward}}</p>
      <p class="movie-subtitle">——关于《{{detail.subtitle}}》</p>
      <time>{{$moment(detail.post_date.replace(/\-/g,"\/")).format('YYYY/MM/DD')}}</time>
    </div>
    <!-- 滑动加载更多组件 -->
	  <scroll-more :scroller="scroller" :loading="moreLoading" @load="loadMore" />
    <!-- 加载中 -->
    <loading :loading="loading" />

    <router-view></router-view>
  </div>
</template>

<script>
import api from '../../api/index'
import { mapState } from 'vuex'
export default {
  data() {
		return {
			List: [],
			open: false,
			docked: false,
      loading:true,
      moreLoading:false,
      scroller: null,
      flag:false,
      now:'',
      page:0,
      mId:0,
			transitionName: 'slide-left'
		}
	},
  computed: {
    ...mapState({
      movieUrl : state => state.movieUrl
    })
  },
  mounted(){
    let self = this;
    this.scroller = this.$el;

    self.getMovieList(0)
  },
  methods: {
    loadMore(){
      this.moreLoading = true;
      this.getMovieList(this.mId)
    },
    getMovieList:function(id){
      let self = this;
      api.getMovieList(id).then(function(res){
        // console.log(res.data.data.length - 1)
        self.mId = res.data.data[res.data.data.length - 1].id
        self.List = self.List.concat(res.data.data);
        self.moreLoading = false;
        self.loading = false;
      })
    },
    toDetail(id,idx){
      this.$store.commit('getmovie',this.List[idx]);
      this.$router.push({ path: '/movie/movieDetail', query: { mid: id}})
    }
	}
}
</script>

<style lang="scss" scoped>
  .movie-box{
    margin: 0 0 0.5em 0;
    background: #fff;
    box-shadow: 0 0.1rem 0 0 rgba(230, 230, 230, 0.5);
    padding: 1em 0;
    .movie-tag{
      color: rgba(0, 0, 0, 0.6);
      font-weight: 400;
      line-height: 1.5em;
      font-size: 14px;
      text-align: center;
      padding: 0.6em 0 0.85em 0;
    }
    .movie-title{
      font-size: 22px;
      padding: 0 20px;
      color: #111;
      line-height: 1.5em;
      text-align: justify;
    }
    .movie-author{
      font-weight: 400;
      font-size: 16px;
      padding: 0.9em 20px;
      text-align: left;
    }
    .movie-content{
      margin: 0.5em 0;
      height: 41vh;
      width: 100%;
      position: relative;
      background: url(http://image.wufazhuce.com/movie-list-background.png) no-repeat center;
      background-size: cover;
      display: flex;
      display: -webkit-flex;
      align-items: center;
      justify-content: center;
      .movie-content-bg{
        width: 90%;
        height: 10em;
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
      }
    }
    .movie-forward,.movie-subtitle{
      font-size: 14px;
      margin-top: 0.5em;
      line-height: 1.5em;
      color: rgba(0,0,0,0.6);
      padding:0 20px;

    }
    .movie-forward{
      text-align: left;
    }
    .movie-subtitle{
      text-align: right;
    }
    time{
      font-size: 12px;
      text-align: justify;
      display: block;
      padding-top:1.5em;
      padding-left: 20px;
      padding-bottom: 1em;
    }
  }
</style>
