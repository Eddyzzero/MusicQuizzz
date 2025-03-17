<template>
  <div>
    <h2>Choisissez une catégorie</h2>
    <p v-if="loading">Chargement des catégories...</p>
    <p v-if="error">{{ error }}</p>
    <div v-else>
      <button
        v-for="category in activeCategories"
        :key="category.id"
        @click="selectCategory(category)"
      >
        {{ category.title }} ({{ category.questions_count }} questions)
      </button>
    </div>
  </div>
</template>

<script>
import { api } from "@/services/api.js";

export default {
  name: "Categories",
  data() {
    return {
      categories: [],
      loading: false,
      error: null,
    };
  },
  computed: {
    activeCategories() {
      return this.categories.filter((category) => category.is_active === 1);
    },
  },
  async created() {
    console.log("Categories component created");
    this.fetchCategories();
  },
  methods: {
    async getCategories() {
      try {
        const response = await axios.get(`${API_BASE_URL}/categories`);
        return response.data;
      } catch (error) {
        console.error("Erreur dans getCategories:", error);
        throw error;
      }
    },
    async fetchCategories() {
      this.loading = true;
      try {
        const result = await api.getCategories();
        console.log("Catégories reçues:", result);
        this.categories = result;
      } catch (error) {
        console.error("Erreur détaillée:", error);
        this.error = "Impossible de charger les catégories.";
      } finally {
        this.loading = false;
      }
    },
    selectCategory(category) {
      this.$emit("categorySelected", category);
    },
  },
};
</script>
