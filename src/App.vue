<template lang="html">
  <div id="app">
    <CCGHeader :planets="planets"/>
    <router-view />
  </div>
</template>

<script>
import CCGHeader from '@/components/CCGHeader';

export default {
  name: 'app',
  data() {
    return {
      planets: []
    }
  },
  components: {
    CCGHeader
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      fetch("http://localhost:3000/api/planets")
      .then(res => res.json())
      .then(planets => this.planets = planets)
    }
  }
}
</script>

<style lang="css" scoped>
</style>
