<template lang="html">
  <form class="quizContainner" v-on:submit="handleQuizSubmit">

    <div v-if="quiz.questions[0]" class="question">
      <label class="questionLine" for="question1">{{quiz.questions[0].question}}</label>
      <div class="optionsList" v-for="(option,optionIndex) in quiz.questions[0].options" :key="optionIndex" >
        <label for="optionIndex">
          <input required class="optionLine" type="radio" name="question1" v-model="answer1" :value="option">
          {{option}}
        </label>
      </div>
    </div>

    <div v-if="quiz.questions[1]" class="question">
      <label class="questionLine" for="question2">{{quiz.questions[1].question}}</label>
      <div class="optionsList" v-for="(option,optionIndex) in quiz.questions[1].options" :key="optionIndex">
        <label for="optionIndex">
          <input required class="optionLine" type="radio" name="question2" v-model="answer2" :value="option">
          {{option}}
        </label>
      </div>
    </div>

    <div v-if="quiz.questions[2]" class="question">
      <label class="questionLine" for="question3">{{quiz.questions[2].question}}</label>
      <div class="optionsList" v-for="(option,optionIndex) in quiz.questions[2].options" :key="optionIndex">
        <label for="optionIndex">
          <input required class="optionLine" type="radio" name="question3" v-model="answer3" :value="option">
          {{option}}
        </label>
      </div>
    </div>

    <div v-if="quiz.questions[3]" class="question">
      <label class="questionLine" for="question4">{{quiz.questions[3].question}}</label>
      <div class="optionsList" v-for="(option,optionIndex) in quiz.questions[3].options" :key="optionIndex">
        <label for="optionIndex">
          <input required class="optionLine" type="radio" name="question4" v-model="answer4" :value="option">
          {{option}}
        </label>
      </div>
    </div>

    <div v-if="quiz.questions[4]" class="question">
      <label class="questionLine" for="question5">{{quiz.questions[4].question}}</label>
      <div class="optionsList" v-for="(option,optionIndex) in quiz.questions[4].options" :key="optionIndex" >
        <label for="optionIndex">
          <input required class="optionLine" type="radio" name="question5" v-model="answer5" :value="option">
          {{option}}
        </label>
      </div>
    </div>

    <div v-if="quiz.questions[5]" class="question">
      <label class="questionLine" for="question6">{{quiz.questions[5].question}}</label>
      <div class="optionsList" v-for="(option,optionIndex) in quiz.questions[5].options" :key="optionIndex">
        <label for="optionIndex">
          <input required class="optionLine" type="radio" name="question6" v-model="answer6" :value="option">
          {{option}}
        </label>
      </div>
    </div>

    <div v-if="quiz.questions[6]" class="question">
      <label class="questionLine" for="question7">{{quiz.questions[6].question}}</label>
      <div class="optionsList" v-for="(option,optionIndex) in quiz.questions[6].options" :key="optionIndex">
        <label for="optionIndex">
          <input required class="optionLine" type="radio" name="question7" v-model="answer7" :value="option">
          {{option}}
        </label>
      </div>
    </div>

    <div v-if="quiz.questions[7]" class="question">
      <label class="questionLine" for="question8">{{quiz.questions[7].question}}</label>
      <div class="optionsList" v-for="(option,optionIndex) in quiz.questions[7].options" :key="optionIndex">
        <label for="optionIndex">
          <input required class="optionLine" type="radio" name="question8" v-model="answer8" :value="option">
          {{option}}
        </label>
      </div>
    </div>


    <input class="submitForm" type="submit" value="Check Answers!">

  </form>
</template>

<script>
import {eventBus} from '@/main.js';

export default {
  name: "quiz-form",
  props:["quiz"],
  data(){
    return {
      answer1: null,
      answer2: null,
      answer3: null,
      answer4: null,
      answer5: null,
      answer6: null,
      answer7: null,
      answer8: null,
      selectedAnswers: []
    }
  },
  watch: {
    quiz: function (newValue) {
      this.answer1 = this.answer2 = this.answer3 = this.answer4 = this.answer5 = this.answer6 = this.answer7 = this.answer8 = null
    }
  },
  methods:{
    handleQuizSubmit(e){
      e.preventDefault();

      this.selectedAnswers = [
        this.answer1,
        this.answer2,
        this.answer3,
        this.answer4,
        this.answer5,
        this.answer6,
        this.answer7,
        this.answer8
      ]

      eventBus.$emit('answers-selected', this.selectedAnswers)

    }
  },
  mounted(){

  }
}
</script>

<style lang="css" scoped>
.question {
  display: flex;
  flex-direction: column;
  background-color: rgba(126, 70, 154, 0.6);
  border: 1px solid black;
  margin-top: 20px;
  margin-bottom: 20px;
  margin-left: 16px;
  width: 88%;
  border-radius: 10px;
  padding-left: 20px;
  padding-bottom: 20px;
  padding-right: 20px;
  align-items: stretch;
}

.quizContainner {
  background-color: rgba(255, 255, 255, 0.4);
  width: 50%;
  height: 65vh;
  padding: 1em;
  margin-top: 1em;
  margin-bottom: 1em;
  margin-right: 1em;
  border: 2px dashed white;
  overflow: scroll;
}

.questionLine {
  padding-top: 1em;
  font-size: 1.2em;
}

.optionsList {
  margin-top: 0.2em;
}

.submitForm {
  display: flex;
  background-color: rgba(126, 70, 154, 0.6);
  color: white;
  margin: auto;
  font-size: 1.2em;
  border-radius: 8px;
}

</style>
