import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/People',
    name: 'PeopleList',
    component: () => import('../views/List.vue'),
    props: { repositoryName: 'people' }
  },
  {
    path: '/People/:id',
    name: 'PeopleDetail',
    component: () => import("../views/Detail.vue"),
    props(route) {
      route.params.origin = 'People';
      return route.params;
    }
  },
  {
    path: '/StarShips',
    name: 'StarShipsList',
    component: () => import('../views/List.vue'),
    props: { repositoryName: 'starships' }
  },
  {
    path: '/StarShips/:id',
    name: 'StarShipsDetail',
    component: () => import("../views/Detail.vue"),
    props(route) {
      route.params.origin = 'StarShips';
      return route.params;
    }
  },
  {
    path: '/Planets',
    name: 'PlanetsList',
    component: () => import('../views/List.vue'),
    props: { repositoryName: 'planets' }
  },
  {
    path: '/Planets/:id',
    name: 'PlanetsDetail',
    component: () => import("../views/Detail.vue"),
    props(route) {
      route.params.origin = 'Planets';
      return route.params;
    }
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
