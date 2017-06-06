import axios from 'axios'

const DEFAULT = 'https://bird.ioliu.cn/v1/?url='
const API = {
  idlist:'http://v3.wufazhuce.com:8000/api/onelist/idlist/?channel=wdj&version=4.0.2&uuid=ffffffff-a90e-706a-63f7-ccf973aae5ee&platform=android',
  test:'http://m.wufazhuce.com/one/ajaxlist/0?_token=f5ef473ac7b96c429efb497b05fc008665b38dc1'
}

export default {
	getIdList() {
		return axios.get(DEFAULT + API.idlist);
    // return axios.get(DEFAULT + API.idlist).then(function(data){
    //   return data.data.data;
    // });
	}
}
