import { createRouter, createWebHistory } from 'vue-router';
import { useGlobalStore } from '@/store';

import HomeComponent from '../components/HomeComponent.vue';
import AboutMeComponent from '../components/AboutMeComponent.vue';
import LandingComponent from '../components/LandingComponent.vue';

const routes = [
  {
    path: '/',
    component: LandingComponent,
    meta: { requiresLogin: false }
  },
  {
    path: '/home',
    component: HomeComponent,
    meta: { requiresLogin: true }
  },
  {
    path: '/about-me',
    component: AboutMeComponent,
    meta: { requiresLogin: true }
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

router.beforeEach((to, from, next) => {
  const isLoggedIn = useGlobalStore().user.loggedIn;

  if (to.meta.requiresLogin && !isLoggedIn) {
    next('/');
  } else {
    next();
  }
});

export default router;
