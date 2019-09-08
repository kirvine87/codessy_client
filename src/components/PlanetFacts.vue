<template lang="html">
  <div class="container">
    <h1>Facts about {{planet.name}}</h1>
    <div class="facts">
      <div class="card">
        <h3>Distance from sun:</h3>
        <p>{{planet.distance_from_sun}} km</p>
      </div>
      <div class="card">
        <h3>Planets equitorial diameter:</h3>
        <p>{{planet.equitorial_diameter}} km</p>
      </div>
      <div class="card">
        <h3>Number of moons:</h3>
        <p>{{planet.number_of_moons}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'planet-facts',
  props: ['planet']
}
</script>

<style lang="css" scoped>
div {
  display: flex;
  flex-flow: row wrap;
}
.card {
  display: flex;
  flex-direction: column;
  background-color: rgba(126, 70, 154, 0.6);
  border: 1px solid black;
  margin-right: 20px;
  width: 250px;
  height: 150px;
  border-radius: 10%;
  margin-bottom: 10px;
  padding-left: 20px;
  padding-right: 20px;
}
.container {
  display: flex;
  flex-flow: column;
}
h3 {
  font-size: 20px;
}
p {
  font-size: 20px;
  font-weight: bold;
}
</style>
