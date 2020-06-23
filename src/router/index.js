import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)


const main = {layout: 'main'}
const empty = {layout: 'empty'}

const routes = [
  {
    path: '/',
		name: 'Home',
		meta: main,
    component: Home
	},
	{
    path: '/login',
		name: 'login',
		meta: {layout: 'empty'},
		component: () => import('@/views/Login.vue')
		//lazyloading. компонент загружается по требованию. облегчает начальную загрузку
  },
	{
    path: '/register',
		name: 'register',
		meta: empty,
		component: () => import('@/views/Register.vue')
		//lazyloading. компонент загружается по требованию. облегчает начальную загрузку
  },
	{
    path: '/categories',
    name: 'categories',
		meta: {layout: 'main'},
    component: () => import('@/views/Categories.vue')
  },
	{
    path: '/record',
    name: 'record',
		meta: main,
    component: () => import('@/views/Record.vue')
  },
	{
    path: '/profile',
    name: 'profile',
		meta: main,
    component: () => import('@/views/Profile.vue')
  },
	{
    path: '/planning',
    name: 'planning',
		meta: main,
    component: () => import('@/views/Planning.vue')
  },
	{
    path: '/history',
    name: 'history',
		meta: main,
    component: () => import('@/views/History.vue')
  },
	{
    path: '/detail',
    name: 'detail',
		meta: main,
    component: () => import('@/views/Detail.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
