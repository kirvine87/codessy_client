<template lang="html">
  <div class="results-view">
    <h1>Your quiz results are: </h1>
    <ResultsList :results="results" />
  </div>
</template>

<script>

import ResultsList from '@/components/ResultsList.vue';
import {eventBus} from '@/main.js';

export default {
  name: 'results-view',
  data() {
    return {
      results: []
    }
  },
  components: {
    ResultsList
  },
  mounted() {
    this.fetchResults();
  },
  methods: {
    fetchResults() {
      fetch("http://localhost:3000/api/results")
      .then(res => res.json())
      .then(results => this.results = results)
    }
  }
}
</script>

<style lang="css" scoped>
h1{
  margin:0;
}

#results-view{
  display: flex;
  flex-direction: column;
  height: 90vh;
}
</style>
