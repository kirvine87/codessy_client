<template lang="html">
  <PlanetFacts :planet="selectedPlanet"/>
  <SolarSystemFacts />
  <PlanetLeaflet />
</template>

<script>
import PlanetFacts from '@/components/PlanetFacts';
import SolarSystemFacts from '@/components/SolarSystemFacts';
import PlanetLeaflet from '@/components/PlanetLeaflet'
import {eventBus} from '@/main.js'

export default {
  name: 'planets-view'
  data() {
    selectedPlanet: null
  },
  components: {
    PlanetFacts,
    SolarSystemFacts,
    PlanetLeaflet
  },
  mounted() {
    eventBus.$on('planet-selected')
  }
}
</script>

<style lang="css" scoped>
</style>
