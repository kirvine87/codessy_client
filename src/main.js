import Vue from 'vue';
import App from './App.vue';

import {LMap, LIcon, LMarker, LPopup} from 'vue2-leaflet'
import { Icon, CRS } from 'leaflet'
import 'leaflet/dist/leaflet.css'

//without the below the icons don't show up
delete Icon.Default.prototype._getIconUrl;

Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});

import router from './router.js';

Vue.config.productionTip = false;

export const eventBus = new Vue();

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
