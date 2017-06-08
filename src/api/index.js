import axios from 'axios'

const DEFAULT = 'https://bird.ioliu.cn/v1/?url='
const API = {
  idlist:'http://v3.wufazhuce.com:8000/api/onelist/idlist/?channel=wdj&version=4.2.2&uuid=ffffffff-a90e-706a-63f7-ccf973aae5ee&platform=android',
  readinglist:'http://v3.wufazhuce.com:8000/api/channel/reading/more/0?channel=wdj&version=4.2.2&uuid=ffffffff-a90e-706a-63f7-ccf973aae5ee&platform=android'
}

export default {
	getIdList() {
		return axios.get(DEFAULT + API.idlist);
	},
  getOneList(id){
    return axios.get(DEFAULT + 'http://v3.wufazhuce.com:8000/api/onelist/'+id+'/0?channel=wdj&version=4.0.2&uuid=ffffffff-a90e-706a-63f7-ccf973aae5ee&platform=android')
  },
  getReadingList(){
    return axios.get(DEFAULT + API.readinglist);
  },
  getReadingDetail(id,sid){
    return axios.get(DEFAULT + 'http://v3.wufazhuce.com:8000/api/essay/'+id+'?channel=wdj&source=channel_reading&source_id='+sid+'&version=4.0.2&uuid=ffffffff-a90e-706a-63f7-ccf973aae5ee&platform=android')
  },
  getMusicList(id){
    return axios.get(DEFAULT + 'http://v3.wufazhuce.com:8000/api/channel/music/more/'+id+'?channel=wdj&version=4.2.2&uuid=ffffffff-a90e-706a-63f7-ccf973aae5ee&platform=android')
  },
  getMusicDetail(id){
    return axios.get(DEFAULT + 'http://v3.wufazhuce.com:8000/api/music/detail/'+id+'?channel=wdj&version=4.0.2&uuid=ffffffff-a90e-706a-63f7-ccf973aae5ee&platform=android')
  },
  getMovieList(id){
    return axios.get(DEFAULT + 'http://v3.wufazhuce.com:8000/api/channel/movie/more/'+id+'?channel=wdj&version=4.0.2&uuid=ffffffff-a90e-706a-63f7-ccf973aae5ee&platform=android')
  },
  getMovieDetail(id){
    return axios.get(DEFAULT + 'http://v3.wufazhuce.com:8000/api/movie/'+id+'/story/1/0?version=4.0.2&platform=android')
  }
}
