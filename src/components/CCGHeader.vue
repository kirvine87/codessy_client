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
}

#nav{
  display: flex;
  flex-direction: column;
}
</style>
