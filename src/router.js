import Vue from 'vue';
import Router from 'vue-router';

import PlanetsView from './views/PlanetsView';
import PlanetQuizView from './views/PlanetQuizView'

Vue.use(Router);

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'planets-view',
      component: PlanetsView,
      props: true
    },
    {
      path: '/quiz',
      name: 'planets-quiz-view',
      component: PlanetQuizView
    }
  ]
});

export default router;
