<template>
  <div class="categories-container">
    <h2 class="category-title">Choisissez une catégorie</h2>
    <p v-if="loading">Chargement des catégories...</p>
    <p v-if="error">{{ error }}</p>
    <div v-else class="category-buttons">
      <router-link v-for="category in activeCategories" :key="category.id" :to="getRouteForCategory(category)"
        class="category-link">
        <div class="category-button">
          <p>{{ category.title }}</p>
        </div>
        <div class="category-n-questions">
          <p>{{ category.questions_count }} questions</p>
        </div>
      </router-link>
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
      return this.categories.filter((category) => category.is_active === 1 && category.questions_count > 0);
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
    getRouteForCategory(category) {
      return category.title === "Blind test"
        ? `/blind-test/${category.id}`
        : `/quizz/${category.id}`;
    },
  },
};
</script>

<style scoped>
.categories-container {
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 1rem;
}

.category-title {
  font-size: 1.5rem;
  color: #fff;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  font-family: var(--font-family);
  font-weight: 700;
  text-transform: uppercase;
  margin-bottom: 1rem;
}

.category-buttons {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  width: 100%;
  max-width: 600px;
}

.category-link {
  text-decoration: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

.category-button {
  width: 150px;
  height: 100px;

  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
  align-items: center;

  background-color: var(--light-green);
  color: var(--dark-green);
  border: 3px solid var(--dark-green);
  border-radius: 10px;

  font-family: var(--font-family);
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;
  text-align: center;
}

.category-button:hover {
  background-color: var(--dark-green);
  color: white;
  transform: scale(1.05);
}

.category-n-questions {
  font-size: 0.8rem;
  color: var(--dark-grey);
  font-weight: normal;
}

.category-n-questions p {
  margin: 0;
  color: var(--light-green);

}

/* Responsive styles */
@media (max-width: 768px) {
  .category-button {
    width: 100px;
    height: 80px;
    font-size: 0.9rem;
  }
}
</style>
