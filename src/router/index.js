import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/OverView',
    name: 'OverView',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/OverView.vue')
  },
  {
    path: '/VisionView',
    name: 'VisionView',
    component: () => import(/* webpackChunkName: "about" */ '../views/VisionView.vue')
  },
  {
    path: '/GreetingsView',
    name: 'GreetingsView',
    component: () => import(/* webpackChunkName: "about" */ '../views/GreetingsView.vue')
  },
  {
    path: '/HistoryView',
    name: 'HistoryView',
    component: () => import(/* webpackChunkName: "about" */ '../views/HistoryView.vue')
  },
  {
    path: '/GlobalView',
    name: 'GlobalView',
    component: () => import(/* webpackChunkName: "about" */ '../views/GlobalView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
