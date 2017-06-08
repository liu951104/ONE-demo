// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Vuex from 'vuex'
import axios from 'axios'
import VueRouter from 'vue-router'
import router from './router'

import loading from './components/common/loading'
Vue.component( loading.name, loading )

import moment from 'moment';
Object.defineProperty(Vue.prototype, '$moment', { value: moment });

Vue.use( Vuex )
Vue.use( VueRouter )
Vue.prototype.$http = axios
Vue.config.productionTip = false


const store = new Vuex.Store( {
	state: {
		showloading:false,
		movie:{},
		detail:{}
	},
	mutations: {
		getobj: ( state, n ) => state.detail = n,
		getmovie: ( state, n ) => state.movie = n,
		back( state, n ) { //列表、返回按钮切换
			if ( n ) {
				state.drawer = false
			} else {
				state.drawer = true
			}
		},
		toggle( state, n ) {
			if ( n ) {
				state.circleFlag = true
			} else {
				state.circleFlag = false
			}
		}
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
