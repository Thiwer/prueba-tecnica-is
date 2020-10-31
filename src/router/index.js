import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/People',
    name: 'PeopleList',
    component: () => import('../views/List.vue')
  },
  {
    path: '/People/:name',
    name:'PeopleDetail',
    component: () => import("../views/Detail.vue"),
    props: { origin: "People"}
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
