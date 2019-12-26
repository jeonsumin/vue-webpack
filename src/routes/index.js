import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../components/index.vue'


Vue.use(VueRouter)

export const router = new VueRouter({
	routes: [{
			path: '/',
			name: 'index',
			component: Index,
			props: true
		},
	]
})
