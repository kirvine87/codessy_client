<template lang="html">
  <div id="app">
    <Header :planets="planets"/>
    <router-view />
  </div>
</template>

<script>
import Header from '@/components/Header';

export default {
  name: 'app',
  data() {
    return {
      planets: []
    }
  },
  components: {
    Header
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
