import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';
import './assets/main.scss';

Vue.use(BootstrapVue);

import App from './App';

Vue.config.devtools = process.env.NODE_ENV === 'development';
Vue.config.productionTip = false;

new Vue({
  render(h) {
    return h(App);
  },
}).$mount('#app');
