<template lang="html">
  <div class="planet">
    <h3 @click="handlePlanetClick(planet)" :key="index" v-for="(planet, index) in planets">{{planet.name}}</h3>
  </div>
</template>

<script>
import {eventBus} from '@/main.js';

export default {
  name: 'planets-list',
  props: ['planets'],
  methods: {
    handlePlanetClick(planet) {
      eventBus.$emit('planet-selected', planet)
    }
  }
}
</script>

<style lang="css" scoped>
</style>
