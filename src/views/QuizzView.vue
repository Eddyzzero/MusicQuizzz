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
import QuizLyrics from "@/components/QuizLyrics.vue";
import { api } from "@/services/api";
import TitleComponent from "@/components/title.vue";

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

      const filtered = this.categoryData.questions
        .filter((q) => q.is_active == 1)
        .sort((a, b) => a.id - b.id);

      console.log("Questions actives filtrées :", filtered);
      return filtered;
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
            console.log("Toutes les questions :", data.questions);
            console.log(
              "Question 2 : ",
              data.questions.find((q) => q.id === 2)
            );
            ``;
          } catch (error) {
            console.error("Erreur lors du chargement des données :", error);
          }
        }
      },
    },
  },
};
</script>

<style scoped></style>
