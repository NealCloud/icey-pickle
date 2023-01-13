import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SponsorView from '../views/SponsorView.vue'
import EventsView from '../views/EventsView.vue'
import Tournaments from '../views/Tournaments.vue'
import Admin from '../views/Admin.vue'
import Test from '../views/Test.vue'
import Login from '../views/Login.vue'
import SignUp from '../views/SignUp.vue'

import { auth} from '../firebase/config'

const requireAuth = (to, from, next) =>{
  let user = auth.currentUser
  
  if (!user) {
    //redirect them
    next({name: 'login'})
  }else{
    next()
  }
}

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/sponsor',
    name: 'sponsor',
    component: SponsorView
  },
  {
    path: '/events',
    name: 'events',
    component: EventsView
  },
  {
    path: '/tournaments',
    name: 'tournaments',
    component: Tournaments
  },
  {
    path: '/test',
    name: 'test',
    component: Test
  },
  {
    path: '/admin',
    name: 'admin',
    component: Admin,
    beforeEnter: requireAuth
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/signup',
    name: 'signup',
    component: SignUp
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
