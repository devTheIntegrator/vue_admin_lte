import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import 'jquery';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'admin-lte/dist/css/adminlte.min.css';
import 'admin-lte/dist/js/adminlte.min.js';
import '@fortawesome/fontawesome-free/css/all.min.css';


createApp(App).use(router).mount('#app')
