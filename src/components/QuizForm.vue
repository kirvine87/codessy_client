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
      selectedAnswers: []
    }
  },
  methods:{
    handleQuizSubmit(e){
      e.preventDefault();

      this.selectedAnswers = [
        this.answer1,
        this.answer2,
        this.answer3
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
  padding: 1em;
  margin-top: 1em;
  margin-bottom: 1em;
  margin-right: 1em;
  border: 2px dashed white;
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
