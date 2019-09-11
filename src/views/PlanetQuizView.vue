<template lang="html">
  <div id="quiz-view">
    <h1>Test Your Solar System Knowledge <img id="rocket" src="../assets/rocket_on.png" ></h1>
    <div id="select-form">
      <QuizSelect :quizes="quizes" :chosenQuiz="chosenQuiz" />
    </div>
  </div>
</template>

<script>
import QuizSelect from '@/components/QuizSelect';

export default {
  name: "planet-quiz-view",
  props: ['planetName'],
  data(){
    return{
      quizes: [],
      chosenQuiz: {}
    }
  },
  mounted(){
    this.fetchQuizes();

  },
  methods: {
    fetchQuizes() {
      fetch("http://localhost:3000/api/quizes")
      .then(res => res.json())
      .then(quizes => this.quizes = quizes)
      .then((quizes) => {if (this.planetName) {
        quizes.forEach((quiz) => {
          if(this.planetName === quiz.name) {
            this.chosenQuiz = quiz;
          };
        })
      }
    })
    },
  },
  components: {
    QuizSelect
  }
}
</script>

<style lang="css" scoped>

h1{
  position: relative;
  margin-top: 0;
  text-align: center;
  top: -2%;
}

#quiz-view{
  display: flex;
  flex-direction: column;
  height: 90vh;
}

#rocket {
  position: relative;
  height: 60px;
  top: 20px;
}

</style>
