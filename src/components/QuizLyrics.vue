<template>
  <div v-if="questions.length > 0" class="quiz-container">
    <div v-if="currentQuestion" class="question-block flex-row-center">
      <Timer :key="currentIndex" :duration="10" @timer-end="handleTimerEnd" />
      <div class="flex-col">
        <p>
          {{ currentIndex + 1 }} / {{ questions.length }}
        </p>
        <h3> {{ currentQuestion.title }}</h3>
      </div>

      <p v-html="formatLyrics(currentQuestion.content.lyrics)" class="lyrics flex-row-center"></p>
      <p>
        <strong>Titre de la chanson :</strong>
        {{ currentQuestion.content.song_title }}
      </p>
      <p><strong>Auteur :</strong> {{ currentQuestion.content.song_author }}</p>

      <input type="text" v-model="userAnswer" placeholder="Votre réponse..." @keyup.enter="checkAnswer" />

      <div class="flex-row">
        <Button @click="checkAnswer" size="large" customClass="secondary" :disabled="isTimeUp || showNextButton">
          Valider
        </Button>
      </div>

      <div class="flex-row-center">
        <p v-if="feedback" :class="{ correct: isCorrect, incorrect: !isCorrect }">
          {{ feedback }}
        </p>

        <Button v-if="showNextButton" @click="goToNextQuestion" size="small" customClass="secondary">
          Question suivante
        </Button>
      </div>
      <div class="flex-row">
        <p> Points : {{ currentQuestion.points }}</p>
      </div>
    </div>
    <div class="total-score">Score actuel : {{ currentScore }} pts</div>
  </div>
  <p v-else>Aucune question disponible.</p>
</template>

<script>
import Button from "@/components/Button.vue";
import Timer from "@/components/Timer.vue";

export default {
  components: { Button, Timer },
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
      isTimeUp: false,
      currentScore: 0,
      answeredQuestions: new Set(),
      nextLocked: false,
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
      if (this.answeredQuestions.has(this.currentQuestion.id)) return;

      const user = this.userAnswer.trim().toLowerCase();
      const correct = this.currentQuestion.answer.trim().toLowerCase();
      this.isCorrect = user === correct;

      if (this.isCorrect) {
        this.currentScore += this.currentQuestion.points;
        this.feedback = `Bonne réponse ! +${this.currentQuestion.points} pts`;
      } else {
        this.feedback = `Mauvaise réponse. La bonne réponse était : "${this.currentQuestion.answer}"`;
      }

      this.showNextButton = true;
      this.answeredQuestions.add(this.currentQuestion.id);
    },

    handleTimerEnd() {
      if (!this.showNextButton) {
        this.feedback = `Temps écoulé ! La bonne réponse était : "${this.currentQuestion.answer}"`;
        this.isCorrect = false;
        this.isTimeUp = true;
        this.showNextButton = true;
        this.answeredQuestions.add(this.currentQuestion.id);
      }
    },

    goToNextQuestion() {
      if (this.nextLocked) return;
      this.nextLocked = true;

      if (this.currentIndex < this.questions.length - 1) {
        this.currentIndex++;
        setTimeout(() => {
          this.resetState(); // attend que l'affichage se fasse
        }, 50);
      } else {
        this.$router.push({
          name: "Result",
          query: { score: this.currentScore },
        });
      }
    },

    resetState() {
      this.userAnswer = "";
      this.feedback = "";
      this.isCorrect = false;
      this.showNextButton = false;
      this.isTimeUp = false;
      this.nextLocked = false;
    },
  },
};
</script>

<style scoped>
.question-block {
  background-color: #f8f9fa;
  border-radius: 12px;
  padding: 2rem;
  margin: 2rem auto;
  max-width: 700px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);

}

.question-block h3 {
  font-size: 1.5rem;
  color: #2c3e50;
  margin: 1rem;
}

.flex-row {
  display: flex;
  justify-content: end;
  align-items: center;
}

.flex-col {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.flex-row-center {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.flex-row-start {
  display: flex;
  justify-content: start;
  align-items: center;
}

.total-score {
  text-align: center;
  font-size: 1.5rem;
  font-weight: bold;
  margin-top: 2rem;
  color: var(--primary-color);
}

.lyrics {
  font-style: italic;
  background-color: #eef3f7;
  padding: 1rem;
  border-left: 4px solid #42b983;
  margin: 1rem 0;
  white-space: pre-line;
  border-radius: 8px;
}

.question-block p {
  margin: 0.5rem 0;
  font-size: 1rem;
}

input[type="text"] {
  width: 100%;
  padding: 0.75rem 1rem;
  margin-top: 1rem;
  font-size: 1rem;
  border-radius: 6px;
  border: 1px solid #ccc;
  box-sizing: border-box;
  transition: border-color 0.3s ease;
}

input[type="text"]:focus {
  border-color: #42b983;
  outline: none;
}

button,
.btn {
  margin-top: 1rem;
}

.correct {
  color: green;
  font-weight: bold;
  margin-top: 1rem;
}

.incorrect {
  color: red;
  font-weight: bold;
  margin-top: 1rem;
}

@media (max-width: 768px) {
  .question-block {
    padding: 1.5rem;
    margin: 1rem;
  }

  .question-block h3 {
    font-size: 1.25rem;
  }

  input[type="text"] {
    font-size: 0.95rem;
  }
}
</style>
