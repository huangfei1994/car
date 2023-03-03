import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [
  // {
  //   path: "/noPermission",
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/noPermission/index.vue"),
  //   meta: {
  //     title: "暂无权限",
  //     requireAuth: false,
  //   },
  // },
  {
    path: '/',
    redirect: '/waitArea',
    meta: {
      title: '',
      requireAuth: true
    }
  },
  {
    path: '/waitArea',
    name: 'waitArea',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/waitArea/index.vue')
  },
  {
    path: '/exhibtionHall',
    name: 'exhibtionHall',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/exhibtionHall/index.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
