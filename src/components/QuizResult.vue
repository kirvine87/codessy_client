<template lang="html">
  <div  v-if="selectedAnswers" id="score-img">

    <h1>Question Answers:</h1>
    <div id="quiz-answers">

      <h3 v-for="answer of answers">{{answer}}</h3>
      <h2>Score: {{score}}%</h2>
    </div>
    <img v-if="score >= 60.00" src="https://media.discordapp.net/attachments/471000631700619284/621124455426686997/astronauthead3k.png" alt="female astronaut giving thumbs up">
  </div>

</template>

<script>
import {eventBus} from '@/main.js';
import ResultService from '@/services/ResultService.js'

export default {
  name: 'quiz-result',
  props: ['answers', 'quizName'],
  data() {
    return {
      selectedAnswers: null,
      score: 0,
      results: null,
      resultId: null
    }
  },
  mounted() {
    eventBus.$on('answers-selected', (selectedAnswers) => {
      this.selectedAnswers = selectedAnswers

      this.counter()
//for the put request - sending two put request on changing view.
      fetch("http://localhost:3000/api/results")
      .then(res => res.json())
      .then(results => this.results = results)
      .then((results) => {
        if (this.quizName) {
          results.forEach((result) => {
            if(this.quizName === result.name) {
              this.resultId = result._id;
            };
          })
        }
        let updatedScore = {result: this.score};
        ResultService.updateResult(updatedScore, this.resultId)
      })


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
      this.answers.forEach((answer1) => this.selectedAnswers.forEach((answer2) => {
        if(answer1 === answer2) {
          total+=1
        }
      }
    ));
    this.score = ((total/this.answers.length) * 100).toFixed(2)
  }
}

}
</script>

<style lang="css" scoped>
li {
  font-size: 1.5em;
}
#quiz-answers {
  height: 40vh;
  border: dashed white 2px;
  width: 50%;
  overflow: scroll;
  margin: 0 auto;
}

h1,h2,h3 {
  text-align: center;
}

#score-img{
  display: flex;
  flex-direction: column;
  width: 50%;
  height: 100%;
  margin-top: 1em;
  border: 2px dashed white;
  background-color: rgba(255, 255, 255, 0.4);
}

img{
  height: 20vh;
  object-fit:contain;
}
</style>
