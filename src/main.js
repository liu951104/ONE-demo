// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Vuex from 'vuex'
import axios from 'axios'
// import VueRouter from 'vue-router'
import router from './router'
import vueScrollBehavior from 'vue-scroll-behavior'
Vue.use(vueScrollBehavior, { router: router })

import loading from './components/common/loading'
import scrollMore from './components/common/scrollMore'
import Title from './components/common/title'
Vue.component( loading.name, loading )
Vue.component( scrollMore.name, scrollMore )
Vue.component('vTitle',Title)

import VueMasonryPlugin from 'vue-masonry';

Vue.use(VueMasonryPlugin)

import moment from 'moment';
Object.defineProperty(Vue.prototype, '$moment', { value: moment });

Vue.use( Vuex )
// Vue.use( VueRouter )
Vue.prototype.$http = axios
Vue.config.productionTip = false


const store = new Vuex.Store( {
	state: {
		title:'',
		movie:{},
		detail:{}
	},
	mutations: {
		change: (state, n ) => state.title = n,
		getobj: ( state, n ) => state.detail = n,
		getmovie: ( state, n ) => state.movie = n
	}
} )

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  ...App
})

router.beforeEach( ( to, from, next ) => {
	console.log(to.path)
	next()
} )
router.afterEach( ( to, from, next ) => {
	console.log("after" + to.path)
	store.commit( 'change',changeTitle(to.path));
	// if ( to.path == '/article' ) {
	// 	dom.scrollTop = 0;
	// } else {
	// 	Vue.nextTick( () => {
	// 		dom.scrollTop = indexScrollTop;
	// 	} );
	// }
} );

function changeTitle(path){
	switch(path){
		case '/one':
			return "图文";
			break;
		case '/read':
			return "阅读";
			break;
		case '/music':
			return "音乐";
			break;
		case '/movie':
			return "电影";
			break;
		case '/about':
			return "关于";
			break;
		default:
			return "";
	}
}
