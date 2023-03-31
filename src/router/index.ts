import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Bangban',
      component: () => import('@/components/BangbanView.vue')
    },
    {
      path: '/Content',
      name: 'Content',
      component: () => import('@/components/ContentView.vue')
    },
    {
      path: '/Shuiwu',
      name: 'Shuiwu',
      component: () => import('@/components/ShuiwuView.vue')
    },
    {
      path: '/Weijianwei',
      name: 'Weijianwei',
      component: () => import('@/components/WeijianweiView.vue')
    },

  ]
})

export default router
