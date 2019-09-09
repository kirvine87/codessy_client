<template lang="html">
  <div>
    <div id="quiz-select">
      <select v-model="selected">
        <option disabled value="">Select a Quiz</option>
        <option v-for="(quiz, index) in quizes" :value="quiz">{{quiz.name}}</option>
      </select>
    </div>
    <div class="form">
      <QuizForm v-if="selected" :quiz="selected" />
    </div>
  </div>
</template>

<script>
import QuizForm from '@/components/QuizForm';

export default {
  name: 'quiz-select',
  props: ['quizes'],
  data() {
    return {
      selected: ""
    }
  },
  methods: {

  },
  components: {
    QuizForm
  }
}
</script>

<style lang="css" scoped>
</style>
