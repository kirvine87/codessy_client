<template lang="html">
  <div id="results">
    <div :key="index" v-for="(result, index) in results">
      <h3>{{result.name}}:</h3>
      <h3 v-if="result.result">{{result.result}}</h3>
      <router-link :to="{ name: 'planets-quiz-view', params: {planetName:result.name} }">
        <button v-if="!result.result">Take Quiz</button>
      </router-link>
    </div>
  </div>
</template>

<script>

export default {
  name: 'results-list',
  props: ['results']
}
</script>

<style lang="css" scoped>
</style>
