<template lang="html">
  <div id="nav-header">
    <h1>CCG</h1>
    <h6>CodeClan Glasgow</h6>
    <div id="nav">
      <router-link :to="{ name: 'planets-view'}">Home</router-link>
      <h3>Quiz</h3>
    </div>
    <PlanetsList :planets="planets" />
  </div>
</template>

<script>
import PlanetsList from '@/components/PlanetsList';

export default {
  name: "ccg-header",
  props: ["planets"],
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

h3, a{
  color: white;
  font-size: 1.5em;
  font-weight: normal;
  text-decoration: none;
}

h3:hover, a:hover{
  background-color: rgba(255, 255, 255, 0.4);
}

</style>
