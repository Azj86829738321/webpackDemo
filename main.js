import Vue from 'vue';
import App from './app.vue';
import axios from 'axios'
Vue.prototype.$axios = axios;
import './style.css'
new Vue({
    el:"#app",
    render:h => h(App)
})
