<template lang="html">
  <div id="planets-view">
    <PlanetLeaflet />
    <div id="facts">
      <PlanetFacts v-if="selectedPlanet" :planet="selectedPlanet"/>
      <SolarSystemFacts v-if="!selectedPlanet" />
    </div>

  </div>
</template>

<script>
import PlanetFacts from '@/components/PlanetFacts';
import SolarSystemFacts from '@/components/SolarSystemFacts';
import PlanetLeaflet from '@/components/PlanetLeaflet';
import {eventBus} from '@/main.js';

export default {
  name: 'planets-view',
  data() {
    return {
      selectedPlanet: null
    }
  },
  components: {
    PlanetFacts,
    SolarSystemFacts,
    PlanetLeaflet
  },
  mounted() {
    eventBus.$on('planet-selected', (planet) => {
      this.selectedPlanet = planet
    })
  },
  updated() {

  }
}
</script>

<style lang="css" scoped>
#planets-view{
  display: flex;
  flex-direction: column;
  height: 90vh;
}

#facts{
  border: 1px solid white;
  border-radius: 8px;
  padding: 1em;
  overflow-y: scroll;
}
</style>
