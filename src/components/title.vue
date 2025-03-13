<template>
  <div>
    <h1>{{ title }}</h1>
    <select v-model="categoryId" @change="changeCategory(categoryId)">
      <option
        v-for="category in categories"
        :key="category.id"
        :value="category.id"
      >
        {{ category.title }}
      </option>
    </select>
    <!-- Afficher les détails de la question -->
    <div v-if="currentQuestion">
      <h2>{{ currentQuestion.title }}</h2>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "TitleComponent",
  data() {
    return {
      title: "Quizz Musical",
      questionsId: [],
      randomTitle: [],
      categoryId: 1,
      currentQuestion: null,
      categories: [],
    };
  },

  async mounted() {
    // Chargement des questions et des catégories
    // On charge les questions d'abord pour avoir les id des questions
    await this.loadQuestions();
    // On charge les catégories pour avoir les titres des catégories
    await this.loadCategories();
  },

  methods: {
    // Chargement des catégories
    // On récupère les catégories depuis l'API
    async loadCategories() {
      try {
        const response = await axios.get(
          "https://quizz-musical-backend.airdev.be/api/categories"
        );
        this.categories = response.data;
      } catch (error) {
        console.error("Erreur lors du chargement des catégories:", error);
      }
    },

    // Chargement des questions
    // On récupère les questions d'une catégorie depuis l'API
    async loadQuestions() {
      try {
        // Utiliser l'URL correcte pour récupérer les questions d'une catégorie
        const response = await axios.get(
          `https://quizz-musical-backend.airdev.be/api/categories/${this.categoryId}`
        );
        // Les questions sont dans response.data.questions
        const questions = response.data.questions;

        if (questions && questions.length > 0) {
          const randomIndex = Math.floor(Math.random() * questions.length);
          this.currentQuestion = questions[randomIndex];
        }
      } catch (error) {
        console.error("Erreur:", error);
      }
    },

    async changeCategory(newCategoryId) {
      this.categoryId = newCategoryId;
      await this.loadQuestions();
    },
  },
};
</script>
