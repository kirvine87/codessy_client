<template lang="html">
  <div id="main">
    <h1>Your Codessy Across Our Solar System</h1>
    <div class="image">
      <img src="../assets/solar-system.jpg" alt="planets">
    </div>
  </div>
</template>

<script>
export default {
  name: "planet-leaflet"
}
</script>

<style lang="css" scoped>
img{
  height: 18em;
  width: 95%;
}

.image {
  display: flex;
  justify-content: center;
}
</style>
