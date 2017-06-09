<template>
  <div class="">
    <div class="index-box" :style="{backgroundImage:'url('+ IndexObj.img_url +')'}" v-if="!loading">
      <div class="index-bg">
        <div class="time"><time>即将进入:{{count}}s</time></div>
        <div class="index-content">
          <time class="day">{{$moment(IndexObj.post_date.replace(/\-/g,"\/")).format('D')}}</time>
          <h3>{{IndexObj.volume}} | {{$moment(IndexObj.post_date.replace(/\-/g,"\/")).format('MMM')}}.{{$moment(IndexObj.post_date.replace(/\-/g,"\/")).format('YYYY')}}</h3>
          <p class="index-forward">{{IndexObj.forward}}</p>
        </div>
      </div>
    </div>
    <!-- 加载中 -->
    <loading :loading="loading" />
  </div>
</template>

<script>
import api from '../../api/index'
var timeinter,timeout;
export default {
  data() {
		return {
			IndexObj: {},
      loading:true,
      count:3,
      todayId:0,
			transitionName: 'slide-left'
		}
	},
  created(){
    let self = this;
    api.getIdList().then(function(res){
      self.todayId = res.data.data[0];
      self.getOne(self.todayId);
    })
  },
  beforeRouteLeave (to, from, next) {
    // 导航离开该组件的对应路由时调用
    if(this.count > 0){
      clearTimeout(timeout)
    }
    next()
  },
  methods: {
    interval(){
      timeout = setInterval(() => {
        this.count--;
      },1000)
    },
    getOne:function(id){
      let self = this;
      api.getOneList(id).then(function(res){
        // console.log(res.data.data.content_list[0])
        self.IndexObj = res.data.data.content_list[0];
        self.loading = false;
        self.interval();
        timeout = setTimeout(() => {
          clearInterval(timeinter);
          self.$router.push('/one')
        },3000)
      })
    }
	}
}
</script>

<style lang="scss" scoped>
  .index-box{
    height: 93vh;
    width: 100vw;
    overflow: hidden;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    .index-bg{
      height: 93vh;
      width: 100%;
      // background: linear-gradient(top, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.8));

      background: -moz-linear-gradient(top, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.6));
      background: -o-linear-gradient(top, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.6));
      background: -webkit-linear-gradient(top, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.5));
      position: relative;
      .time{
        text-align: right;
        font-size: 14px;
        color: rgba(255,255,255,0.8);
        padding: 10px;
        color: #fff;
      }
      .index-content{
        color: #fff;
        position: absolute;
        bottom: 0;
        left: 0;
        text-align: left;
        padding: 20px;
        .day{
          font-size: 48px;
          line-height: 55px;
        }
        .index-forward{
          padding: 5px 0;
          line-height: 24px;
          // font-size: 16px;
        }
      }
    }
  }
</style>
