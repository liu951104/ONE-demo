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
  ]
})
