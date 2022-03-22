import {
  createRouter,
  createWebHashHistory,
  RouteRecordRaw,
  RouterOptions,
} from 'vue-router';
import Home from '@pages/Home.vue';
import About from '@pages/About.vue';

const routes: Array<RouteRecordRaw> = [
  { path: '/', name: 'Index', component: Home },
  { path: '/home', name: 'Home', component: Home },
  { path: '/about', name: 'about', component: About },
];
const options: RouterOptions = {
  history: createWebHashHistory(),
  routes,
};
const router = createRouter(options);

export default router;
