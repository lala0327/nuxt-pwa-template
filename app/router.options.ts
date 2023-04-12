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
        name: 'main',
        path: '/main',
        component: () => import('@/pages/main.vue')
    }
  ],
}