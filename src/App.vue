<template lang="html">
  <div class="">
    <div id="app">
      <div id="ccg-header">
        <CCGHeader :planets="planets"/>
      </div>
      <div id="main">
        <router-view />
      </div>
    </div>
    <h3>Created by Kevin Seenan, Kyle Irvine, Gillian Shanks</h3>

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

<style>
  body{
    margin: 0;
    background-color: black;
    background-image: url('./assets/milky_way.jpg');
    background-size: cover;
    color: white;
  }
</style>

<style lang="css" scoped>
#app{
  display: flex;
  flex-direction: row;
  padding: 1em;
  height: 90vh;
  border: green 1px solid;
}

#ccg-header{
  width: 10%;
  padding: 1em;
}

#main{
  margin: 0 auto;
  padding: 1em;
}

h3{
  margin: 0;
  text-align: right;
  padding-right: 1em;
}
</style>
