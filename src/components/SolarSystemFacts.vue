<template lang="html">

  <div id="container">
    <h1>Facts about our solar system</h1>
    <div class="facts">
      <div class="card">
        <p>"Solar" - of the sun.</p>
        <p>"System" - a collection of objects that interact to form a whole.</p>
      </div>

      <div class="card">
        <p>Located in an outer spiral<br>rim of the Milky Way galaxy.</p>
      </div>

      <div class="card">
        <h3>Age:</h3>
        <p>4.6 Billion Years</p>
      </div>

      <div class="card">
        <h3>Number of Planets:</h3>
        <p>8</p>
      </div>

      <div class="card">
        <h3>Number of Dwarf Planets:</h3>
        <p>5</p>
      </div>

      <div class="card">
        <p>All planets orbit the sun</p>
      </div>

      <div class="card">
        <h3>Number of Moons:</h3>
        <p>181</p>
      </div>

      <div class="card">
        <h3>Number of Asteroids:</h3>
        <p>552,894</p>
      </div>

      <div class="card">
        <h3>Number of Comets:</h3>
        <p>3,083</p>
      </div>

      <div class="card">
        <h3>Diameter:</h3>
        <p>18.75 trillion km (11.65 trillion miles)</p>
      </div>

      <div class="card">
        <p>Planets located in both the inner and outer solar system.</p>
      </div>
    </div>

    <h3>The Inner Solar System</h3>
    <div class="facts">
      <div class="card">
        <h3>The planets:</h3>
        <p>Mercury, Venus, Earth and Mars</p>
      </div>
      <div class="card">
        <h3>Type: Terrestrial</h3>
        <p>Composed mainly of silicates and metals</p>
      </div>
      <div class="card">
        <h3>Planet terrains:</h3>
        <p>Dense, rocky compositions, few or no moons and no ring systems.</p>
      </div>
      <div class="card">
        <h3>Planet features:</h3>
        <p>Impact craters and tectonic surface features, such as rift valleys and volcanoes.</p>
      </div>
      <div class="card">
        <h3>Close to the sun:</h3>
        <p>Radius of this entire region is less than the distance between the orbits of Jupiter and Saturn.</p>
      </div>
      <div class="card">
        <h3>Able to generate weather?</h3>
        <p>Venus, Earth and Mars - YES! (Not Mercury though)</p>
      </div>
      <div class="card">
        <h3>Inferior Planets:</h3>
        <p>Mercury and Venus - because they are closer to the Sun than Earth!</p>
      </div>
      <!-- <p>The inner solar system is the region made up of Mercury, Venus, Earth and Mars as well as the asteroid belt. These planets are known as terrestrial planets and are composed mainly of silicates and metals. Terrestrial planets are relatively close to the sun and the radius of this entire region is less than the distance between the orbits of Jupiter and Saturn. The four planets within this region have dense, rocky compositions, few or no moons and no ring systems. Venus, Earth and Mars have atmospheres that are able to generate weather. They also have impact craters and tectonic surface features, such as rift valleys and volcanoes. Mercury and Venus are also known as inferior planets because they are closer to the sun than Earth. </p> -->
    </div>
    <h3>The Outer Solar System</h3>
    <div class="facts">
      <div class="card">
        <h3>The planets:</h3>
        <p>Jupiter, Saturn, Uranus and Neptune and their moons.</p>
      </div>
      <div class="card">
        <h3>Type: Gas Giants</h3>
        <p>Higher proportion of volatiles than the inner planets: water, ammonia and methane.</p>
      </div>
      <div class="card">
        <h3>Planet terrains:</h3>
        <p>These "gases" remain solid due to the lower temperatures of the planets being further from the sun.</p>
      </div>
      <div class="card">
        <h3>Asteroid Belt:</h3>
        <p>Separates the inner and outer solar system.</p>
      </div>
      <div class="card">
        <h3>Moons:</h3>
        <p>Unlike the inner system these planets have dozens of moons.</p>
      </div>
      <div class="card">
        <h3>BIG Planets:</h3>
        <p>Make up 99% of the mass that orbits the sun!</p>
      </div>
      <!-- <p>The outer solar system is the region made up of the giant planets Jupiter, Saturn, Uranus and Neptune ands their moons. The centaurs and many short-period comets also orbit this region.
        Due to their greater distance from the sun, the objects in the outer solar system contain a higher proportion of volatiles, such as water, ammonia and methane than the inner planets.
        These components remain solid due to the lower temperatures of the planets being further from the sun.
      </p> -->
    </div>
  </div>
</div>

</template>

<script>
export default {
  name: "solar-system-facts"
}
</script>

<style lang="css" scoped>

.facts {
  display: flex;
  flex-flow: row wrap;
}

.card {
  display: flex;
  flex-direction: column;
  background-color: rgba(126, 70, 154, 0.6);
  border: 1px solid black;
  margin-right: 20px;
  width: 300px;
  height: 150px;
  border-radius: 10%;
  margin-bottom: 10px;
  padding-left: 20px;
  padding-right: 20px;
  align-items: stretch;
}

#container {
  display: flex;
  flex-flow: column;
}

h3 {
  font-size: 20px;
  margin-bottom: 0;
}

p {
  font-size: 20px;
  font-weight: bold;
}

</style>
