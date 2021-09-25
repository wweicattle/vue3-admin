import { createApp } from 'vue';
import rootApp from './App.vue';

// import "./network/request/index"
import './network/request/config';

import router from './plugin/router';
import './plugin/test.js';
import store from './store';
import 'normalize.css';
const apps = createApp(rootApp);
apps.use(router);
apps.use(store);
apps.mount('#app');
