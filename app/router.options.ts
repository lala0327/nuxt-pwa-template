import type { RouterConfig } from '@nuxt/schema'
// https://router.vuejs.org/api/interfaces/routeroptions.html
export default <RouterConfig> {
  routes: (_routes) => [
    {
      name: 'home',
      path: '/',
      component: () => import('@/pages/index.vue')
    },
    {
        name: 'plan',
        path: '/plan',
        component: () => import('~/pages/plan.vue')
    },
    {
      name: 'gift',
      path: '/gift',
      component: () => import('~/pages/gift.vue')
    },
    {
      name: 'board',
      path: '/board',
      component: () => import('~/pages/board.vue')
    },
    {
    name: 'setting',
    path: '/setting',
    component: () => import('~/pages/setting.vue')
    }
  ],
}