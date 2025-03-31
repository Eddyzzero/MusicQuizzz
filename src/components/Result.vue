<template>
  <div class="result-container">
    <h2>🎉 Quiz Terminé !</h2>
    <p>
      Votre Score: <strong>{{ score }}/{{ totalQuestions }}</strong>
    </p>
    <p v-if="score >= totalQuestions / 2">👏 Bravo, bon score !</p>
    <p v-else>😅 Ce sera mieux la prochaine fois !</p>

    <button @click="restartQuiz">🔄 Rejouer</button>
  </div>
</template>

<script setup>
defineProps({
  score: { type: Number, required: true },
  totalQuestions: { type: Number, required: true },
});

const emit = defineEmits(["restart"]);

const restartQuiz = () => {
  emit("restart");
};
</script>

<style scoped>
.result-container {
  text-align: center;
  font-size: 1.5rem;
  margin-top: 30px;
}

button {
  margin-top: 15px;
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
