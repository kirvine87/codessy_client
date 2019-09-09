<template lang="html">
  <div id="main">
    <h1>Your Codessy Across Our Solar System <img id="rocket" src="../assets/rocket_on.png" ></h1>
    <div id="mapid">
      <l-map ref="myMap" :minZoom="minZoom" :maxZoom="maxZoom" :max-bounds="maxBounds" :crs="crs">

        <l-image-overlay :url="url" :bounds="bounds"/>

        <l-marker v-for="planet in planets" :lat-lng="planet" :key="planet.name">
          <l-popup :content="planet.name" />
        </l-marker>

      </l-map>

    </div>
  </div>
</template>

<script>
import {CRS} from 'leaflet';
import {LMap, LImageOverlay, LMarker, LPopup} from 'vue2-leaflet';

export default {
  name: "planet-leaflet",
  components: {
    LMap,
    LImageOverlay,
    LMarker,
    LPopup
  },
  data(){
    return {
      url: "https://cdn.pixabay.com/photo/2014/09/08/09/24/solar-system-439046_1280.jpg",
      bounds:[[-300, 0], [0, 1000]],
      maxBounds:[[-300, 0], [0, 1000]],
      minZoom: 0,
      maxZoom: 2,
      crs: CRS.Simple,
      planets:[
        {name: "Sun", lat:-150, lng: 35},
        {name: "Mercury", lat:-150, lng: 115},
        {name: "Venus", lat:-150, lng: 165},
        {name: "Earth", lat:-150, lng: 240},
        {name: "Mars", lat:-150, lng: 315},
        {name: "Jupiter", lat:-150, lng: 460},
        {name: "Saturn", lat:-150, lng: 620},
        {name: "Uranus", lat:-150, lng: 780},
        {name: "Neptune", lat:-150, lng: 890},
      ],
      mapx: null,
      mapy: null
    }
  },
  mounted () {
      this.$refs.myMap.mapObject.fitBounds(this.bounds);
  }
}
</script>

<style lang="css" scoped>

h1{
  position: relative;
  margin-top: 0;
  text-align: center;
  top: -2%;
}

#mapid {
  height: 300px;
  width: 1000px;
  margin: 0 auto;
  margin-bottom: 1em;
  border: 1px white solid;
  border-radius: 8px;
}
.leaflet-container {
    background-color:rgba(255,0,0,0.0);
    border-radius: 8px;

}

#rocket {
  position: relative;
  height: 60px;
  top: 20px;
}


</style>
