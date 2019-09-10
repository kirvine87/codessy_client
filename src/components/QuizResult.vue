<template lang="html">
  <div id="quiz-answers">
    <h1>Question</h1>
    <ol>
      <li v-for="answer of answers">{{answer}}</li>
    </ol>
    <h2>Score: {{score}}</h2>
  </div>
</template>

<script>
import {eventBus} from '@/main.js';

export default {
  name: 'quiz-result',
  props: ['answers'],
  data() {
    return {
      selectedAnswers: null,
      score: 0
    }
  },
  mounted() {
    eventBus.$on('answers-selected', (selectedAnswers) => {
      this.selectedAnswers = selectedAnswers
      this.counter()
    })

  },
  methods: {
    counter() {
      let total = 0;
      this.answers.forEach((a1) => this.selectedAnswers.forEach((a2) =>
      {if(a1 === a2) {
        total+=1
      }
    }
  ));
  this.score = total;
}
}

}
</script>

<style lang="css" scoped>
  li {
    font-size: 1.5em;
  }
</style>
