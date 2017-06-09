import axios from 'axios'

import {
  _DEFAULT,
  _STORY,
  ID,
  ONE_LIST,
  READ_LIST,
  READ_DETAIL,
  MUSIC_LIST,
  MUSIC_DETAIL,
  MOVIE_LIST,
  MOVIE_DETAIL,
} from './resource'

export default {
	getIdList() {
		return axios.get(ID);
	},
  getOneList(id){
    return axios.get(ONE_LIST + id + '/0' + _DEFAULT);
  },
  getReadingList(id){
    return axios.get(READ_LIST + id + _DEFAULT);
  },
  getReadingDetail(id,sid){
    return axios.get(READ_DETAIL + id + _DEFAULT + '&source_id='+sid+'');
  },
  getMusicList(id){
    return axios.get(MUSIC_LIST + id + _DEFAULT)
  },
  getMusicDetail(id){
    return axios.get(MUSIC_DETAIL + id + _DEFAULT)
  },
  getMovieList(id){
    return axios.get(MOVIE_LIST + id + _DEFAULT)
  },
  getMovieDetail(id){
    return axios.get(MOVIE_DETAIL + id + _STORY)
  }
}
