import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home/Home.vue'
import BookDetail from '../views/BookDetail/BookDetail.vue'
import Login from '../views/Login/Login.vue'
import Order from '../views/Order/Order.vue'
import Pay from '../views/Pay/Pay.vue'
import Personal from '../views/Personal/Personal.vue'
import Register from '../views/Register/Register.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },{
    path: '/bookDetail',
    name: 'BookDetail',
    component: BookDetail
  },{
    path: '/login',
    name: 'Login',
    component: Login
  },{
    path: '/order',
    name: 'Order',
    component: Order,
    meta:{ requiresAuth: true}
  },{
    path: '/pay',
    name: 'Pay',
    component: Pay,
    meta:{ requiresAuth: true}
  },{
    path: '/personal',
    name: 'Personal',
    component: Personal,
    meta:{ requiresAuth: true}
  },{
    path: '/register',
    name: 'Register',
    component: Register
  }
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  routes
})

export default router
