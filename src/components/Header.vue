 <template lang="html">
   <div id="header">
     <h3>Home</h3>
     <h3>Quiz</h3>
     <PlanetsList :planets="planets" />
   </div>
 </template>

 <script>
 import PlanetsList from '@/components/PlanetsList';

 export default {
   name: "header",
   props: ["planets"],
   components: {
     PlanetsList
   }
 }
 </script>

 <style lang="css" scoped>
 </style>
