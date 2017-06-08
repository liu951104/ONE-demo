import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: resolve => require(['../components/page/onelist.vue'], resolve)
    },
    {
			path: '/detail',
			component: resolve => require(['../components/page/onedetail.vue'], resolve)
		},
    {
			path: '/read',
			component: resolve => require(['../components/page/readList.vue'], resolve)
		},
    {
			path: '/readDetail',
			component: resolve => require(['../components/page/readingDetail.vue'], resolve)
		},
    {
			path: '/music',
			component: resolve => require(['../components/page/musicList.vue'], resolve)
		},
    {
			path: '/musicDetail',
			component: resolve => require(['../components/page/musicDetail.vue'], resolve)
		},
    {
			path: '/movie',
			component: resolve => require(['../components/page/movieList.vue'], resolve)
		},
    {
			path: '/movieDetail',
			component: resolve => require(['../components/page/movieDetail.vue'], resolve)
		}
  ]
})
