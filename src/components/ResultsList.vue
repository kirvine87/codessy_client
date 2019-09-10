<template lang="html">
  <div id="results">
    <h3 :key="index" v-for="(result, index) in results">{{result.name}}: </h3>
    <h3 v-if="result" :result="result">{{result.result}}</h3>
  </div>
</template>

<script>

import {eventBus} from '@/main.js';

export default {
  name: 'results-list',
  props: ['results']
}
</script>

<style lang="css" scoped>
</style>
