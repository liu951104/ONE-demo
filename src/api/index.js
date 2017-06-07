import axios from 'axios'

const DEFAULT = 'https://bird.ioliu.cn/v1/?url='
const API = {
  idlist:'http://v3.wufazhuce.com:8000/api/onelist/idlist/?channel=wdj&version=4.0.2&uuid=ffffffff-a90e-706a-63f7-ccf973aae5ee&platform=android',
  readinglist:'http://v3.wufazhuce.com:8000/api/channel/reading/more/0?channel=wdj&version=4.2.2&uuid=ffffffff-a90e-706a-63f7-ccf973aae5ee&platform=android'
}

export default {
	getIdList() {
		return axios.get(DEFAULT + API.idlist);
	},
  getReadingList(){
    return axios.get(DEFAULT + API.readinglist);
  },
  getReadingDetail(id,sid){
    return axios.get(DEFAULT + 'http://v3.wufazhuce.com:8000/api/essay/'+id+'?channel=wdj&source=channel_reading&source_id='+sid+'&version=4.0.2&uuid=ffffffff-a90e-706a-63f7-ccf973aae5ee&platform=android')
  }
}
