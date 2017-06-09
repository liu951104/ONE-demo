

const _API = 'https://bird.ioliu.cn/v1/?url=http://v3.wufazhuce.com:8000/api/'
const _TYPE = {
	id: 'onelist/idlist/?',
	oneList: 'onelist/',
	readList: 'channel/reading/more/',
	readDetail: 'essay/',
	musicList: 'channel/music/more/',
	musicDetail: 'music/detail/',
	movieList: 'channel/movie/more/',
	movieDetail: 'movie/'
}
export const _DEFAULT = '?channel=wdj&version=4.0.2&uuid=ffffffff-a90e-706a-63f7-ccf973aae5ee&platform=android'
export const _STORY = '/story/1/0?version=4.0.2&platform=android'
export const ID = _API.concat( _TYPE.id )
export const ONE_LIST = _API.concat( _TYPE.oneList )
export const READ_LIST = _API.concat( _TYPE.readList )
export const READ_DETAIL = _API.concat( _TYPE.readDetail )
export const MUSIC_LIST = _API.concat( _TYPE.musicList )
export const MUSIC_DETAIL = _API.concat( _TYPE.musicDetail )
export const MOVIE_LIST = _API.concat( _TYPE.movieList )
export const MOVIE_DETAIL = _API.concat( _TYPE.movieDetail )
