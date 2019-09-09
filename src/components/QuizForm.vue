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


    }
  },
  mounted(){

  }
}
</script>

<style lang="css" scoped>
</style>
