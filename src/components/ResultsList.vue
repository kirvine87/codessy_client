<template lang="html">
  <div id="results">
    <h2 v-if="totalAverage">Your Average So Far: {{totalAverage}}%</h2>
    <div :key="index" v-for="(result, index) in results">
      <h3>{{result.name}}:</h3>
      <h3 v-if="result.result">You got {{result.result}}%!</h3>
      <router-link :to="{ name: 'planets-quiz-view', params: {planetName:result.name} }">
        <button v-if="!result.result">Take Quiz</button>
      </router-link>
      <router-link :to="{ name: 'planets-quiz-view', params: {planetName:result.name} }">
        <button v-if="result.result">Re-Take Quiz</button>
      </router-link>
    </div>
  </div>
</template>

<script>

export default {
  name: 'results-list',
  props: ['results'],
  data(){
    return {
      // totalAnswered:null
    }
  },
  computed: {
    totalAverage(){
      let totalPerc = 0;
      let totalAnswered = 0;

      this.results.forEach((result) => {
        if (result.result != null){
          totalAnswered++;
          totalPerc += result.result;
        };
      });
      return totalPerc/totalAnswered;
    }
  }
}
</script>

<style lang="css" scoped>
</style>
