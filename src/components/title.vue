<template>
  <div>
    <h1 v-if="categoryTitle">{{ categoryTitle }}</h1>

    <div v-if="questions.length > 0">
      <h2>Questions :</h2>
      <ul>
        <li v-for="question in questions" :key="question.id">
          {{ question.title }}
        </li>
      </ul>
    </div>
    <p v-else>Chargement des questions...</p>
  </div>
</template>

<script>
import { api } from "@/services/api";

export default {
  name: "TitleComponent",
  data() {
    return {
      categoryTitle: null,
      questions: [],
    };
  },
  watch: {
    "$route.params.id": {
      immediate: true,
      async handler(newCategoryId) {
        if (newCategoryId) {
          await this.fetchCategoryData(newCategoryId);
        }
      },
    },
  },
  methods: {
    async fetchCategoryData(categoryId) {
      try {

        const categoryData = await api.getCategoryData(categoryId);


        this.categoryTitle = categoryData.title;
        this.questions = categoryData.questions;
      } catch (error) {
        console.error(
          "Erreur lors du chargement des données de la catégorie :",
          error
        );
      }
    },
  },
};
</script>
