<template lang="html">
  <div id="quiz-view">
    <h1>Test your Solar System Knowledge</h1>
    <!-- <PlanetSelect :quizes="quizes" /> -->
  </div>
</template>

<script>
// import PlanetSelect from '@/components/PlanetSelect';

export default {
  name: "planet-quiz-view",
  data(){
    return{
      quizes: []
    }
  },
  mounted(){
    this.fetchQuizes();
  },
  methods: {
    fetchQuizes() {
      fetch("http://localhost:3000/api/quizes")
      .then(res => res.json())
      .then(quizes => this.quizes = quizes)
    }
  },
  components: {
    // PlanetSelect
  }
}
</script>

<style lang="css" scoped>
</style>
