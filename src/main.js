// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import router from './router'

Vue.use( Vuex )
Vue.use( VueRouter )
Vue.config.productionTip = false


const store = new Vuex.Store( {
	state: {
		num: 1,
		drawer: false,
		circleFlag: false
	},
	mutations: {
		add: ( state, n ) => state.num = n,
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
