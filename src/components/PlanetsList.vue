<template lang="html">
  <div class="planet">
    <h3 @click="handleSolarClick">Solar System</h3>
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
    },
    handleSolarClick() {
      eventBus.$emit('planet-selected', null)
    }
  }
}
</script>

<style lang="css" scoped>

h3{
  color: white;
  font-size: 1.5em;
  font-weight: normal;
  text-decoration: none;
}

h3:hover{
  background-color: rgba(255, 255, 255, 0.4);
}

</style>
