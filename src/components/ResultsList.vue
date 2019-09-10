<template lang="html">
  <div id="results">
    <div :key="index" v-for="(result, index) in results">
      <h3>{{result.name}}:</h3>
      <h3 v-if="result.result">{{result.result}}</h3>
      <button v-if="!result.result" v-on:click="handleTakeQuizClick(quiz)">Take Quiz</button>
    </div>
  </div>
</template>

<script>

import {eventBus} from '@/main.js';

export default {
  name: 'results-list',
  props: ['results'],
  methods: {
    handleTakeQuizClick(quiz) {
      eventBus.$emit('quiz-select', quiz)
    }
  }
}
</script>

<style lang="css" scoped>
</style>
