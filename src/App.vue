<template lang="html">
  <div id="app">
    <Header :planets="planets"/>
    <PlanetsView />
  </div>
</template>

<script>
import Header from '@/components/Header';
import PlanetsView from '@/views/PlanetsView';

export default {
  name: 'app',
  data() {
    return {
      planets: []
    }
  },
  components: {
    Header,
    PlanetsView
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      fetch("https://localhost:3000/api/planets")
      .then(res => res.json())
      .then(planets => this.planets = planets)
    }
  }
}
</script>

<style lang="css" scoped>
</style>
