import Vue from 'vue';
import App from './App.vue';
import {
    router
} from './routes/index.js';
import './assets/css/default.css'
new Vue({
    el: "#app",
    render: h => h(App),
    router
})