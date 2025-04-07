<template>
  <div class="result-container-background">
    <div class="result-container">
      <h1>Résultat du Quiz</h1>
      <p>Ton score final est :</p>
      <div class="score">{{ score }} points</div>
      <router-link to="/">
        <Button size="large" custom-class="primary"> Retour à l'accueil</Button>
      </router-link>
    </div>
  </div>
</template>

<script>
import Button from '@/components/Button.vue';


export default {
  name: "ResultView",

  components: {
    Button
  },

  data() {
    return {
      score: 0,
    };

  },
  created() {
    this.score = parseInt(this.$route.query.score) || 0;
  },
};
</script>

<style scoped>
.result-container-background {

  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  background-image: url("/images/music-quiz-background.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

}

.result-container {
  max-width: 600px;
  margin: 4rem auto;
  padding: 2rem;
  text-align: center;
  border-radius: 10px;
  background-color: #f1f3f6;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);


}

.result-container h1 {
  font-size: 2rem;
  color: #2c3e50;
  margin-bottom: 1rem;
}

.score {
  font-size: 2.5rem;
  color: var(--dark-green);
  margin: 1.5rem 0;
  font-weight: bold;
}
</style>
