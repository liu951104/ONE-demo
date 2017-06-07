<template>
  <div class="detail-box">
    <div class="detail-content">
      <img :src="Detail.hp_img_url" alt="">
      <ul>
        <li>{{Detail.hp_title}}</li>
        <li>{{Detail.hp_author}}|{{Detail.image_authors}}</li>
      </ul>
      <div class="time-box">
        <time class="day">{{new Date(Detail.hp_makettime.replace(/\-/g,"\/")).getDate()}}</time>
        <time class="monthYear">{{new Date(Detail.hp_makettime.replace(/\-/g,"\/")).getMonth()+1}}.{{new Date(Detail.hp_makettime.replace(/\-/g,"\/")).getFullYear()}}</time>
      </div>
      <div class="separate-line"></div>
      <p>{{Detail.hp_content}}</p>

    </div>
    <!-- 加载中 -->
    <!-- <loading :loading="loading" /> -->
  </div>
</template>

<script>
import api from '../../api/index'
import { mapState } from 'vuex'
export default {
  data() {
		return {
			Detail: {},
			open: false,
			docked: false,
      loading:true,
      flag:false,
      todayId:0,
			transitionName: 'slide-left'
		}
	},
  computed: {
    ...mapState({
      detail : state => state.detail
    })
  },
  created(){
    // this.getOneDetail(this.$route.query.itemId)
    if(!this.isNull(this.$store.state.detail)){
      this.Detail = this.$store.state.detail;
      sessionStorage.setItem("detail",JSON.stringify(this.Detail));
    }else{
      let obj = sessionStorage.getItem("detail");
      this.Detail = JSON.parse(obj);
    }

  },
  methods: {
    getOneDetail:function(id){
      this.$http.get('https://bird.ioliu.cn/v1/?url=http://v3.wufazhuce.com:8000/api/essay/'+id+'?channel=wdj&source=summary&source_id=9261&version=4.2.2&uuid=ffffffff-a90e-706a-63f7-ccf973aae5ee&platform=android').then((res) => {
        console.log(res)
        this.Detail = res.data.data;
        this.loading = false;
      })
    },
    toDetail(id){
      console.log(id)
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
  .detail-box{
    background: #fff;
    height: 100%;
    width: 100%;
    padding-bottom: 20px;
  }
  .detail-content{
    font-size: 16px;
    opacity: 0.9;
    background: #fff;
    overflow-x: hidden;
    text-align: justify;
    img{
      width: 100%;
    }
    ul{
      height: 22px;
      line-height: 22px;
      padding: 10px 10px;
      font-size: 12px;
      li:nth-of-type(1){
        float: left;
      }
      li:nth-of-type(2){
        float: right;
      }
    }
    .time-box{
      margin: 20px 0;
      text-align: center;
      font-family: Serif;
      time.day{
        font-size: 54px;
        height: 60px;
        line-height: 60px;
        width: 100%;
        display: block;
        font-family: Serif;
      }
      time.monthYear{
        font-size: 18px;
        width: 100%;
        display: block;
        font-family: Serif;
      }
    }
    .separate-line{
      margin: 20px auto;
      width: 30%;

      height: 1px;
      background-color: #eee;
    }
    p{
      padding: 15px 10px;
    }
  }
</style>
