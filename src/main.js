import Vue from 'vue';
import App from './App.vue';
import {router} from './routes/index.js'
import './assets/css/default.css'
import './assets/js/default.js'

new Vue({
    el: "#app",
    render: h => h(App),
    router
})
