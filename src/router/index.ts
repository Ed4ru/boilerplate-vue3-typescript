import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('@/views/Home.vue')
  },
  {
    path: '/links',
    name: 'Useful Links',
    component: () => import('@/views/UsefulLinks.vue')
  }
];

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) return { selector: to.hash };
    return savedPosition ? savedPosition : { top: 0, behavior: 'smooth' };
  }
});

router.beforeEach((to, from, next) => {
  next();
});
