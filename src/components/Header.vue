<template lang="html">
  <div id="header">
    <h1>CCG</h1>
    <h6>CodeClan Glasgow</h6>
    <div id="nav">
      <router-link :to="{ name: 'planets-view'}"></router-link>
      <h3>Quiz</h3>
    </div>
    <PlanetsList :planets="planets" />
  </div>
</template>

<script>
import PlanetsList from '@/components/PlanetsList';

export default {
  name: "header",
  props: ["planets"],
  components: {
    PlanetsList
  }
}
</script>

<style lang="css" scoped>
#header{
  display: flex;
  flex-direction: column;
}

#nav{
  display: flex;
  flex-direction: column;
}
</style>
