import Vue from 'vue'
import App from './App.vue'
import router from './router';

import Home from './components/Home.vue'
import Portfolio from './components/portfolio/Portfolio.vue'
import Stocks from './components/stocks/Stocks.vue'

// new Vue({
//   el: '#app',
//   router: router
// }).$mount('#app');

new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: { App },
});
