<template>
  <div class="answer-container">
    <div
      v-for="(answer, index) in answers"
      :key="index"
      class="answer-option"
      @click="selectAnswer(answer)"
    >
      {{ answer }}
    </div>
    <!-- Use the Btn component for the "Next Question" button -->
    <Button size="medium" customClass="primary" @click="nextQuestion">
      Question Suivante
    </Button>
  </div>
</template>

<script>
import Btn from "./Button.vue"; // Import the Btn component

export default {
  name: "Answer",
  components: {
    Button, // Register the Btn component
  },
  props: {
    answers: {
      type: Array,
      required: true,
    },
  },
  methods: {
    selectAnswer(answer) {
      this.$emit("answer-selected", answer);
    },
    nextQuestion() {
      this.$emit("next-question");
    },
  },
};
</script>

<style scoped>
.answer-container {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 2rem;
}

.answer-option {
  padding: 1rem;
  border: 2px solid var(--light-grey);
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease, border-color 0.3s ease;
}

.answer-option:hover {
  border-color: var(--primary-color);
}

.next-btn {
  margin-top: 1rem;
  align-self: flex-end;
}
</style>
