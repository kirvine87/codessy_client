<template lang="html">
  <form v-on:submit="handleQuizSubmit">
    <div v-for="(question,questionIndex) in quiz.questions" :key="questionIndex" class="question-options">
      <label class="questionLine" for="question">{{question.question}}</label>
      <div class="optionsList" v-for="(option,optionIndex) in question.options" :key="optionIndex">
        <label for="optionIndex">
          <input class="optionLine" type="radio" name="questionIndex">
          {{option}}
        </label>
      </div>
    </div>

    <input type="submit">

  </form>
</template>

<script>
export default {
  name: "quiz-form",
  // props:["quiz"],
  data(){
    return {
      quiz:{
        questions: [
        {
          question: "How many moons does Mercury have?",
          answer: 0,
          options: [
            2,3,0,1
          ]
        },
        {
          question: "How large is the equitorial diameter of Mercury?",
          answer: "4,879",
          options: [
            "4,879", "5,232", "8,697", "3,972"
          ]
        },
        {
          question: "How far is Mercury from the Sun?",
          answer: "57,900,000",
          options: [
            "57,900,000", "58,900,000", "57,900,00", "67,900,000"
          ]
        }
      ]},
      answer1: null,
      answer2: null,
      answer3: null
    }
  },
  methods:{
    handleQuizSubmit(e){
      e.preventDefault();


    }
  },
  mounted(){

  }
}
</script>

<style lang="css" scoped>
</style>
