<template lang="html">
<div class="">
  <PlanetFacts :planet="selectedPlanet"/>
  <SolarSystemFacts />
  <PlanetLeaflet />
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
      planet = this.selectedPlanet
    })
  }
}
</script>

<style lang="css" scoped>
</style>
