<template lang="html">
  <div v-if="selectedAnswers" id="quiz-answers">
    <h1>Question Answers:</h1>
      <h3 v-for="answer of answers">{{answer}}</h3>
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
  watch: {
    answers: function (newValue) {
      this.selectedAnswers = null;
    }
  },
  methods: {
    counter() {
      let total = 0;
      this.answers.forEach((answer1) => this.selectedAnswers.forEach((answer2) =>
      {if(answer1 === answer2) {
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
  #quiz-answers {
    width: 50%;
    height: 100%;
    margin-top: 1em;
    border: 2px dashed white;
    background-color: rgba(255, 255, 255, 0.4);
  }
  h1,h2,h3 {
    text-align: center;
  }
</style>
