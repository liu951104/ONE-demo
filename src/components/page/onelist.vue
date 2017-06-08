<template>
  <div class="">

    <div class="list-box" v-for="(detail,index) in List" @click="toDetail(detail.hpcontent_id,index)">
      <time>{{$moment(detail.hp_makettime.replace(/\-/g,"\/")).format('YYYY')}} / {{$moment(detail.hp_makettime.replace(/\-/g,"\/")).format('MM')}} / {{$moment(detail.hp_makettime.replace(/\-/g,"\/")).format('DD')}}</time>
      <p class="list-hp-title">{{detail.hp_title}}</p>
      <img :src="detail.hp_img_url" alt="" class="list-img">
      <h6 class="list-name">{{detail.hp_author}}|{{detail.image_authors}}</h6>
      <p class="list-content">{{detail.hp_content}}</p>
      <span class="list-word-info">{{detail.text_authors}}</span>
    </div>

    <!-- 加载中 -->
    <loading :loading="loading" />
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
      flag:false,
      now:'',
      page:0,
      idList:[],
			transitionName: 'slide-left'
		}
	},
  computed: {
    ...mapState({
      detail : state => state.detail
    })
  },
  created(){
    let self = this;
    self.getOneList(0)
    // api.getIdList().then(function(res){
    //   self.idList = res.data.data;
    //   self.getOneList(0)
    // })
  },
  methods: {
    getOneList:function(page){
      // let id = this.idList[page]
      const t = new Date().getTime();
      let now = this.$moment(t-page*2592e6).format('YYYY-MM-DD')
      let url = 'http://v3.wufazhuce.com:8000/api/hp/bymonth/'+now+'%2000:00:00?channel=wdj&version=4.2.2&uuid=ffffffff-a90e-706a-63f7-ccf973aae5ee&platform=ios'
      this.$http.get('https://bird.ioliu.cn/v1/?url='+url+'').then((res) => {
        this.List = this.List.concat(res.data.data);
        this.loading = false;
      })

      // api.getOneList(id).then(function(res){
      //   console.log(res.data.data)
      //   this.List = this.List.concat(res.data.data);
      // })
    },
    toDetail(id,idx){
      // console.log(id,idx)
      this.$store.commit('getobj',this.List[idx]);
      this.$router.push({ path: 'detail', query: { itemId: id }})
    }
	}
}
</script>

<style lang="scss" scoped>
  .list-box{
    margin: 0 0 0.5em 0;
    background: #fff;
    box-shadow: 0 0.1rem 0 0 rgba(230, 230, 230, 0.5);
    padding: 1em 0;
    time{
      color: #000000;
      opacity: 0.6;
      font-size: 20px;
      line-height: 22px;
      text-align: center;
      padding-top: 16px;
      font-family: 'Courier New';
    }
    img.list-img{
      width: 100%;
      overflow-x: hidden;
      margin: 15px 0;
    }
    .list-hp-title{
      margin-top: 15px;
      color: #808080;
      font-size: 10px;
      line-height: 14px;
      text-align: center;
    }
    h6{
      font-weight: 400;
      font-size: 12px;
      padding: 10px 15px;
    }
    p.list-content{
      font-size: 14px;
      opacity: 0.6;
      line-height: 20px;
      padding: 5px 15px;
    }
    .list-word-info{
      font-size: 12px;
    }

  }
</style>
