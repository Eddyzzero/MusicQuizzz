<template>
  <div class="result-container">
    <h2>🎉 Quiz Terminé !</h2>
    <p>
      Votre Score: <strong>{{ score }}/{{ totalQuestions }}</strong>
    </p>
    <p v-if="score >= totalQuestions / 2">👏 Bravo, bon score !</p>
    <p v-else>😅 Ce sera mieux la prochaine fois !</p>

    <div class="button-group">
      <button @click="restartQuiz">🔄 Rejouer</button>
      <button @click="goHome">🏠 Accueil</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    score: { type: Number, required: true },
    totalQuestions: { type: Number, required: true },
  },
  methods: {
    restartQuiz() {
      this.$emit("restart");
    },
    goHome() {
      this.$router.push("/"); // Navigates to the home page
    },
  },
};
</script>

<style scoped>
.result-container {
  text-align: center;
  font-size: 1.5rem;
  margin-top: 30px;
}

.button-group {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 15px;
}

button {
  padding: 10px 20px;
  font-size: 1.2rem;
  cursor: pointer;
  background-color: var(--dark-green);
  color: white;
  border: none;
  border-radius: 5px;
}

button:hover {
  background-color: var(--light-green);
}
</style>
