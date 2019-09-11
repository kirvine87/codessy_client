<template lang="html">
  <div class="results-view">
    <h1>Your Quiz Results! <img id="rocket" src="../assets/rocket_on.png" ></h1>
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
  position: relative;
  margin-top: 0;
  text-align: center;
  top: -2%;
}

#results-view{
  display: flex;
  flex-direction: column;
}
#rocket {
  position: relative;
  height: 60px;
  top: 20px;
}
</style>
