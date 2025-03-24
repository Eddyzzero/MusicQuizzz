<template>
  <div v-if="questions.length > 0">
    <div v-if="currentQuestion" class="question-block">
      <h3>{{ currentQuestion.title }}</h3>

      <p
        v-html="formatLyrics(currentQuestion.content.lyrics)"
        class="lyrics"
      ></p>

      <p>
        <strong>Titre de la chanson :</strong>
        {{ currentQuestion.content.song_title }}
      </p>
      <p><strong>Auteur :</strong> {{ currentQuestion.content.song_author }}</p>

      <input
        type="text"
        v-model="userAnswer"
        placeholder="Votre réponse..."
        @keyup.enter="checkAnswer"
      />
      <button @click="checkAnswer">Valider</button>

      <p v-if="feedback" :class="{ correct: isCorrect, incorrect: !isCorrect }">
        {{ feedback }}
      </p>

      <button
        v-if="showNextButton"
        @click="nextQuestion"
        class="btn small secondary"
      >
        Question suivante
      </button>
    </div>
  </div>
  <p v-else>Aucune question disponible.</p>
</template>

<script>
import Button from "@/components/Button.vue";
export default {
  components: {
    Button,
  },
  name: "QuizLyrics",
  props: {
    questions: Array,
  },
  data() {
    return {
      currentIndex: 0,
      userAnswer: "",
      feedback: "",
      isCorrect: false,
      showNextButton: false,
    };
  },
  computed: {
    currentQuestion() {
      return this.questions[this.currentIndex];
    },
  },
  methods: {
    formatLyrics(lyrics) {
      return lyrics.replace(/<br\s*\/?>/gi, "<br>");
    },
    checkAnswer() {
      const user = this.userAnswer.trim().toLowerCase();
      const correct = this.currentQuestion.answer.trim().toLowerCase();
      this.isCorrect = user === correct;
      this.feedback = this.isCorrect
        ? "Bonne réponse !"
        : `Mauvaise réponse. La bonne réponse était : "${this.currentQuestion.answer}"`;
      this.showNextButton = true;
    },
    nextQuestion() {
      if (this.currentIndex < this.questions.length - 1) {
        this.currentIndex++;
        this.resetState();
      } else {
        this.feedback = "Fin du quiz !";
        this.showNextButton = false;
      }
    },
    resetState() {
      this.userAnswer = "";
      this.feedback = "";
      this.isCorrect = false;
      this.showNextButton = false;
    },
  },
};
</script>
<style></style>
