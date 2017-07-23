import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: resolve => require(['../components/page/index.vue'], resolve)
    },
    {
      path: '/one',
      component: resolve => require(['../components/page/onelist.vue'], resolve)
    },
    {
      path: '/about',
      component: resolve => require(['../components/page/about.vue'], resolve)
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
  		component: function (resolve) {
          require(['../components/page/movieList.vue'], resolve)
      },
      children:[
      	{
  				path: 'movieDetail',
  				component: resolve => require(['../components/page/movieDetail.vue'], resolve)
  			}
      ]
  	},
    {
      path: '/demo',
      component: resolve => require(['../components/page/demo.vue'], resolve)
    },
    {
      path: '/canvas',
      component: resolve => require(['../components/page/getDemo.vue'], resolve)
    }
  ]
})
