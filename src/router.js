import Vue from 'vue';
import Router from 'vue-router';

import PlanetsView from './views/PlanetsView';
import PlanetQuizView from './views/PlanetQuizView';
import ResultsView from './views/ResultsView';

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
      component: PlanetQuizView,
      props: true
    },
    {
      path: '/results',
      name: 'results-view',
      component: ResultsView
    }
  ]
});

export default router;
