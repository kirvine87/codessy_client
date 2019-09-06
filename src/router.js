import Vue from 'vue';
import Router from 'vue-router';

import PlanetsView from './views/PlanetsView';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'planets-view',
      component: PlanetsView
    }
  ]
});

export default router;
