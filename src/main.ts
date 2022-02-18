import { createApp } from 'vue';
import Router from '@router/index';
import Store from '@store/index';
import App from './App.vue';

const app = createApp(App);
app.use(Router);
app.use(Store);

app.mount('#app');
