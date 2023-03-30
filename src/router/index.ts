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

  ]
})

export default router
