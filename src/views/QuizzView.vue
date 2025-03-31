<template>
  <div v-if="categoryData">
    <!--<header>
      <TitleComponent :categoryTitle="categoryData.title" />
    </header>-->

    <section>
      <!-- Affiche QuizLyrics seulement si c’est la bonne catégorie -->
      <QuizLyrics
        v-if="categoryData.title === 'Paroles de chansons'"
        :questions="filteredQuestions"
      />
      <!-- 
    <QuizBlindTest
      v-else-if="categoryData.title === 'Blind test'"
      :questions="filteredQuestions"
    />
    --></section>
  </div>
  <p v-else>Chargement...</p>
</template>

<script>
<<<<<<< HEAD
import QuizLyrics from "@/components/QuizLyrics.vue";
import { api } from "@/services/api";
import TitleComponent from "@/components/title.vue";
=======
import Answer from "@/components/Answer.vue";
import TitleComponent from "../components/title.vue";
>>>>>>> feature/QuizLyrics

export default {
  name: "QuizzView",
  components: {
    QuizLyrics,
    TitleComponent,
  },
  data() {
    return {
      categoryData: null,
    };
  },
  computed: {
    filteredQuestions() {
      if (!this.categoryData || !this.categoryData.questions) return [];
      return this.categoryData.questions.filter((q) => q.is_active === 1);
    },
  },
  watch: {
    "$route.params.id": {
      immediate: true,
      async handler(newId) {
        if (newId) {
          try {
            const data = await api.getCategoryData(newId);
            this.categoryData = data;
          } catch (error) {
            console.error("Erreur lors du chargement des données :", error);
          }
        }
      },
    },
  },
};
</script>

<style scoped>
/* Ajoute du style ici si besoin */
</style>
