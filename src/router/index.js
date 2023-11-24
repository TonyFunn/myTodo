import { createRouter, createWebHistory } from 'vue-router'
import MainView from '../views/MainView.vue'

const routes = [
	{
		path: '/',
		name: 'main',
		component: MainView
	},
	{
		path: '/about',
		name: 'about',
		component: () => import('../views/AboutView.vue')
	},
	{
		path: '/posts',
		name: 'posts',
		component: () => import('../views/PostsView.vue')
	},
	{
		path: '/noteTwo',
		name: 'notetwo',
		component: () => import('../views/NoteTwoView.vue')
	},
	{
		path: '/posts/:id',
		name: 'postsId',
		component: () => import('../views/PostIdView.vue')
	}
]

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes
})

export default router
