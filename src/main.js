import Vue from 'vue';
import App from './App.vue';
import {router} from './routes/index.js';
import './assets/css/commons.css'
import axios from 'axios';

/** axios settings**/
Vue.prototype.$axios = axios;
axios.defaults.baseURL = process.env.base_url;


new Vue({
    el: "#app",
    render: h => h(App),
    router
})