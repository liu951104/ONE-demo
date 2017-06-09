// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Vuex from 'vuex'
import axios from 'axios'
import VueRouter from 'vue-router'
import router from './router'

import loading from './components/common/loading'
import scrollMore from './components/common/scrollMore'
import Title from './components/common/title'
Vue.component( loading.name, loading )
Vue.component( scrollMore.name, scrollMore )
Vue.component('vTitle',Title)

import moment from 'moment';
Object.defineProperty(Vue.prototype, '$moment', { value: moment });

Vue.use( Vuex )
Vue.use( VueRouter )
Vue.prototype.$http = axios
Vue.config.productionTip = false


const store = new Vuex.Store( {
	state: {
		movie:{},
		detail:{}
	},
	mutations: {
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
