<template>
  <div class="quiz-container">
    <div v-if="loading">Chargement...</div>
    <div v-else-if="error">{{ error }}</div>
    <div v-else-if="category" class="quiz-content question-block">
      <Timer
        :duration="category.duration"
        @timer-end="handleTimeEnd"
        :key="currentQuestionIndex"
      />
      <div
        v-for="(question, index) in category.questions"
        :key="question.id"
        class="question-container"
        v-show="currentQuestionIndex === index"
      >
        <div class="flex-col">
          <p class="question-number">
            Question {{ currentQuestionIndex + 1 }} /
            {{ category.questions.length }}
          </p>
          <h3>{{ question.title }}</h3>
        </div>
        <div class="audio-container" v-if="question.content.sound_url">
          <audio controls>
            <source :src="question.content.sound_url" type="audio/mpeg" />
          </audio>
        </div>
        <div class="answers-container">
          <button
            v-for="answer in question.content.answers"
            :key="answer"
            @click="checkAnswer(question, answer)"
            :disabled="currentQuestionAnswered"
            :class="{
              'answer-button': true,
              disabled: currentQuestionAnswered,
              correct:
                currentQuestionAnswered &&
                answer.toLowerCase() === question.answer.toLowerCase(),
              incorrect:
                currentQuestionAnswered &&
                selectedAnswer === answer &&
                !currentQuestionCorrect,
            }"
          >
            {{ answer }}
          </button>
        </div>
        <div class="points">Points: {{ question.points }}</div>
        <div v-if="!isTimeUp" class="flex-col">
          <div
            v-if="currentQuestionAnswered && !currentQuestionCorrect"
            class="error-message"
          >
            incorrect !
          </div>
          <div v-if="questionTimeUp" class="error-message">
            Temps écoulé pour cette question !
          </div>
          <Button
            v-if="
              currentQuestionAnswered &&
              currentQuestionIndex < category.questions.length - 1
            "
            @click="nextQuestion"
            size="small"
            customClass="secondary"
          >
            Question suivante
          </Button>
        </div>
      </div>
    </div>
    <div class="total-score">Score actuel : {{ currentScore }}</div>
  </div>
</template>

<script>
import { api } from "@/services/api";
import Timer from "./Timer.vue";
import Button from "./Button.vue";

export default {
  name: "QuizBlindTest",
  components: { Timer, Button },
  props: {
    id: { type: String, required: true },
  },
  data() {
    return {
      category: null,
      loading: false,
      error: null,
      currentScore: 0,
      answeredQuestions: new Set(),
      currentQuestionIndex: 0,
      currentQuestionAnswered: false,
      currentQuestionCorrect: false,
      isTimeUp: false,
      selectedAnswer: null,
      questionTimeUp: false,
      skipLocked: false,
    };
  },
  created() {
    this.fetchBlindTestCategory();
  },
  methods: {
    async fetchBlindTestCategory() {
      this.loading = true;
      try {
        const data = await api.getCategoryData(this.id);
        this.category = data;
      } catch (error) {
        console.error("Error:", error);
        this.error = "Impossible de charger le blind test.";
      } finally {
        this.loading = false;
      }
    },
    checkAnswer(question, selectedAnswer) {
      if (this.answeredQuestions.has(question.id) || this.questionTimeUp)
        return;

      this.selectedAnswer = selectedAnswer;
      this.currentQuestionAnswered = true;

      const isCorrect =
        selectedAnswer.toLowerCase() === question.answer.toLowerCase();
      this.currentQuestionCorrect = isCorrect;

      if (isCorrect) {
        this.currentScore += question.points;
        this.answeredQuestions.add(question.id);
      }

      if (this.currentQuestionIndex === this.category.questions.length - 1) {
        this.goToResult();
      }
    },
    handleTimeEnd() {
      if (this.currentQuestionAnswered) return;

      this.questionTimeUp = true;
      this.currentQuestionAnswered = true;
    },
    nextQuestion() {
      if (this.skipLocked) return;
      this.skipLocked = true;

      if (this.currentQuestionIndex < this.category.questions.length - 1) {
        this.currentQuestionIndex++;
        this.currentQuestionAnswered = false;
        this.currentQuestionCorrect = false;
        this.selectedAnswer = null;
        this.questionTimeUp = false;

        setTimeout(() => {
          this.skipLocked = false;
        }, 500);
      } else {
        this.goToResult();
      }
    },
    goToResult() {
      const totalPoints = this.category.questions.reduce(
        (sum, q) => sum + q.points,
        0
      );
      this.$router.push({
        name: "Result",
        query: {
          score: this.currentScore,
          totalPoints,
          categoryId: this.id,
        },
      });
    },
  },
};
</script>

<style scoped>
.flex-col {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.audio-container {
  margin: 1rem 0;
}

.answers-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  gap: 1rem;
  margin: 1rem 0;
}

.answer-button {
  padding: 0.8rem;
  border: 2px solid var(--dark-green);
  border-radius: 4px;
  background: white;
  cursor: pointer;
  transition: all 0.3s ease;
}

.answer-button:hover {
  background: var(--dark-green);
  color: white;
}

.answer-button.disabled {
  cursor: not-allowed;
  opacity: 0.7;
}

.answer-button.correct {
  background-color: #4caf50;
  color: white;
  border-color: #4caf50;
}

.answer-button.incorrect {
  background-color: #f44336;
  color: white;
  border-color: #f44336;
}

.points {
  font-weight: bold;
  color: var(--dark-green);
}

.song-info {
  margin-top: 0.5rem;
  font-style: italic;
  color: var(--dark-grey);
}

.next-button:hover {
  opacity: 0.9;
}

.total-score {
  text-align: center;
  font-size: 1.5rem;
  font-weight: bold;
  margin-top: 2rem;
  color: white;
}

.error-message {
  color: red;
  margin: 1rem 0;
  text-align: center;
  font-weight: bold;
  animation: fadeIn 0.3s ease-in;
}

.time-over-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.time-over-content {
  background-color: white;
  padding: 2rem;
  border-radius: 8px;
  text-align: center;
  animation: fadeIn 0.5s ease-in;
}

.time-over-content h2 {
  color: #f44336;
  font-size: 2rem;
  margin-bottom: 1rem;
}

.question-number {
  text-align: center;
  font-size: 1.2rem;
  color: var(--primary-color);
  margin: 1rem;
  font-weight: bold;
}

.question-block {
  background-color: #f8f9fa;
  border-radius: 12px;
  padding: 2rem;
  margin: 2rem auto;
  max-width: 700px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
</style>
