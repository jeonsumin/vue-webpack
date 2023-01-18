import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export const router = new VueRouter({
	props: true,
	// mode: 'history',
	routes: [
		{path: '/', redirect: '/login'},
		{path: '/login', component: () => import('@/view/login/index')},
	]
})
