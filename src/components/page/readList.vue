<template>
  <div class="">
    <div class="list-box" v-for="detail in List" @click="toDetail(detail.item_id,detail.id)">
      <h6 class="text-tag">- {{detail.tag_list.length == 0?'阅读':detail.tag_list[0].title}} -</h6>
      <h4 class="reading-title">{{detail.title}}</h4>
      <h5 class="reading-author">文 / {{detail.author.user_name}}</h5>
      <img :src="detail.img_url" alt="" class="reading-img">
      <p class="reading-forward">{{detail.forward}}</p>
      <time>{{$moment(detail.post_date).format('YYYY/MM/DD')}}</time>
    </div>
    <!-- 滑动加载更多组件 -->
	  <scroll-more :scroller="scroller" :loading="moreLoading" @load="loadMore" />
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
      moreLoading:false,
      scroller:null,
      flag:false,
      rId:0,
			transitionName: 'slide-left'
		}
	},
  computed: {
    ...mapState({
      detail : state => state.detail
    })
  },
  mounted(){
    this.scroller = this.$el;
    this.getReadList(0)
  },
  methods: {
    loadMore(){
      this.moreLoading = true;
      this.getReadList(this.rId);
    },
    getReadList(id){
      let self = this;
      api.getReadingList(id).then(function(res){
        self.rId = res.data.data[res.data.data.length - 1].id;
        self.List = self.List.concat(res.data.data);
        self.moreLoading = false;
        self.loading = false;
      })
    },
    toDetail(id,sid){
      this.$router.push({ path: 'readDetail', query: { id: id,sid:sid}})
    }
	}
}
</script>

<style lang="scss" scoped>
  .list-box{
    margin: 0 0 0.5em 0;
    background: #fff;
    box-shadow: 0 0.1rem 0 0 rgba(230, 230, 230, 0.5);
    padding: 1em 0.75em;
    .text-tag{
      color: rgba(0, 0, 0, 0.6);
      font-weight: 400;
      line-height: 1.5em;
      font-size: 14px;
      text-align: center;
      padding: 0.6em 0 0.85em 0;
    }
    .reading-title{
      font-size: 22px;
      color: #111;
      line-height: 1.5em;
      text-align: justify;
    }
    .reading-author{
      font-weight: 400;
      font-size: 16px;
      padding: 0.9em 0;
      text-align: left;
    }

    img.reading-img{
      width: 100%;
      overflow-x: hidden;
    }
    .reading-forward{
      margin-top: 0.8em;
      color: rgba(0,0,0,0.6);
      font-size: 14px;
      line-height: 1.5em;
      text-align: justify;
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
    time{
      color: #808080;
      opacity: 0.6;
      display: block;
      font-size: 12px;
      text-align: center;
      padding: 2em 0;
      font-family: 'Courier New';
    }

  }
</style>
