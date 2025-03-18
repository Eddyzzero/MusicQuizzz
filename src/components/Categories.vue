<template>
  <div>
    <h2>Choisissez une catégorie</h2>
    <p v-if="loading">Chargement des catégories...</p>
    <p v-if="error">{{ error }}</p>
    <div v-else>
      <router-link
        v-for="category in activeCategories"
        :key="category.id"
        :to="`/quizz/${category.id}`"
      >
        <Button size="small" customClass="secondary">
          {{ category.title }} ({{ category.questions_count }} questions)
        </Button>
      </router-link>
    </div>
  </div>
</template>

<script>
import { api } from "@/services/api.js";
import Button from "@/components/Button.vue";

export default {
  name: "Categories",
  components: {
    Button,
  },
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
    this.fetchCategories();
  },
  methods: {
    async fetchCategories() {
      this.loading = true;
      try {
        const result = await api.getCategories();
        console.log("Catégories reçues:", result);
        this.categories = result;
      } catch (error) {
        this.error = "Impossible de charger les catégories.";
      } finally {
        this.loading = false;
      }
    },
  },
};
</script>

<style scoped>
router-link {
  text-decoration: none;
}

button {
  margin: 0.5rem;
}
</style>
