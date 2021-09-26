import { createApp } from 'vue';
import rootApp from './App.vue';

// import "./network/request/index"
import './network/request/config';
import router from './plugin/router';
import './plugin/test.js';
import store from './store';
import 'normalize.css';
import 'element-plus/dist/index.css'
import installElement from "./plugin/element"
import { ElButton } from 'element-plus'
console.log(ElButton);

const apps = createApp(rootApp);

// 安装element-plus
installElement(apps);

apps.use(router);
apps.use(store);
// apps.use(ElButton);
apps.mount('#app');
