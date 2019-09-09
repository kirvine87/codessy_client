<template lang="html">
  <div class="planet">
    <router-link v-on:click.native="handleSolarClick" :to="{ name: 'planets-view'}"><h3>Solar System</h3></router-link>
    <router-link v-on:click.native="handlePlanetClick(planet)" :to="{ name: 'planets-view'}" :key="index" v-for="(planet, index) in planets"><h3>{{planet.name}}</h3></router-link>
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
  cursor:pointer;
}

a {
  text-decoration: none;
}

</style>
