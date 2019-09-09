<template lang="html">
  <form v-on:submit="handleQuizSubmit">

    <div v-if="quiz.questions[0]" class="question1">
      <label class="questionLine" for="question1">{{quiz.questions[0].question}}</label>
      <div class="optionsList" v-for="(option,optionIndex) in quiz.questions[0].options" :key="optionIndex" >
        <label for="optionIndex">
          <input class="optionLine" type="radio" name="question1" v-model="answer1" :value="option">
          {{option}}
        </label>
      </div>
    </div>

    <div v-if="quiz.questions[1]" class="question2">
      <label class="questionLine" for="question2">{{quiz.questions[1].question}}</label>
      <div class="optionsList" v-for="(option,optionIndex) in quiz.questions[1].options" :key="optionIndex">
        <label for="optionIndex">
          <input class="optionLine" type="radio" name="question2" v-model="answer2" :value="option">
          {{option}}
        </label>
      </div>
    </div>

    <div v-if="quiz.questions[2]" class="question3">
      <label class="questionLine" for="question3">{{quiz.questions[2].question}}</label>
      <div class="optionsList" v-for="(option,optionIndex) in quiz.questions[2].options" :key="optionIndex">
        <label for="optionIndex">
          <input class="optionLine" type="radio" name="question3" v-model="answer3" :value="option">
          {{option}}
        </label>
      </div>
    </div>


    <input type="submit" value="Check Answers!">

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
      answer3: null
    }
  },
  methods:{
    handleQuizSubmit(e){
      e.preventDefault();

      const selectedAnswers = {
        answer1: this.answer1,
        answer2: this.answer2,
        answer3: this.answer3
      }

      eventBus.$emit('answers-selected', selectedAnswers)

      this.answer1 = this.answer2 = this.answer3 = null;



    }
  },
  mounted(){

  }
}
</script>

<style lang="css" scoped>
</style>
