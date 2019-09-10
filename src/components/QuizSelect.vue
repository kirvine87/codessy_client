<template lang="html">
  <div>
    <div id="quiz-select">
      <select v-model="selected" @change="handleSelect">
        <option disabled value="">Select a Quiz</option>
        <option v-for="(quiz, index) in quizes" :value="quiz">{{quiz.name}}</option>
      </select>
    </div>
    <div class="form">
      <QuizForm v-if="selected" :quiz="selected" />
      <QuizResult v-if="selected" :answers="answers"/>
    </div>
  </div>
</template>

<script>
import QuizForm from '@/components/QuizForm';
import QuizResult from '@/components/QuizResult'

export default {
  name: 'quiz-select',
  props: ['quizes', 'chosenQuiz'],
  data() {
    return {
      selected: "",
      answers: []
    }
  },
  methods: {
    handleSelect() {
      this.answers = this.selected.questions.map((question) => {
        return question.answer
      })
    }
  },
  components: {
    QuizForm,
    QuizResult
  },
  watch: {
    chosenQuiz: function (newValue) {
      this.selected = newValue
    }
  }
}
</script>

<style lang="css" scoped>

select {
  margin-top: 1em;
  background-color: rgba(126, 70, 154, 0.6);
  color: #FFFFFF;
  font-size: 1.2em;
}

#quiz-select {
  display: flex;
  justify-content: center;
  width: 50%;
}

.form {
  display: flex;
  flex-direction: row;
}


</style>
