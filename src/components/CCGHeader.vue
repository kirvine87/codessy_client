<template lang="html">
  <div id="nav-header">
    <h1>CCG</h1>
    <h6>CodeClan Glasgow</h6>
    <div id="nav">
      <router-link v-on:click.native="handleHomeClick" :to="{ name: 'planets-view'}">Home</router-link>
      <router-link :to="{ name: 'planets-quiz-view'}">Quiz</router-link>
    </div>
    <PlanetsList :planets="planets" />
  </div>
</template>

<script>
import PlanetsList from '@/components/PlanetsList';
import {eventBus} from  '@/main.js'

export default {
  name: "ccg-header",
  props: ["planets"],
  methods: {
    handleHomeClick() {
      eventBus.$emit('planet-selected', null)
    }
  },
  components: {
    PlanetsList
  }
}
</script>

<style lang="css" scoped>
#nav-header{
  display: flex;
  flex-direction: column;
  flex:1;
}

#nav{
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid white;
}

h1, h6{
  width: 100%;
  margin: 0;
  padding: 0;
}

h6{
  border-bottom: 1px solid white;
  margin-bottom: 5em;
}

a{
  color: white;
  font-size: 1.5em;
  font-weight: normal;
  text-decoration: none;
  margin-bottom: 20px;
}

a:hover{
  background-color: rgba(255, 255, 255, 0.4);
}

</style>
