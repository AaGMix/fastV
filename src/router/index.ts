import {
  createRouter,
  createWebHashHistory,
  RouteRecordRaw,
  RouterOptions,
} from 'vue-router';
import Home from '@pages/Home.vue';

const routes: Array<RouteRecordRaw> = [
  { path: '/', name: 'Index', component: Home },
];
const options: RouterOptions = {
  history: createWebHashHistory(),
  routes,
};
const router = createRouter(options);

export default router;
