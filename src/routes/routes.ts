import { RouteRecordRaw } from 'vue-router';
import { createRouter, createWebHashHistory } from 'vue-router';


export const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'main',
    component: () => import('../pages/Main.vue'),
  },
]



const router = createRouter({
  scrollBehavior() {
    return { top: 0, left: 0 };
  },
  history: createWebHashHistory(),
  routes,
});

export default router;