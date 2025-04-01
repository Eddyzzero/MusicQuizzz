<template>
  <div class="result-container">
    <h1>Résultat du Quiz</h1>
    <p>Ton score final est :</p>
    <div class="score">{{ score }} points</div>
    <router-link to="/" class="btn">Retour à l'accueil</router-link>
  </div>
</template>

<script>
export default {
  name: "ResultView",
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
  color: #42b983;
  margin: 1.5rem 0;
  font-weight: bold;
}

.btn {
  display: inline-block;
  padding: 0.8rem 1.5rem;
  background-color: #42b983;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  font-weight: 600;
  transition: background-color 0.3s ease;
}

.btn:hover {
  background-color: #369f6f;
}
</style>
