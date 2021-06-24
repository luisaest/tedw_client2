<<<<<<< HEAD
import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '../views/Home.vue';
=======
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)
>>>>>>> 488d09fbca4c5581dbde949ccee82555d71b1304

const routes = [
  {
    path: '/',
    name: 'Home',
<<<<<<< HEAD
    component: Home,
=======
    component: Home
>>>>>>> 488d09fbca4c5581dbde949ccee82555d71b1304
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
<<<<<<< HEAD
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
=======
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
>>>>>>> 488d09fbca4c5581dbde949ccee82555d71b1304
