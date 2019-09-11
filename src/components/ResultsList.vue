<template lang="html">
  <div id="results-image">

  <div id="results">
    <div v-if="totalAverage >= 0.00">
      <h2 id="avg">Your Average Score So Far: </h2>
      <p>{{totalAverage}}%</p>
    </div>

    <div :key="index" v-for="(result, index) in results">
      <h3>{{result.name}}:</h3>
      <div class="has-score">
        <h3 v-if="result.result">You got {{result.result}}%!</h3>
        <div class="re-take-btn">
          <router-link :to="{ name: 'planets-quiz-view', params: {planetName:result.name} }">
            <button v-if="result.result">Re-Take Quiz</button>
          </router-link>
        </div>

      </div>

      <router-link :to="{ name: 'planets-quiz-view', params: {planetName:result.name} }">
        <button v-if="!result.result">Take Quiz</button>
      </router-link>

    </div>
  </div>

  <img v-if="totalAverage >= 60.00" src="https://media.discordapp.net/attachments/471000631700619284/621124237943373824/astronaut-rectangle-flip.png" alt="female astronaut giving thumbs up">
</div>
</template>

<script>

export default {
  name: 'results-list',
  props: ['results'],
  data(){
    return {
    }
  },
  computed: {
    totalAverage(){
      let totalPerc = 0.00;
      let totalAnswered = 0;

      this.results.forEach((result) => {
        if (result.result != null){
          totalAnswered++;
          totalPerc += parseFloat(result.result);
        };
      });

      let average = (totalPerc/totalAnswered).toFixed(2);
      if (!average){
        return 0
      } else {
        return average
      }
    }
  }
}
</script>

<style lang="css" scoped>

#results-image{
  display: flex;
  flex-direction: row;
  flex:1;
  justify-content: space-between;
}

#results{
  height: 78vh;
  width: 30vw;
  overflow: scroll;
  background-color: rgba(255, 255, 255, 0.4);
  border: 2px dashed white;
  padding-left: 1em;
}

img{
  height: 80vh;
  object-fit:cover;
}

button {
  margin: 0.5em;
  background-color: rgba(126, 70, 154, 0.6);
  color: #FFFFFF;
  font-size: 1.2em;

}

button:hover {
  cursor: pointer;
}

h3{
  margin:1em 0 0 0;
  padding:0;
}

.has-score{
  display: flex;
  flex-direction: row;
}

p{
  font-size: 1.5em;
  text-align: center;
}
#avg{
  text-align: center;
}
</style>
