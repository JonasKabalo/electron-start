import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'main-page',
      component: require('@/renderer/pages/Home').default,
    },
    {
      path: '/Invoices',
      name: 'Invoices',
      component: require('@/renderer/pages/Invoices').default,
    },
    {
      path: '*',
      redirect: '/',
    },
  ],
});
